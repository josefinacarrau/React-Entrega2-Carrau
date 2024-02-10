import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import Swal from "sweetalert2";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  //Tecnica de renderizado condicional.
  if (cantidadTotal === 0) {
    // Mostrar SweetAlert si el carrito está vacío
    Swal.fire({
      title: "Carrito vacío!",
      text: "No hay productos seleccionados",
      icon: "error",
      confirmButtonText: "OK",
    });

    // No necesitas devolver nada aquí si el carrito está vacío
    return <Link to="/">Ver Productos</Link>;
  }

  return (
    <div>
      {carrito.map((prod) => (
        <CartItem imagen={prod.imagen} key={prod.id} {...prod} />
      ))}
      <h3>Total $: {total}</h3>
      <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
      <Link to="/checkout"><button>Finalizar compra</button></Link>
    </div>
  );
};

export default Cart;
