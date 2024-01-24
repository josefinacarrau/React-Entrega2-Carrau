import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img className="logo" src="/img/logo.jpeg" alt="Logo" />
        </Link>
        <ul>
          <Link to="/">
            {" "}
            <li>Inicio</li>
          </Link>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Seleccionados
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Selección Femenina
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Selección Sub 21
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Selección Masculina
                </a>
              </li>
            </ul>
          </li>
          <li>Programas</li>
          <li>Productos</li>
          <li>Contacto</li>
          <li>
            <CartWidget />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
