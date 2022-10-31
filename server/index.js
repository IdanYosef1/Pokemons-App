const express = require("express");
const app = express();
const { connectDB } = require("./Config/database");
const cors = require("cors");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.json());
app.use(cors());
connectDB();

const routerPokemons = require("./Routes/pokemons");
app.use("/api/pokemons", routerPokemons);

app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));
