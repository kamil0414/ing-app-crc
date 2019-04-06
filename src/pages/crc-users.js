import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
import '../components/crc-banner.js';
import '../components/crc-user-box.js';

class CrcUsers extends PolymerElement {

  constructor() {
    super();
    this._filterUsers = this._filterUsers.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('filter-users', this._filterUsers);
  }

  _filterUsers(event) {
    const param = event.detail;
    this.$.getUsersRequest.url = `https://cloud.squidex.io/api/content/crc/users${param}`;
  }

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

      <iron-ajax id="getUsersRequest"
          auto
          headers = '{"Authorization": "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjkxRkRENEVCRDYwNjMxNURFREI4MENEMDkzMERFRkZBMjFEREE2NkIiLCJ0eXAiOiJKV1QiLCJ4NXQiOiJrZjNVNjlZR01WM3R1QXpRa3czdi1pSGRwbXMifQ.eyJuYmYiOjE1NTQ0NjQ1NjgsImV4cCI6MTU1NzA1NjU2OCwiaXNzIjoiaHR0cHM6Ly9jbG91ZC5zcXVpZGV4LmlvL2lkZW50aXR5LXNlcnZlciIsImF1ZCI6WyJodHRwczovL2Nsb3VkLnNxdWlkZXguaW8vaWRlbnRpdHktc2VydmVyL3Jlc291cmNlcyIsInNxdWlkZXgtYXBpIl0sImNsaWVudF9pZCI6ImNyYzpkZWZhdWx0Iiwic2NvcGUiOlsic3F1aWRleC1hcGkiXX0.v1cMuTz63xa7zMYDWSJ-9rEfDgFqLYYiermBvAfZVqn60O0NdaqoHnjI7fiIRqNunkTtSZGV_3MZoWv_8oczRlf6AF2TTR8_0GjBkfC0-Xp679MZDqxwq4MS3enHBSMqFVXqUwxSaP1ORDQQ1-vsW3hvj4P-HziJQZEaXnE_HUfYg8FuYEn2lxstcUXM4BnHFRNR67SUng-4SKl71dVPU7olEWdcjs9JKwcMXIZXkhdZgA2l9ibUVICoWgj1BKBMHrk7wIibCDWP2f1KHYzyBJgEwSGrFH8zg61HVsgXh7y4G4v6SnY2_Q57nAqP8-jPV6CN3Y3s1AzjAeuW9PRLqQ"}'
          url="https://cloud.squidex.io/api/content/crc/users"
          method = "GET"
          handle-as="json"
          last-response="{{response}}"
          debounce-duration="300">
      </iron-ajax>

      <crc-banner title="Users" description="Management panel"></crc-banner>

      <div class="container">
        <template is="dom-repeat" items="{{response.items}}">
          <crc-user-box firstname="[[item.data.firstname.iv]]" lastname="[[item.data.lastname.iv]]" email="[[item.data.email.iv]]" gender="[[item.data.gender.iv]]"></crc-user-box>
        </template>
      </div>


    `;
  }

  static get properties() {
    return {
      response: {
        type: Object,
      }
    };
  }
}

window.customElements.define('crc-users', CrcUsers);
