import {LitElement, html} from 'lit-element';

// import '@polymer/paper-tabs/paper-tabs.js';
// import '@polymer/paper-tabs/paper-tab.js';

class CrcHeader extends LitElement {
  render() {
    return html`
      <style>
        .header {
          border-bottom: 1px solid #d5d5d5;
          z-index: 1001;
          background-color: #ffffff;
          height: 63px;
        }
        .logo {
          width: 120px;
          height: 63px;
          margin-right: 30px;
        }
        .container {
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
        }
        .flex-wrapper {
          display: flex;
          align-items: center;
        }
        h2 {
          margin: 0;
          font-weight: 500;
        }

      </style>

      <div class="header">
        <div class="container">
        <div class="flex-wrapper">
          <img class="logo" src="../../../assets/images/ing-logo.svg">
          <h2>CRC 2019 - Frontend</h2>
      </div>
        </div>
      </div>
    `;
  }

}

window.customElements.define('crc-header', CrcHeader);
