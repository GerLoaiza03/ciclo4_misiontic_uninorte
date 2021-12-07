import PokemonRow from "./PokemonRow";
import axios from "axios";
import { useEffect, useState } from "react";

const PokemonsTable = () => {
  const [pokemonsList, setPokemonsList] = useState([]);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(1);

  const onSelectHandle = (e) => {
    setLimit(e.target.value);
    setOffset(0);
    setPage(1);
  };

  const getPokemonsList = async (limit, offset) => {
    try {
      const response = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset=" + offset
      );
      setPokemonsList(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPokemonsList(limit, offset);
  }, [limit, offset]);

  return (
    <div className="table-responsive">
      <div className="d-flex justify-content-between my-2">
        <div className="d-inline-flex">
          <select
            value={limit}
            onChange={onSelectHandle}
            className="form-select"
            aria-label="Default select example"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <span>
          {page} de {Math.ceil(897 / limit)}
        </span>
      </div>

      <table className="table table-hover table-light align-middle">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Type1</th>
            <th scope="col">Type2</th>
          </tr>
        </thead>
        <tbody>
          {pokemonsList.map((pokemon) => {
            return <PokemonRow key={pokemon.url} pokemonData={pokemon} />;
          })}
        </tbody>
        <caption>
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <button
                onClick={() => {
                  if (offset !== 0) {
                    setOffset(parseInt(offset) - parseInt(limit));
                    setPage(parseInt(page) - 1);
                  }
                }}
                className="page-link"
              >
                &laquo;
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  if (page !== Math.ceil(897 / limit)) {
                    setOffset(parseInt(offset) + parseInt(limit));
                    setPage(page + 1);
                  }
                }}
                className="page-link"
              >
                &raquo;
              </button>
            </li>
          </ul>
        </caption>
      </table>
    </div>
  );
};

export default PokemonsTable;
