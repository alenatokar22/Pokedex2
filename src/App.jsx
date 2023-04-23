import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Page } from "./components/Page";
import { Personage } from "./components/Personage";

const Base_URL = "https://pokeapi.co/api/v2/pokemon/";
const Pokemons_URL = `${Base_URL}?limit=12`;

function App() {
  const [curPokemon, setCurPokemon] = useState(null);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(Pokemons_URL);

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemon(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(`${Base_URL}${pokemon.name}`);
        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
      });
    }

    createPokemon(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="App">
        <div>
          <ul className="page__item">
            {allPokemons.map((pokemon, AllIndex) => (
              <li
                className="page__list"
                key={"pageLi" + AllIndex}
                onClick={() => {
                  setCurPokemon(pokemon);
                }}
              >
                <Page
                  name={pokemon.name}
                  type={
                    <ul className="item">
                      {pokemon.types.map((type) => (
                        <li key={type.type.name} className={type.type.name}>
                          {type.type.name}
                        </li>
                      ))}
                    </ul>
                  }
                  key={AllIndex}
                />
              </li>
            ))}
          </ul>
          <button className="page__btn" onClick={() => getAllPokemons()}>
            Load More
          </button>
        </div>
        <Personage pokemon={curPokemon} />
      </div>
    </div>
  );
}

export default App;
