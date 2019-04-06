import {LitElement, html} from 'lit-element';

class CrcBanner extends LitElement {
  render() {
    return html`
      <style>
        .banner {
          background-color: #ffffff;
          padding: 30px 0;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px 0px, rgba(0, 0, 0, 0.24) 0px 1px 1px 0px;
        }
        .container {
          max-width: 1600px;
          margin: 0 auto;
        }
        h1 {
          color: #ff6200;
        }

        .btn {
          display: inline-block;
          padding: 0 15px;
          font-size: 16px;
          line-height: 36px;
          font-weight: 400;
          border-radius: 4px;
          border: 1px solid transparent;
          outline: none;
          cursor: pointer;
          text-decoration: none;
        }

        .btn-orange {
          color: #ffffff;
          background-color: #ff6200;
        }

        .btn-indingo {
          color: #ffffff;
          background-color: #525199;
        }

        .btn-lg {
          padding: 5px 12px;
          margin: 5px;
        }

        .flex {
          display: flex;
        }

        .labels_container {
          flex: 1;
        }
      </style>

      <div class="banner">
        <div class="container">
          <div class="flex">
            <div class="labels_container">
              <h1>${this.title}</h1>
              <p>${this.description}</p>
            </div>
            <div class="buttons_container">
            </div>
      </div>
        </div>
      </div>
    `;
  }
  
  static get properties() {
    return {
      title: String,
      description: String,
    };
  }

}

window.customElements.define('crc-banner', CrcBanner);
