import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddPokemonForm({ func, isEdit }) {
  const pokemonStore = useSelector((state) => state.pokemon);

  const pokemonObj = isEdit
    ? {
        name: pokemonStore.name.english,
        type: pokemonStore.type.join(" "),
        ...pokemonStore.base,
      }
    : {
        name: "",
        type: "",
        HP: 0,
        Attack: 0,
        Defense: 0,
        Sp_Attack: 0,
        Sp_Defense: 0,
        Speed: 0,
      };

  const [pokemon, setPokemon] = useState(pokemonObj);
  const [message, setMessage] = useState("");

  const reset = () => {
    setPokemon({
      name: "",
      type: "",
      HP: 0,
      Attack: 0,
      Defense: 0,
      Sp_Attack: 0,
      Sp_Defense: 0,
      Speed: 0,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const obj = { ...pokemon };
    switch (name) {
      case "name":
        if (value.match("^[A-Za-z]*$")) {
          obj[name] = value;
          setPokemon(obj);
        }
        break;
      case "type":
        if (value.match("^[A-Za-z ]*$")) {
          obj[name] = value;
          setPokemon(obj);
        }
        break;
      default:
        obj[name] = +value;
        setPokemon(obj);
    }
  };

  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    func(pokemon, setMessage, reset);
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <label className="label-name-type">
        <span>Name:</span>
        <input
          type="string"
          name="name"
          value={pokemon.name}
          required
          placeholder="Enter English letters"
          onChange={handleChange}
        />
      </label>
      <br />
      <label className="label-name-type">
        <span>Type:</span>
        <input
          type="string"
          name="type"
          value={pokemon.type}
          required
          placeholder="Enter English letters"
          onChange={handleChange}
        />
      </label>
      <br />
      <span className="span-base">Base:</span>
      <br />
      <div className="div-base">
        <label className="label-base">
          <span>HP:</span>
          <input
            type="number"
            name="HP"
            min="0"
            value={pokemon.HP}
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="label-base">
          <span>Attack:</span>
          <input
            type="number"
            name="Attack"
            min="0"
            value={pokemon.Attack}
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="label-base">
          <span>Defense:</span>
          <input
            type="number"
            name="Defense"
            min="0"
            value={pokemon.Defense}
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="label-base">
          <span>Sp.Attack:</span>
          <input
            type="number"
            name="Sp_Attack"
            min="0"
            value={pokemon.Sp_Attack}
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="label-base">
          <span>Sp.Defense:</span>
          <input
            type="number"
            name="Sp_Defense"
            min="0"
            value={pokemon.Sp_Defense}
            required
            onChange={handleChange}
          />
        </label>
        <br />
        <label className="label-base">
          <span>Speed:</span>
          <input
            type="number"
            name="Speed"
            min="0"
            value={pokemon.Speed}
            required
            onChange={handleChange}
          />
        </label>
        <br />
      </div>
      <div className="div-buttons">
        <button type="submit" className="save-style">
          Save
        </button>{" "}
        <button onClick={back} className="back-add-style">
          Back
        </button>{" "}
        <br />
        <br />
        <br />
        <span className="message">{message}</span>
      </div>
    </form>
  );
}

export default AddPokemonForm;
