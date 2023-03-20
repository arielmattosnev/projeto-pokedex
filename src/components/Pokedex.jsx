import Pokemon from "./Pokemon";

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
          {pokemons &&
            pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Pokedex;
