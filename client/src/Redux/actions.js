const updatePokemon = (obj) => {
  return {
    type: "UPDATE_POKEMON",
    payload: obj,
  };
};

export { updatePokemon };
