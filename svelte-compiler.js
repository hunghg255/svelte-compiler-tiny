import { compile, preprocess, parse } from 'svelte/compiler';
import * as fs from 'fs';
const content = fs.readFileSync('./App.svelte', 'utf8');


(async () => {
  const c = await preprocess(content, [
    {
      // markup
      // style
      script: ({ content }) => {
        return {
          code: content.replace('%%NAME%%', '"HUNG"')
        }
      },
    }
  ]);
  const {css, js} = compile(c.code, {
  	// options
    dev: true,
    legacy: true,

    // ssr
    // hydratable: true,
    // generate: 'ssr'
  });
  console.log(js.code);
})()

