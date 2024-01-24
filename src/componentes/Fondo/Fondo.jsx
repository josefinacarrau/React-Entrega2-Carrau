import "./Fondo.css";
import { Link, NavLink } from "react-router-dom";

const Fondo = () => {
  return (
    <div>
      <section className="background-image">
        <div className="text-box">
          <h1>CARRITO DE COMPRAS</h1>
        </div>
      </section>
      <hr className="lineaCeleste" />
      <ul>
        <li>
          <NavLink to="/category/1">Articulos Jugador</NavLink>
        </li>
        <li>
          <NavLink to="/category/2">Articulos Entrenador</NavLink>
        </li>
        <li>
          <NavLink to="/category/3">Otros</NavLink>
        </li>
        <li>
          <NavLink to="/">Todos</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Fondo;
