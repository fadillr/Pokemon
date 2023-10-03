class AppBar extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <nav class="navbar">
            <ul class="nav-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">Pokédex</a></li>
                <li><a href="#">Team Builder</a></li>
                <li><a href="#">Items</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
      `;
    }
  }
  
  customElements.define('app-bar', AppBar);
  