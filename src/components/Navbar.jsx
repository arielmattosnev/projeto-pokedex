import { useContext } from "react";
import FavoriteContext from "../context/favoriteContext";

const Navbar = () => {
  const PokeApiLogoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  const { favoritePokemon } = useContext(FavoriteContext);

  return (
    <nav>
      <div>
        <img src={PokeApiLogoImg} alt="pokeapi-logo" className="navbar-img" />
      </div>
      <div>❤️{favoritePokemon.length}</div>
    </nav>
  );
};

export default Navbar;
