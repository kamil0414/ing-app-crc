import {LitElement, html} from 'lit-element';

import '../components/crc-header.js';
import '../pages/crc-users.js';

class CrcApp extends LitElement {
  render() {
    return html`
      <style>

      </style>

      <crc-header></crc-header>

      <crc-users></crc-users>
    `;
  }

}

window.customElements.define('crc-app', CrcApp);
