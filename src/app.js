// Import custom elements
import './component/app-bar.js';
import './component/search.js';

// ...

// Tarik custom elements ke dalam index.html
const appBar = document.createElement('app-bar');
const searchForm = document.createElement('search-form');

document.body.appendChild(appBar);
document.getElementById('form').appendChild(searchForm);
