const Pokedex = ({ pokemons, loading }) => {
  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <div>Páginação</div>
      </div>
      {loading ? (
        <div>Pokédex carregando...</div>
      ) : (
        <div className="pokedex-grid">
          {pokemons && pokemons.map((pokemon, index) => {
            return (
              <div>
                <div>#{pokemon.id}</div>
                <div>{pokemon.name}</div>
                <img src={pokemon.url} alt={pokemon.name} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
