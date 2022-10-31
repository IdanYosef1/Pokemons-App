import Table from "react-bootstrap/Table";
import PokemonRow from "./PokemonRow";

function PokemonsTable({ pokemons }) {
  const showPokemons = pokemons.map((pokemon) => {
    return <PokemonRow key={pokemon._id} pokemon={pokemon} />;
  });

  return (
    <Table className="table-style mt-3" striped bordered size="sm">
      <thead>
        <tr className="firstRow-style">
          <th></th>
          <th>Pokémon</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody>{showPokemons}</tbody>
    </Table>
  );
}

export default PokemonsTable;
