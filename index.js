class Pokemon {
  constructor(name = "", move = "tackle") {
    this.name = name;
    this.hitPoints = 20;
    this.attackDamage = 5;
    this.move = move;
  }

  takeDamage(damage) {
    this.hitPoints = this.hitPoints - damage;
    return `${this.name} took ${damage} damage! ${this.hitPoints} HP remaining!`;
  }

  useMove(move) {
    console.log(`${this.name} used ${this.move}!`);
    return this.attackDamage;
  }

  hasFainted() {
    return this.hitPoints <= 0;
  }
}

//// FIRE
class Fire extends Pokemon {
  constructor(name, move) {
    super(name, move);
    this.type = "fire";
  }

  isEffectiveAgainst(opponentPokemon) {
    return opponentPokemon.type === "grass";
  }

  isWeakTo(opponentPokemon) {
    return opponentPokemon.type === "water";
  }
}

class Charmander extends Fire {
  constructor(type) {
    // Only need to pass the argument we aren't hardcoding
    super("Charmander", "ember", type);
  }
}

//// WATER
class Water extends Pokemon {
  constructor(name, move) {
    super(name, move);
    this.type = "water";
  }

  isEffectiveAgainst(opponentPokemon) {
    return opponentPokemon.type === "fire";
  }
  isWeakTo(opponentPokemon) {
    return opponentPokemon.type === "grass";
  }
}

class Squirtle extends Water {
  constructor(type) {
    super("Squirtle", "water gun", type);
  }
}

//// GRASS
class Grass extends Pokemon {
  constructor(name, move) {
    super(name, move);
    this.type = "grass";
  }

  isEffectiveAgainst(opponentPokemon) {
    return opponentPokemon.type === "water";
  }
  isWeakTo(opponentPokemon) {
    return opponentPokemon.type === "fire";
  }
}

class Bulbasaur extends Grass {
  constructor(type) {
    super("Bulbasaur", "vine whip", type);
  }
}

//// NORMAL
class Normal extends Pokemon {
  constructor(name, move) {
    super(name, move);
    this.type = "normal";
  }

  isEffectiveAgainst(opponentPokemon) {
    return false;
  }
  isWeakTo(opponentPokemon) {
    return false;
  }
}

class Rattata extends Normal {
  constructor(move, type) {
    super("Rattata", move, type);
  }
}

class Pokeball {
  constructor() {
    this.storedPokemon = undefined;
  }

  throw(wildPokemon) {
    if (this.isEmpty() && wildPokemon) {
      // If there isn't a pokemon stored in the pokeball
      this.storedPokemon = wildPokemon;
      console.log(`You caught ${wildPokemon.name}!`);
    } else if (!this.isEmpty() && !wildPokemon) {
      // If a pokemon is stored and wasn't passed as an argument
      console.log(`Go ${this.storedPokemon.name}`);
      return this.storedPokemon;
    } else if (!this.isEmpty() && wildPokemon) {
      console.log(`Pokeball already contains ${this.contains.name}!`);
    } else {
      console.log(this.contains());
    }
  }

  isEmpty() {
    return !this.storedPokemon;
  }

  contains() {
    return this.isEmpty() ? "empty..." : this.storedPokemon;
  }
}

class Trainer {
  constructor() {
    this.pokeBelt = [];
  }

  catch(wildPokemon) {
    if (this.pokeBelt.length < 6) {
      const newPokeball = new Pokeball();
      newPokeball.throw(wildPokemon);
      this.pokeBelt.push(newPokeball);
    } else {
      console.log("Party full!");
    }
  }
  getPokemon(pokemonName) {
    for (let pokeball of this.pokeBelt) {
      if (pokeball.storedPokemon.name === pokemonName) {
        return pokeball.storedPokemon;
      }
    } // I wanted to use .map here but couldn't work out how to return from
    // whole function within map.
    console.log("Pokemon is not in party...");
  }
}

class Battle {
  constructor(pokemon1, pokemon2) {
    this.turn = 1; // if odd, pokemon1 turn; if even, pokemon2 turn
    this._pokemon1 = pokemon1;
    this._pokemon2 = pokemon2;
    this.activePokemon = pokemon1;
    this.defendingPokemon = pokemon2;
    this.battleOver = false;
    this.winningPokemon = {}
  }

  fight() {
    if (this.battleOver) return this.winningPokemon;

    const turnAttackDamage = this.attack();
    this.defend(turnAttackDamage);

    if (this.defendingPokemon.hasFainted()) {
      console.log(
        `${this.defendingPokemon.name} has fainted! ${this.activePokemon.name} wins!`
      );
      this.battleOver = true;
      this.winningPokemon = this.activePokemon;
      return this.winningPokemon;
    } else {
      this.turn++;
      this.activePokemon =
        this.turn % 2 === 0 ? this._pokemon2 : this._pokemon1;
      this.defendingPokemon =
        this.turn % 2 === 0 ? this._pokemon1 : this._pokemon2;
    }
    // This is the last thing to do
  }

  attack() {
    return this.activePokemon.useMove();
  }

  defend(attackDamage) {
    let damage = attackDamage;

    if (this.defendingPokemon.isEffectiveAgainst(this.activePokemon)) {
      damage *= 0.75;
      console.log("It's not very effective...");
    }
    if (this.defendingPokemon.isWeakTo(this.activePokemon)) {
      damage *= 1.25;
      console.log("It's super effective!");
    }
    this.defendingPokemon.takeDamage(damage);
  }
}

module.exports = {
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
};
