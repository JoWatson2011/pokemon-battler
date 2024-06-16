const getPokemon = require("../utils/getPokemon");
const randomNumber = require("../utils/randomNumber");

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
  })
});
