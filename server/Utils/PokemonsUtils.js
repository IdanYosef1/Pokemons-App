const model = require("../Model/PokemonsModel");

const getFivePokemons = () => {
  return new Promise((resolve, reject) => {
    model.find({}, (err, pokemons) => {
      if (err) {
        reject(err);
      } else {
        const fiveElements = getRandomFiveElements(pokemons);
        fiveElements.sort((a, b) =>
          a.name.english.localeCompare(b.name.english)
        );
        resolve(fiveElements);
      }
    });
  });
};

const createPokemon = (pokemon) => {
  return new Promise((resolve, reject) => {
    const newPokemon = new model(pokemon);
    newPokemon.save((err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Added successfully");
      }
    });
  });
};

const updatePokemon = (id, pokemon) => {
  return new Promise((resolve, reject) => {
    model.findByIdAndUpdate(id, pokemon, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve("Updated successfully");
      }
    });
  });
};

const getRandomFiveElements = function (arr) {
  var result = [];
  for (let i = 0; i < 5; i++) {
    const index = Math.floor(Math.random() * arr.length);
    result.push(arr[index]);
    arr.splice(index, 1);
  }
  return result;
};

module.exports = {
  getFivePokemons,
  createPokemon,
  updatePokemon,
};
