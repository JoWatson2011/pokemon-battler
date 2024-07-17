const inquirer = require("inquirer");
async function selectNewPokemon(trainer) {
  if (trainer.pokeBelt.length === 1) {
    console.log("No other pokemon in party to select!");
    return trainer.pokeBelt[0];
  }
  const selectPokemon = {
    type: "list",
    name: "pokemon",
    message: "Which pokemon do you want to send out?",
    choices: trainer.pokeBelt.map((pokeball) => {
      console.log(pokeball.storedPokemon);
    }),
  };
  const answer = await inquirer.prompt(selectPokemon);
  pokeball.throw();
  return answer;
}
module.exports = selectNewPokemon;
