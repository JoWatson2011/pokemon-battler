const getPokemon = require("../utils/getPokemon");
const randomNumber = require("../utils/randomNumber");
const { Trainer, Charmander, Squirtle } = require("../index.js");
const selectNewPokemon = require("../utils/selectNewPokemon.js");

describe("getPokemon()", () => {
  test("Returns undefined when not passed a valid pokemon name", () => {
    const output = getPokemon("notapokemon");
    expect(output).toBe(undefined);
  });
  test("Returns a new instance of that pokemon's class when passed a valid pokemon name", () => {
    const validPokemon = ["Charmander", "Squirtle", "Bulbasaur", "Rattata"];
    validPokemon.forEach((pokemon) => {
      const input = pokemon;
      const output = getPokemon(input);

      expect(output).toHaveProperty("name", pokemon);
      expect(output).toHaveProperty("hitPoints");
      expect(output).toHaveProperty("attackDamage");
      expect(output).toHaveProperty("move");
    });
  });
});

describe("randomNumber()", () => {
  test("Returns 0 when passed a falsy value as min or max", () => {
    const output_zeros = randomNumber(0, 0);
    expect(output_zeros).toBe(0);
    const output_strings = randomNumber("", undefined);
    expect(output_strings).toBe(0);
    const output_mixed = randomNumber(undefined, 2);
    expect(output_strings).toBe(0);
  });
  test("Returns an integer with in the min and max values when passed integers", () => {
    for (let i = 0; i < 10; i++) {
      const output = randomNumber(0, 4);
      expect(output).toBeLessThanOrEqual(4);
      expect(output).toBeGreaterThanOrEqual(0);
      expect(Number.isInteger(output)).toBe(true);
    }
  });
});

describe("selectNewPokemon()", () => {
  test("If the trainer instance passed has only one pokemon in the pokeBelt, log a message saying there are no pokemon that can be selected and return the active pokemon", () => {
    const logSpy = jest.spyOn(console, "log");

    const charmander = new Charmander();
    const testTrainer = new Trainer([charmander]);
    return selectNewPokemon(testTrainer).then((res) => {
      expect(logSpy).toHaveBeenCalledWith(
        "No other pokemon in party to select!"
      );
      expect(res).toBe(charmander);
      logSpy.mockRestore();
    });
  });
  test("If the player has more than one pokemon in the belt, return the new pokemon that has been selected", () => {
    const logSpy = jest.spyOn(console, "log");

    const charmander1 = new Charmander();
    const charmander2 = new Charmander();
    const squirtle = new Squirtle();
    const testTrainer = new Trainer([charmander1, charmander2, squirtle]);
    return selectNewPokemon(testTrainer).then((res) => {
      expect(logSpy).toHaveBeenCalledWith("Go, Squirtle!");
      expect(res).toBe(squirtle);
      logSpy.mockRestore();
    });
  });
});
