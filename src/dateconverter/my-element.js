import {LitElement, html} from 'lit';

class MyElement extends LitElement {
  static properties = {
    date: {
      converter: (attrValue) => {
        if (attrValue) return new Date(attrValue);
        else return undefined;
      },
    },
  };

  render() {
    return html`
      ${
        this.date
          ? html`<p>Date is
            <span id="datefield">${this.date.toLocaleDateString()}</span>
          </p>`
          : 'No date set'
      }
    `;
  }
}
customElements.define('my-element', MyElement);