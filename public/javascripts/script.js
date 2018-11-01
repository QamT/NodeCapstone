import '../stylesheets/main.scss';

[...document.querySelectorAll('[data-module')].forEach(el => {
  const name = el.getAttribute('data-module');
  const Module = require(`./modules/${name}`).default;
  new Module(el);
});


