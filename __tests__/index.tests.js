const {
  Pokemon,
  Fire,
  Grass,
  Water,
  Normal,
  Charmander,
  Squirtle,
  Bulbasaur,
  Rattata,
  Pokeball,
  Trainer,
  Battle,
} = require("../index.js");
describe("Pokemon()", () => {
  describe("Pokemon() constructor", () => {
    test("When the Pokemon() constructor is invoked, it should create a new instance with name, hitPoints, attackDamage and move properties", () => {
      const newPokemon = new Pokemon();
      expect(newPokemon.name).toBe("");
      expect(newPokemon.hitPoints).toBe(20);
      expect(newPokemon.attackDamage).toBe(5);
      expect(newPokemon.move).toBe("tackle");
    });
    test("Pokemon() constructor can take arguments for Pokemon name", () => {
      const newPokemon = new Pokemon("Togepi");
      expect(newPokemon.name).toBe("Togepi");
    });
  });
  describe("Pokemon() methods", () => {
    describe("takeDamage()", () => {
      test("When pokemon takes damage, the value of damage property is subtracted from the .hitPoints property ", () => {
        const newPokemon = new Pokemon();

        newPokemon.takeDamage(3);
        expect(newPokemon.hitPoints).toBe(17);

        newPokemon.takeDamage(0);
        expect(newPokemon.hitPoints).toBe(17);
      });
      test("Returns a message stating how much damage was taken and the remaining HP", () => {
        const newPokemon = new Pokemon("Togepi");
        expect(newPokemon.takeDamage(3)).toBe(
          "Togepi took 3 damage! 17 HP remaining!"
        );
      });
    });
    describe("useMove()", () => {
      test("Returns the Pokemon's attack damage when a move is used", () => {
        const newPokemon = new Pokemon();

        expect(newPokemon.useMove("tackle")).toBe(newPokemon.attackDamage);
      });
    });
    describe("hasFainted()", () => {
      test("Returns true if pokemon hit points are >0", () => {
        const newPokemon = new Pokemon();
        expect(newPokemon.hasFainted()).toBe(false);
      });
      test("Returns false if pokemon hit points are 0", () => {
        const newPokemon = new Pokemon();
        newPokemon.takeDamage(20);
        expect(newPokemon.hasFainted()).toBe(true);
      });
    });
  });
  describe("Pokemon() subclasses", () => {
    describe("Fire()", () => {
      describe("Fire() constructor", () => {
        test("Instance of Fire() has  .type property of fire and .move of tackle", () => {
          const newFirePokemon = new Fire();
          expect(newFirePokemon.type).toBe("fire");
          expect(newFirePokemon.move).toBe("tackle");
        });
      });
      describe("Fire() methods", () => {
        describe("isEffectiveAgainst()", () => {
          test("When passed a grass pokemon, returns true, and false otherwise", () => {
            const newFirePokemon = new Fire();
            const newGrassPokemon = new Grass();
            const newNormalPokemon = new Normal();
            expect(newFirePokemon.isEffectiveAgainst(newGrassPokemon)).toBe(
              true
            );
            expect(newFirePokemon.isEffectiveAgainst(newNormalPokemon)).toBe(
              false
            );
          });
        });
        describe("isWeakTo()", () => {
          test("When passed a water pokemon, returns true, and returns false otherwise", () => {
            const newFirePokemon = new Fire();
            const newWaterPokemon = new Water();
            const newNormalPokemon = new Normal();
            expect(newFirePokemon.isWeakTo(newWaterPokemon)).toBe(true);
            expect(newFirePokemon.isWeakTo(newNormalPokemon)).toBe(false);
          });
        });
      });
      describe("Fire() subclasses", () => {
        describe("Charmander", () => {
          test("Instance of Charmander is a fire type pokemon with the move ember", () => {
            const charmander = new Charmander();

            expect(charmander.name).toBe("Charmander");
            expect(charmander.move).toBe("ember");
            expect(charmander.type).toBe("fire");
          });
        });
      });
    });
    describe("Water()", () => {
      describe("Water() constructor", () => {
        test("Instance of Water() has  .type property of water .move of tackle", () => {
          const newWaterPokemon = new Water();
          expect(newWaterPokemon.type).toBe("water");
        });
      });
      describe("Water() methods", () => {
        describe("isEffectiveAgainst()", () => {
          test("When passed a fire pokemon, returns true, and false otherwise", () => {
            const newFirePokemon = new Fire();
            const newWaterPokemon = new Water();
            const newNormalPokemon = new Normal();
            expect(newWaterPokemon.isEffectiveAgainst(newFirePokemon)).toBe(
              true
            );
            expect(newWaterPokemon.isEffectiveAgainst(newNormalPokemon)).toBe(
              false
            );
          });
        });
        describe("isWeakTo()", () => {
          test("When passed a grass pokemon, returns true, and returns false otherwise", () => {
            const newGrassPokemon = new Grass();
            const newWaterPokemon = new Water();
            const newNormalPokemon = new Normal();
            expect(newWaterPokemon.isWeakTo(newGrassPokemon)).toBe(true);
            expect(newWaterPokemon.isWeakTo(newNormalPokemon)).toBe(false);
          });
        });
      });
      describe("Water() subclasses", () => {
        describe("Squirtle()", () => {
          test("Instance of Squirtle is a water type pokemon with water gun as it's move", () => {
            const squirtle = new Squirtle();

            expect(squirtle.name).toBe("Squirtle");
            expect(squirtle.move).toBe("water gun");
            expect(squirtle.type).toBe("water");
          });
        });
      });
    });
    describe("Grass()", () => {
      describe("Grass() constructor", () => {
        test("Instance of Grass() has  .type property of grass .move of tackle", () => {
          const newGrassPokemon = new Grass();
          expect(newGrassPokemon.type).toBe("grass");
        });
      });
      describe("Grass() methods", () => {
        describe("isEffectiveAgainst()", () => {
          test("When passed a water pokemon, returns true, and false otherwise", () => {
            const newGrassPokemon = new Grass();
            const newWaterPokemon = new Water();
            const newNormalPokemon = new Normal();
            expect(newGrassPokemon.isEffectiveAgainst(newWaterPokemon)).toBe(
              true
            );
            expect(newGrassPokemon.isEffectiveAgainst(newNormalPokemon)).toBe(
              false
            );
          });
        });
        describe("isWeakTo()", () => {
          test("When passed a fire pokemon, returns true, and returns false otherwise", () => {
            const newGrassPokemon = new Grass();
            const newFirePokemon = new Fire();
            const newNormalPokemon = new Normal();
            expect(newGrassPokemon.isWeakTo(newFirePokemon)).toBe(true);
            expect(newGrassPokemon.isWeakTo(newNormalPokemon)).toBe(false);
          });
        });
      });
      describe("Grass() subclasses", () => {
        describe("Bulbasaur()", () => {
          test("Instance of Bulbasaur is a grass type pokemon with vine whip as it's move", () => {
            const bulbasaur = new Bulbasaur();

            expect(bulbasaur.name).toBe("Bulbasaur");
            expect(bulbasaur.move).toBe("vine whip");
            expect(bulbasaur.type).toBe("grass");
          });
        });
      });
    });
    describe("Normal()", () => {
      describe("Normal() constructor", () => {
        test("Instance of Normal() has  .type property of normal .move of tackle", () => {
          const newNormalPokemon = new Normal();
          expect(newNormalPokemon.type).toBe("normal");
        });
      });
      describe("Normal() methods", () => {
        describe("isEffectiveAgainst()", () => {
          test("Returns false when passed any opponent pokemon", () => {
            const newWaterPokemon = new Water();
            const newGrassPokemon = new Grass();
            const newNormalPokemon = new Normal();

            expect(newNormalPokemon.isEffectiveAgainst(newGrassPokemon)).toBe(
              false
            );
            expect(newNormalPokemon.isEffectiveAgainst(newWaterPokemon)).toBe(
              false
            );
          });
        });
        describe("isWeakTo()", () => {
          test("Returns false when passed any opponent pokemon", () => {
            const newWaterPokemon = new Water();
            const newGrassPokemon = new Grass();
            const newFirePokemon = new Fire();
            const newNormalPokemon = new Normal();

            expect(newNormalPokemon.isWeakTo(newGrassPokemon)).toBe(false);
            expect(newNormalPokemon.isWeakTo(newWaterPokemon)).toBe(false);
            expect(newNormalPokemon.isWeakTo(newFirePokemon)).toBe(false);
          });
        });
      });
      describe("Normal() subclasses", () => {
        describe("Rattata()", () => {
          test("Instance of Rattata is a normal type pokemon", () => {
            const rattata = new Rattata();

            expect(rattata.name).toBe("Rattata");
            expect(rattata.move).toBe("tackle");
            expect(rattata.type).toBe("normal");
          });
        });
      });
    });
  });
});

