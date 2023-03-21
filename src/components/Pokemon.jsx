import { useContext } from "react";
import FavoriteContext from "../context/favoriteContext";

const Pokemon = ({ pokemon }) => {
  const { favoritePokemon, updateFavoritesPokemons } = useContext(FavoriteContext);

  const onHeartClick = () => {
    updateFavoritesPokemons(pokemon.name);
  };

  const heart = favoritePokemon.includes(pokemon.name) ? "❤️" : "🖤";

  return (
    <div className="pokemon-card">
      <div className="pokemon-image-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
      </div>

      <div className="card-body">
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>{pokemon.id}</div>
        </div>

        <div className="card-bottom">
          <div className="pokemon-types">
            {pokemon.types.map((type, index) => {
              return (
                <div key={index} className="pokemon-type-text">
                  {type.type.name}
                </div>
              );
            })}
          </div>

          <button className="pokemon-heart-btn" onClick={onHeartClick}>
            {heart}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
