const inquirer = require("inquirer");
const { Battle } = require("./index.js");
const getPokemon = require("./utils/getPokemon.js");
const randomNumber = require("./utils/randomNumber.js");

let pokemonChoices = ["Charmander", "Squirtle", "Bublbasaur", "Rattata"];
const firstQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    default: "Ash",
  },
  {
    type: "list",
    name: "pokemon",
    message: "Which pokemon do you choose?",
    choices: pokemonChoices,
  },
];

const secondQuestions = [
  {
    type: "list",
    name: "pokemon",
    message: "What do you want to do?",
    choices: ["Fight", "Run away", "Select Pokemon"],
  },
];

async function playGame() {
  const firstAnswers = await inquirer.prompt(firstQuestions);

  pokemonChoices = pokemonChoices.filter(
    (pokemon) => pokemon !== firstAnswers.pokemon
  );
  const rivalPokemonName =
    pokemonChoices[randomNumber(0, pokemonChoices.length)]; // Pick a random one from array

  console.log(`A ${rivalPokemonName} appeared!`);
  console.log(`${firstAnswers.name} sent out ${firstAnswers.pokemon}!`);

  const playerPokemon = getPokemon(firstAnswers.pokemon);
  const rivalPokemon = getPokemon(rivalPokemonName);
  const thisBattle = new Battle(playerPokemon, rivalPokemon);

  console.log(thisBattle, playerPokemon, rivalPokemon);

  const secondAnswers = await inquirer.prompt(secondQuestions);


}

playGame();