describe("Pokeball()", () => {
  describe("Pokeball() constructor", () => {
    test("When the Pokeball() constructor is invoked without a pokemon argument, returns an object with storedPokemon property as an empty object.", () => {
      const pokeball = new Pokeball();

      expect(pokeball.storedPokemon).toBeUndefined();
    });
  });
  describe("Pokeball() methods", () => {
    describe("throw()", () => {
      test("If a pokemon is passed and the pokeball is empty, captures the passed Pokemon", () => {
        const charmander = new Charmander();
        const pokeball = new Pokeball();
        pokeball.throw(charmander);

        expect(pokeball.storedPokemon).toEqual(charmander);
      });
      test.todo(
        "If a pokemon is passed and the pokeball is empty, console.log a message saying `You caught [pokemon]!`"
      );
      test("If a pokemon is passed and the pokeball isn't empty, does not capture the pokemon", () => {
        const charmander = new Charmander();
        const rattata = new Rattata();

        const pokeball = new Pokeball();

        pokeball.throw(charmander);
        pokeball.throw(rattata);

        expect(pokeball.storedPokemon).toEqual(charmander);
      });
      test.todo(
        "If a pokemon is passed and the pokeball isn't empty, console.log a message saying which pokemon is stored "
      );
      test("If a pokemon is not passed and the pokeball isn't empty, return the stored pokemon", () => {
        const charmander = new Charmander();

        const pokeball = new Pokeball();
        pokeball.throw(charmander);

        expect(pokeball.throw()).toEqual(charmander);
      });
      test.todo(
        "If a pokemon is not passed and the pokeball isn't empty, console.log a message saying `Go [pokemon]!`"
      );
      test("If a pokemon is not passed and the pokeball is empty, console.log `empty...`", () => {
        console.clear();
        const logSpy = jest.spyOn(console, "log");
        const pokeball = new Pokeball();
        pokeball.throw();
        expect(pokeball.storedPokemon).toBeUndefined();

        //expect(logSpy).toHaveBeenCalledWith("You caught Rattata!");
        expect(logSpy).toHaveBeenCalledWith("empty...");
        logSpy.mockRestore();
      });
    });
    describe("isEmpty()", () => {
      test("Return true if no pokemon is stored in the pokeball and false otherwise", () => {
        const pokeball = new Pokeball();
        expect(pokeball.isEmpty()).toBe(true);

        const charmander = new Charmander();
        pokeball.throw(charmander);

        expect(pokeball.isEmpty()).toBe(false);
      });
    });
    describe("contains()", () => {
      test("If a pokemon is stored, return the name of the pokemon, else return `empty...` as a string", () => {
        const pokeball = new Pokeball();
        expect(pokeball.contains()).toBe("empty...");

        const charmander = new Charmander();
        pokeball.throw(charmander);
        expect(pokeball.contains()).toEqual(charmander);
      });
    });
  });
  // describe("Pokeball() subclasses", () => {});
});

