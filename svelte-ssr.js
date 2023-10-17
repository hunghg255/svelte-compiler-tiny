import { compile } from 'svelte/compiler';
import * as fs from 'fs';

const content = fs.readFileSync('./App.svelte', 'utf8');

(async () => {
  const { js} = compile(content, {
    generate: 'ssr',
    hydratable: true,
  });

  fs.writeFileSync('./public/index-ssr.js', js.code, 'utf-8');

  const a = (await import('./public/index-ssr.js')).default;

  const { head, html, css } = a.render();

  const template = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Svelte SSR</title>
  ${head}
  <style>${css.code}</style>
</head>
<body>
  ${html}

  <script type="module" src="./index.js"></script>
</body>
</html>
  `;

  fs.writeFileSync('./public/index.html', template, 'utf-8');

  // hydarte
  const { js: clientJs } = compile(content, {
    generate: 'dom',
    hydratable: true,
    css: 'none'
  });

  console.log(clientJs);

  fs.writeFileSync('./public/index-csr.js', clientJs.code, 'utf-8');
})();
