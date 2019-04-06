import {LitElement, html} from 'lit-element';
import '@polymer/iron-icons/iron-icons.js';

class CrcUserBox extends LitElement {
  render() {
    return html`
      <style>
        .box {
          background-color: #ffffff;
          border-radius: 4px;
          box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.12), 0 1.5px 1.5px 0 rgba(0, 0, 0, 0.24);
          cursor: pointer;
          display: flex;
          flex-direction: row;
          height: 150px;
          width: 360px;
          transition: all .2s ease-in-out;
          padding: 10px;
          margin: 10px;
        }

        .box:hover {
          transform: scale(1.03);
        }

        .subtitle {
          color: #777777;
        }

        iron-icon {
          width: 60px;
          height: 60px;
          margin-right: 10px;
          color: #767676;
        }
      </style>

      <div class="box">
        <iron-icon icon="icons:account-circle"></iron-icon>
        <div class="user_details">
          <h4>${this.firstname}&nbsp;${this.lastname}</h4>
          <p>${this.email}</p>
          <p class="subtitle">${this.gender}</p>
        <div>
      </div>
    `;
  }

  static get properties() {
    return {
      firstname: String,
      lastname: String,
      mail: String,
      gender: String,
      isActive: {
        type: Boolean,
        value: false,
      },
    };
  }

}

window.customElements.define('crc-user-box', CrcUserBox);
