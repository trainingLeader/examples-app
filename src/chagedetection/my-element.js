import {LitElement, html} from 'lit';
import {localDateFromUTC} from './date-utils.js';
import './date-display.js';

class MyElement extends LitElement {
  static properties = {
    date: {},
  };

  render() {
    return html`
      <p>Choose a date:
      <input type="date" @change=${this._dateChanged}></p>
      <p><button @click=${this._chooseToday}>Choose Today</button></p>
      <p>Date chosen: <date-display .date=${this.date}></date-display></p>
    `;
  }

  _dateChanged(e) {
    const utcDate = e.target.valueAsDate;
    if (utcDate) {
      this.date = localDateFromUTC(utcDate);
    }
  }

  _chooseToday() {
    this.date = new Date();
  }
}
customElements.define('my-element', MyElement);