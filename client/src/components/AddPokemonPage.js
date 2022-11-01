import { createData } from "../services/PokémonService";
import PokemonForm from "./Forms/PokemonForm";

function AddPokemonPage() {
  const addPokemon = async (pokemon, setMessage, reset) => {
    const arrStrWithoutspaces = pokemon.type // Array of strings without spaces
      .replace(/  +/g, " ")
      .trim()
      .split(" ");
    const newPokemon = {
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
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png",
    };
    try {
      const { data } = await createData(newPokemon);
      if (data.errors) {
        setMessage("Failed to save the form");
      } else {
        setMessage("The form was saved successfully");
      }
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="div-action">
      <h4 className="h4-style">Add Pokémon</h4>
      <div className="div-pokemon">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png"
          alt="undefined"
          width="80"
          height="29.616"
          className="img-addPokemon"
        />
        <PokemonForm func={addPokemon} />
      </div>
    </div>
  );
}

export default AddPokemonPage;
