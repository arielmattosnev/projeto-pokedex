import { useState } from "react";

export default function Searchbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const onButtonClickHandler = (e) => {
    e.preventDefault();
    console.log(`Pokémon: ${search}`);
  };

  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input type="text" placeholder="Digite o nome do pokémon" value={search} onChange={handleSearch} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickHandler}>Buscar pokémon</button>
      </div>
    </div>
  );
}
