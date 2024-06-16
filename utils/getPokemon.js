const { Charmander, Squirtle, Bulbasaur, Rattata } = require("../index");

function getPokemon(pokemonName) {
  if (pokemonName === "Rattata") return new Rattata();
  if (pokemonName === "Bulbasaur") return new Bulbasaur();
  if (pokemonName === "Squirtle") return new Squirtle();
  if (pokemonName === "Charmander") return new Charmander();
}

module.exports = getPokemon;
