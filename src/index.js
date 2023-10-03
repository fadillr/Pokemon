import './style/style.css';

const form = document.getElementById("form");
const searchInput = document.getElementById("search");
const pokeContainer = document.getElementById("poke_container");

// Fungsi untuk memuat semua data Pokemon saat halaman dimuat
const loadAllPokemon = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151"); // Mengambil data 151 Pokemon pertama
    if (!response.ok) {
      throw new Error("Failed to load Pokemon data!");
    }
    const data = await response.json();
    const pokemonList = data.results;

    // Menampilkan setiap Pokemon dalam daftar
    for (const pokemon of pokemonList) {
      const pokemonData = await fetchPokemon(pokemon.name);
      displayPokemon(pokemonData);
    }
  } catch (error) {
    console.error(error);
  }
};

// Fungsi untuk mencari data Pokemon berdasarkan nama
const fetchPokemon = async (searchTerm) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
    if (!response.ok) {
      throw new Error("Pokemon not found!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Fungsi untuk menampilkan data Pokemon di dalam kontainer
const displayPokemon = (pokemon) => {
  if (pokemon) {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("pokemon-card");

    const name = document.createElement("h2");
    name.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;

    const types = document.createElement("div");
    types.classList.add("types");
    pokemon.types.forEach((type) => {
      const typeElement = document.createElement("span");
      typeElement.textContent = type.type.name;
      types.appendChild(typeElement);
    });

    pokemonCard.appendChild(name);
    pokemonCard.appendChild(image);
    pokemonCard.appendChild(types);

    pokeContainer.appendChild(pokemonCard);
  }
};

// Panggil fungsi loadAllPokemon saat halaman dimuat
window.addEventListener("load", loadAllPokemon);

// Tambahkan event listener untuk form pencarian
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const searchTerm = searchInput.value.toLowerCase();
  const pokemonData = await fetchPokemon(searchTerm);
  pokeContainer.innerHTML = "";
  if (pokemonData) {
    displayPokemon(pokemonData);
  } else {
    pokeContainer.innerHTML = "<p>Pokemon not found!</p>";
  }
});
