import { useState } from "react";

const Searchbar = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);

    if (e.target.value === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
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
    </div>
  );
};

export default Searchbar;
