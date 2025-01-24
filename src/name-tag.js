import {LitElement, html} from 'lit';

class NameTag extends LitElement {
  static properties = {
    name: {},
  };

  render() {
    return html`Hello I'm ${this.name}.`;
  }
}
customElements.define('name-tag', NameTag);

const tag = document.createElement('name-tag');
tag.name = 'dynamically created';
document.body.appendChild(tag);