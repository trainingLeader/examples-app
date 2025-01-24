import {LitElement, html, css} from 'lit';

export class MyElement extends LitElement {
  static properties = {
    greeting: {},
    planet: {},
  };
    // Los estilos están limitados a este elemento: no entrarán en conflicto con los estilos
    // de la página principal ni con otros componentes. La API de estilos se puede exponer
    // mediante propiedades personalizadas de CSS.
  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: lightgray;
    }
    .planet {
      color: var(--planet-color, blue);
    }
  `;

  constructor() {
    super();
    // Define propiedades reactivas: actualizar una propiedad reactiva hace que
    // el componente se actualice.
    this.greeting = 'Hello';
    this.planet = 'World';
  }

// El método render() se llama cada vez que cambian las propiedades reactivas.
// Devuelve HTML en una plantilla literal de cadena etiquetada con la función
// html para describir el DOM interno del componente.
// Las expresiones pueden establecer valores de atributos, valores de propiedades,
// controladores de eventos y nodos/hijos de texto.
  render() {
    return html`
      <span @click=${this.togglePlanet}
        >${this.greeting}
        <span class="planet">${this.planet}</span>
      </span>
    `;
  }

// Los manejadores de eventos pueden actualizar el estado de las @propiedades en la instancia del elemento,
// lo que provoca que se vuelva a renderizar.
  togglePlanet() {
    this.planet = this.planet === 'World' ? 'Mars' : 'World';
  }
}
customElements.define('my-element', MyElement);