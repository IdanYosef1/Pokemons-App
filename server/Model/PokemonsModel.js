const mongoose = require("mongoose");
const schema = mongoose.Schema;

const pokemonsScema = new schema({
  name: {
    english: { type: String, required: true },
  },
  type: [{ type: String, required: true }],
  base: {
    HP: { type: Number, min: 0, required: true },
    Attack: { type: Number, min: 0, required: true },
    Defense: { type: Number, min: 0, required: true },
    Sp_Attack: { type: Number, min: 0, required: true },
    Sp_Defense: { type: Number, min: 0, required: true },
    Speed: { type: Number, min: 0, required: true },
  },
  image: { type: String, required: true },
});

module.exports = mongoose.model("pokémons", pokemonsScema);
