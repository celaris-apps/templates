import { LitElement, css, html } from 'lit'
import celarisLogo from './assets/celaris.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * The name to greet.
       */
      name: { type: String },

      /**
       * The message returned from the greet method.
       */
      greetMsg: { type: String },
    }
  }

  constructor() {
    super()
    this.name = ''
    this.greetMsg = ''
  }

  render() {
    window.addEventListener('message', (event) => {
      console.log('Received message:', event)
    })
    return html`
      <div>
        <a href="https://celaris.cc/" target="_blank">
          <img src=${celarisLogo} class="logo celaris" alt="Celaris logo" />
        </a>
      </div>
      <slot></slot>

      <input id="greet-input" value=${this.name} @input=${this._onInput} placeholder="Enter a name..." />
      <button type="submit" @click=${this.greet}>Greet</button>
      <p>${this.greetMsg}</p>
    `
  }

  _onClick() {
    this.count++
  }

  async greet() {
    window.greet(this.name).then((res) => {
      this.greetMsg = res.message
    })
  }

  _onInput(e) {
    this.name = e.target.value
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      #greet-input {
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        border: 1px solid #1a1a1a;
        border-radius: 8px;
        margin-right: 1em;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `
  }
}

window.customElements.define('my-element', MyElement)
