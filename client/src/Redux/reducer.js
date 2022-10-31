const initialState = {
  pokemon: {},
};

const applyChanges = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_POKEMON":
      return { ...state, pokemon: { ...action.payload } };
    default:
      return state;
  }
};

export default applyChanges;
