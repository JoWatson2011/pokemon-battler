const inquirer = require("inquirer");
const { Battle, Pokeball, Trainer } = require("./index.js");
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

const selectMove = [
  {
    type: "list",
    name: "move",
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
    pokemonChoices[randomNumber(0, pokemonChoices.length)]; 

  console.log(`\nA ${rivalPokemonName} appeared!`);
  const rivalPokemon = getPokemon(rivalPokemonName);

  const playerPokemon = getPokemon(firstAnswers.pokemon);
  const playerPokeball = new Pokeball(playerPokemon);
  const trainer = new Trainer([playerPokeball]);

  trainer.pokeBelt[0].throw();
  console.log("\n");
  const thisBattle = new Battle(playerPokemon, rivalPokemon);

  const { move } = await inquirer.prompt(selectMove);
  if (move === "Run away") {
    console.log(`\n${firstAnswers.name} ran away!\n`);
    return;
  }
  if (move === "Select Pokemon") {
    const playerPokemon = await selectNewPokemon(trainer);
  }

  if (move === "Fight") {

  }
}

playGame();
