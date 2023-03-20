import { useEffect, useState } from "react";
import { getPokemon, getPokemonData } from "./api";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import Searchbar from "./components/Searchbar";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setpokemons] = useState([]);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemon();

      const promisse = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });

      const results = await Promise.all(promisse);

      setpokemons(results);
      setLoading(false);
    } catch (error) {
      console.log(`fetchPokemons error: ${error}`);
    }
  };

  useEffect(() => {
    console.log("carregou");
    fetchPokemon();
  }, []);

  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading} />
    </div>
  );
}

export default App;
