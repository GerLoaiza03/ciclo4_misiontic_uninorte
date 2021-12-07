import axios from "axios";
import { useEffect, useState } from "react";

const PokemonRow = (props) => {
  const { pokemonData } = props;
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async (url) => {
    try {
      const response = await axios.get(url);
      setPokemon(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemon(pokemonData.url);
  }, [pokemonData.url]);

  return pokemon ? (
    <tr>
      <th scope="row">
        <img
          src={pokemon.sprites.front_default}
          className="rounded"
          alt={pokemon.name}
        />
      </th>
      <th scope="row">{pokemon.id}</th>
      <td>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</td>
      <td>
        <span className="badge rounded-pill bg-dark">
          {pokemon.types[0].type.name}
        </span>
      </td>
      {pokemon.types[1] ? (
        <td>
          <span className="badge rounded-pill bg-dark">
            {pokemon.types[1].type.name}
          </span>
        </td>
      ) : (
        <td></td>
      )}
    </tr>
  ) : (
    <tr>
      <td>Loading....</td>
    </tr>
  );
};

export default PokemonRow;