describe("Trainer()", () => {
  describe("Trainer() constructor", () => {
    test("A new instance of trainer has a pokeBelt property", () => {
      const newTrainer = new Trainer();

      expect(newTrainer.pokeBelt).toEqual([]);
    });
  });
  describe("Trainer() methods", () => {
    describe("catch()", () => {
      test("If the pokeBelt is not full (ie contains <6 pokeballs), creates a new pokeball from which to call the throw() method, and stores caught pokemon in the pokeBelt", () => {
        const youngesterJoey = new Trainer();
        const rattata = new Rattata();

        youngesterJoey.catch(rattata);
        const firstPokeball = youngesterJoey.pokeBelt[0];
        expect(firstPokeball.storedPokemon.name).toBe("Rattata");

        youngesterJoey.catch(rattata);
        const secondPokeball = youngesterJoey.pokeBelt[1];
        expect(secondPokeball.storedPokemon.name).toBe("Rattata");

        expect(youngesterJoey.pokeBelt.length).toBe(2);
      });
      test("If the pokebelt is full, the pokemon isn't added to the pokeBelt", () => {
        const youngesterJoey = new Trainer();
        const rattata = new Rattata();

        youngesterJoey.catch(rattata); //1
        youngesterJoey.catch(rattata); //2
        youngesterJoey.catch(rattata); //3
        youngesterJoey.catch(rattata); //4
        youngesterJoey.catch(rattata); //5
        youngesterJoey.catch(rattata); //6
        youngesterJoey.catch(rattata);
        expect(youngesterJoey.pokeBelt.length).toBe(6);
      });
      test("If the pokebelt is full, console.log a message saying Party full!", () => {
        console.clear();
        const logSpy = jest.spyOn(console, "log");
        const youngesterJoey = new Trainer();
        const rattata = new Rattata();

        youngesterJoey.catch(rattata); //1
        youngesterJoey.catch(rattata); //2
        youngesterJoey.catch(rattata); //3
        youngesterJoey.catch(rattata); //4
        youngesterJoey.catch(rattata); //5
        youngesterJoey.catch(rattata); //6
        youngesterJoey.catch(rattata);

        expect(logSpy).toHaveBeenCalledWith("Party full!");
        logSpy.mockRestore();
      });
    });
    describe("getPokemon()", () => {
      test("If the pokemon name passed as argument is in pokeBelt, returns that pokemon", () => {
        const youngesterJoey = new Trainer();
        const rattata = new Rattata();

        youngesterJoey.catch(rattata);

        expect(youngesterJoey.getPokemon("Rattata")).toEqual(rattata);
      });
      test("If pokemon is not in pokeBelt, console.log a message saying Pokemon not in party!", () => {
        console.clear();
        const logSpy = jest.spyOn(console, "log");
        const youngesterJoey = new Trainer();
        youngesterJoey.getPokemon("Rattata");
        expect(logSpy).toHaveBeenCalledWith("Pokemon is not in party...");
        logSpy.mockRestore();
      });
    });
  });
  //    describe("Trainer() subclasses",()=>{})
});

