import Pagination from "./Pagination";
import Pokemon from "./Pokemon";

const Pokedex = ({ pokemons, loading, page, setPage, totalPages }) => {
  const onPreviousClickHandler = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const onNextClickHandler = () => {
    if (page + 1 !== totalPages) {
      setPage(page + 1);
    }
  };

  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
          page={page + 1}
          totalPages={totalPages}
          onPreviousClick={onPreviousClickHandler}
          onNextClick={onNextClickHandler}
        />
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
