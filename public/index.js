import Component from './index-csr.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#hydrate')?.addEventListener('click', () => {
    const app = new Component({
      target: document.body,
      hydrate: true
    });

    console.log(app);
  });
});


