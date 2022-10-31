import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsPencilSquare } from "react-icons/bs";
import { updatePokemon } from "../../Redux/actions";
import { useDispatch } from "react-redux";

function PokemonRow({ pokemon }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const detailsPokemon = (pokemon) => {
    dispatch(updatePokemon(pokemon));
    navigate("/DetailsPokemon");
  };

  return (
    <tr className="tr-style">
      <td className="align-middle">
        <img src={pokemon.image} alt="undefined" width="80" height="80" />
      </td>
      <td className="align-middle">
        <Button
          className="btn bg-transparent p-0 border-0"
          variant="light"
          onClick={() => detailsPokemon(pokemon)}
        >
          {pokemon.name.english}
        </Button>
      </td>
      <td className="align-middle">
        <Link
          to="/editPokemon"
          onClick={() => dispatch(updatePokemon(pokemon))}
        >
          <BsPencilSquare size={18} />
        </Link>
      </td>
    </tr>
  );
}

export default PokemonRow;
