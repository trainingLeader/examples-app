import {LitElement, css, html} from 'lit';

class MyHeader extends LitElement {
  static styles = css`
      h1 {
        font-family: Manrope, sans-serif;
        text-align: center;
      }
    `;
  render() {
    return html`
      <header><h1>Element composition</h1></header>
    `;
  }
}
customElements.define('my-header', MyHeader);
