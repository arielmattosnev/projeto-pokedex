import { useEffect, useState } from "react";
import { getPokemon } from "./api";
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
      const result = await getPokemon();
      setpokemons(result);
      setLoading(false);
    } catch (error) {
      console.log(`fetchPOkemons error: ${error}`);
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
      <Pokedex pokemons={pokemons.results} loading={loading} />
    </div>
  );
}

export default App;
