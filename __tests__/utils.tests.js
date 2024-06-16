const getPokemon = require("../utils/getPokemon");

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
