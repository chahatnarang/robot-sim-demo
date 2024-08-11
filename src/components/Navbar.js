import logo from "../logo.svg";

function Navbar() {
  return (
      <nav>
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width={65.75}
          height={38.5}
        />
      </nav>
  );
}

export default Navbar;