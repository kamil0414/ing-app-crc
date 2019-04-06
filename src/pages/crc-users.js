import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CrcUsers extends PolymerElement {

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        .container {
          max-width: 1600px;
          margin: 10px auto;
          display: flex;
          flex-basis: auto;
          flex-direction: row;
          flex-grow:0;
          flex-wrap:wrap;
        }
      </style>


      <div class="container">

      </div>


    `;
  }

}

window.customElements.define('crc-users', CrcUsers);
