import $ from 'jquery'
import './style.scss'
import logoImageJS from './javascript.svg'
import logoImageJQery from './public/jquery.svg'
import logoImageSASS from './public/sass.svg'
import { setupCounter } from './counter.js'

$('#app').html(`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${logoImageJS}" class="logo logo_javascript" alt="JavaScript logo" />
    </a>
    <a href="https://jquery.com" target="_blank">
      <img src="${logoImageJQery}" class="logo logo_jquery" alt="jQuery logo" />
    </a>
    <a href="https://sass-lang.com/" target="_blank">
      <img src="${logoImageSASS}" class="logo logo_sass" alt="SASS-lang logo" />
    </a>
    <h1>Hello Vite, Vanilla-JS, jQuery and SASS !</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the each logo to learn more
    </p>
  </div>
`);

setupCounter('#counter');
