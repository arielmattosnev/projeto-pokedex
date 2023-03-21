import { useEffect, useState } from "react";
import { getPokemon, getPokemonData } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";
import { FavoriteProvider } from "./context/favoriteContext";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setpokemons] = useState([]);

  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const [favorites, setFavorites] = useState([]);

  const itensPerPage = 25;

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemon(itensPerPage, itensPerPage * page);

      const promisse = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promisse);

      setpokemons(results);
      setLoading(false);

      setTotalPage(Math.ceil(data.count / itensPerPage));
    } catch (error) {
      console.log(`fetchPokemons error: ${error}`);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [page]);

  const updateFavoritesPokemon = (name) => {
    const updateFavorites = [ ...favorites ];
    const favoriteIndex = favorites.indexOf(name);

    if (favoriteIndex >= 0) {
      updateFavorites.slice(favoriteIndex, 1);
    } else {
      updateFavorites.push(name);
    }

    setFavorites(updateFavorites);
  };

  return (
    <FavoriteProvider
      value={{ favoritePokemon: favorites, updateFavoritesPokemons: updateFavoritesPokemon }}
    >
      <div>
        <Navbar />
        <Searchbar />
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPage}
        />
      </div>
    </FavoriteProvider>
  );
}

export default App;
