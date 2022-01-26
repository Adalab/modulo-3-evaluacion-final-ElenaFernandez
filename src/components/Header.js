import '../styles/layout/Header.scss';
import bienvenido from '../images/bienvenido.png';
import logo from '../images/logo.png';
function Header() {
  return (
    <header className="header">
      <h1><img src={logo} alt="logo" /></h1>
      <h2>
        <img src={bienvenido} alt="Welcome" />
      </h2>
      <h3>Aqui puedes encontrar a todos los personajes de la saga</h3>
    </header>
  );
}

export default Header;
