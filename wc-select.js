const wcTemplate = ({label, options}) => {
  const template = document.createElement('template');
  template.innerHTML = /*html*/ `
<label for="wc-input">${label}</label>
<input list="wc-datalist" id="wc-input" />
    <datalist id="wc-datalist">
    ${options}
    </datalist>
`;
  return template.content.cloneNode(true);
};

class WebComponent extends HTMLElement {
  static ObservedAttributes = ["label"];
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  
  connectedCallback() {
    this.shadowRoot.appendChild(
      wcTemplate({
        label: this.getAttribute('label'),
        options: this.innerHTML,
      })
    );
  }
}

customElements.define("wc-select", WebComponent);
