class SearchForm extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <form id="form">
            <input type="text" id="search" class="search" placeholder="Search your Pokémon">
        </form>
      `;
    }
  }
  
  customElements.define('search-form', SearchForm);
  