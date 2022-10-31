import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function DetailsPokemonPage() {
  const pokemon = useSelector((state) => state.pokemon);
  const { name, type, base } = pokemon;

  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };

  return (
    <div className="div-action">
      <h4 className="h4-style">Details Pokémon</h4>
      <div className="div-pokemon">
        <img src={pokemon.image} alt="undefined" width="75" height="75" />
        <div className="div-details">
          <span className="span-base">Name: {name.english}</span>
          <br />
          <span className="span-base">Type: {type.join(" ")}</span>
          <br />
          <span className="span-base">Base:</span>
          <br />
          <div className="div-base">
            <span className="span-values">HP: {base.HP}</span> <br />
            <span className="span-values">Attack: {base.Attack}</span>
            <br />
            <span className="span-values">Defense: {base.Defense}</span>
            <br />
            <span className="span-values">SP.Attack: {base.Sp_Attack}</span>
            <br />
            <span className="span-values">Sp.Defense: {base.Sp_Defense} </span>
            <br />
            <span className="span-values">Speed: {base.Speed}</span>
            <br />
          </div>
          <button onClick={back} className="back-style">
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailsPokemonPage;
