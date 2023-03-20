import { useState } from "react";
import { searchPokemon } from "../api";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = () => {
    onSearchHandle(search);
  };

  const onSearchHandle = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Digite o nome do pokémon"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar pokémon</button>
      </div>
      {pokemon ? (
        <div>
          <div>nome: {pokemon.name}</div>
          <div>peso: {pokemon.weight}</div>
          <img src={pokemon.sprites.front_default} />
        </div>
      ) : null}
    </div>
  );
};

export default Searchbar;
