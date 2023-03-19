export default function Navbar() {
  const PokeApiLogoImg =
    "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

  return (
    <nav>
      <div>
        <img src={PokeApiLogoImg} alt="pokeapi-logo" className="navbar-img" />
      </div>
    </nav>
  );
}