describe("Battle()", () => {
  // call pokemon class instances here, can use them all through this block
  let charmander;
  let squirtle;
  beforeEach(() => {
    console.log("new pokemon appear!");
    charmander = new Charmander();
    squirtle = new Squirtle();
  });

  describe("Battle() constructor", () => {
    test("An instance of Battle() takes two pokemon, assigns them to properties pokemon1/activePokemon and pokemon2/defendingPokemon, and also has property of turn (which starts at 1)", () => {
      const battle = new Battle(charmander, squirtle);
      expect(battle.turn).toBe(1);
      expect(battle._pokemon1).toEqual(charmander);
      expect(battle._pokemon2).toEqual(squirtle);
      expect(battle.activePokemon).toEqual(charmander);
      expect(battle.defendingPokemon).toEqual(squirtle);
    });
  });
  describe("Battle() methods", () => {
    describe("fight()", () => {
      test("Calls attack() with the activePokemon", () => {
        const battle = new Battle(charmander, squirtle);
        const battleSpy = jest.spyOn(battle, "attack");
        battle.fight();
        expect(battleSpy).toHaveBeenCalled();
        battleSpy.mockRestore();
      });
      test("Calls defend() with the defendingPokemon", () => {
        const battle = new Battle(charmander, squirtle);
        const battleSpy = jest.spyOn(battle, "defend");
        battle.fight();
        expect(battleSpy).toHaveBeenCalled();
        console.log(battleSpy);
        battleSpy.mockRestore();
      });
      test("Ends battle by returning activePokemon if defending pokemon has fainted", () => {
        const battle = new Battle(squirtle, charmander);
        battle.fight();
        battle.fight();
        battle.fight();
        battle.fight();
        battle.fight();
        battle.fight();
        battle.fight();
        console.log(charmander.hasFainted());
        expect(battle.fight()).toEqual(squirtle);
      });
      test("When battle ends, console.log message saying which pokemon has won the battle", () => {
        console.clear();
        const logSpy = jest.spyOn(console, "log");
        const battle = new Battle(squirtle, charmander);
        battle.fight();
        battle.fight();
        battle.fight();
        battle.fight();
        battle.fight();
        battle.fight();
        battle.fight();
        battle.fight();
        expect(logSpy).toHaveBeenCalledWith(
          "Charmander has fainted! Squirtle wins!"
        );
      });
      test("At the end of the pokemon1's turn, adds 1 to the turn property", () => {
        const battle = new Battle(charmander, squirtle);
        battle.fight();
        expect(battle.turn).toBe(2);
        battle.fight();
        expect(battle.turn).toBe(3);
        battle.fight();
        expect(battle.turn).toBe(4);
      });
      test("When turn is odd, pokemon1 is the active pokemon; when turn is even, pokemon 2 is the active pokemon. Vice versa for defending pokemon", () => {
        const battle = new Battle(charmander, squirtle);
        expect(battle.activePokemon).toEqual(charmander);
        expect(battle.defendingPokemon).toEqual(squirtle);
        battle.fight();
        expect(battle.activePokemon).toEqual(squirtle);
        expect(battle.defendingPokemon).toEqual(charmander);
        battle.fight();
        expect(battle.activePokemon).toEqual(charmander);
        expect(battle.defendingPokemon).toEqual(squirtle);
      });
    });
    describe("attack()", () => {
      test("An attack by the active pokemon returns the attack damage of the pokemon's move", () => {
        const battle = new Battle(charmander, squirtle);
        expect(battle.attack()).toBe(charmander.attackDamage);
      });
    });
    describe("defend()", () => {
      test("Type match up: if defendingPokemon is strong against attacking pokemon, the attackDamage passed is multiplied by 0.75", () => {
        const squirtleDamage = charmander.attackDamage * 0.75;
        const squirtleExpectedHP = squirtle.hitPoints - squirtleDamage;

        const battle = new Battle(charmander, squirtle);
        battle.defend(charmander.attackDamage);

        expect(squirtle.hitPoints).toBe(squirtleExpectedHP);
      });
      test("Type match up: if defendingPokemon is weak against attacking pokemon, the damage is multiplied by 1.25", () => {
        const charmanderDamage = charmander.attackDamage * 1.25;
        const charmanderExpectedHP = charmander.hitPoints - charmanderDamage;

        const battle = new Battle(squirtle, charmander);
        battle.defend(squirtle.attackDamage);

        expect(charmander.hitPoints).toBe(charmanderExpectedHP);
      });
      test("Console.log a message stating whether the attack was super, or not very, effective", () => {
        console.clear;
        const logSpy = jest.spyOn(console, "log");
        const battle = new Battle(squirtle, charmander);
        battle.fight();
        expect(logSpy).toHaveBeenCalledWith("It's super effective!");
        console.clear;
        battle.fight();
        expect(logSpy).toHaveBeenCalledWith("It's not very effective...");
        logSpy.mockRestore();
      });
    });
  });
  //describe("Battle() subclasses () => {}")
});
