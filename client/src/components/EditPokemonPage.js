import { useSelector } from "react-redux";
import { updateData } from "../services/PokémonService";
import PokemonForm from "./Forms/PokemonForm";

function EditPokemonPage() {
  const pokemonStore = useSelector((state) => state.pokemon);

  const editPokemon = async (pokemon, setMessage) => {
    const arrStrWithoutspaces = pokemon.type // Array of strings without spaces
      .replace(/  +/g, " ")
      .trim()
      .split(" ");
    const newPokemon = {
      ...pokemon,
      name: { english: pokemon.name },
      type: arrStrWithoutspaces,
      base: {
        HP: pokemon.HP,
        Attack: pokemon.Attack,
        Defense: pokemon.Defense,
        Sp_Attack: pokemon.Sp_Attack,
        Sp_Defense: pokemon.Sp_Defense,
        Speed: pokemon.Speed,
      },
    };
    try {
      const { data } = await updateData(pokemonStore._id, newPokemon);
      if (data.errors) {
        setMessage("Failed to save the form");
      } else {
        setMessage("The form was saved successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="div-action">
      <h4 className="h4-style">Edit Pokémon</h4>
      <div className="div-pokemon">
        <img src={pokemonStore.image} alt="undefined" width="80" height="80" />
        <PokemonForm isEdit={true} func={editPokemon} />
      </div>
    </div>
  );
}

export default EditPokemonPage;
