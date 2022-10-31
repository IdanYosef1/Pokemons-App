import { getFiveElements } from "../services/PokémonService";
import { useState, useEffect } from "react";
import PokemonsTable from "./Tables/PokemonsTable";

function HomePage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getPokemons() {
      await callTheApi();
    }
    getPokemons();
  }, []);

  const callTheApi = async () => {
    try {
      const { data } = await getFiveElements();
      setPokemons(data);
    } catch (err) {
      console.log(err);
    }
  };

  const refresh = async () => {
    await callTheApi();
  };

  return (
    <div>
      <div className="div-table">
        <h2>Pokémons List</h2>
        <PokemonsTable pokemons={pokemons} />
        <button onClick={refresh} className="refresh-style mt-2 ">
          Refresh
        </button>{" "}
      </div>
    </div>
  );
}

export default HomePage;
