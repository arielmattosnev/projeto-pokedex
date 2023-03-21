import { useContext } from "react";
import FavoriteContext from "../context/favoriteContext";

const Navbar = () => {
  const PokeApiLogoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  const { favoritePokemon } = useContext(FavoriteContext);

  return (
    <nav>
      <div className="nav-content">
        <img src={PokeApiLogoImg} alt="pokeapi-logo" className="navbar-img" />
      </div>
      <div className="nav-content">❤️{favoritePokemon.length}</div>
    </nav>
  );
};

export default Navbar;
