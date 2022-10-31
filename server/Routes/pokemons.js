const bll = require("../Utils/PokemonsUtils");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const pokemons = await bll.getFivePokemons();
    res.send(pokemons);
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const data = await bll.createPokemon(req.body);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const data = await bll.updatePokemon(req.params.id, req.body);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
