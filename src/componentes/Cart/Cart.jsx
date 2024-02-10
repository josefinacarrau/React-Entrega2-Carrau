import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";

const Cart = () => {
  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  //Tecnica de renderizado condicional.

  if (cantidadTotal === 0) {
    return (
      <>
        <h2>No Hay productos en el carrito! </h2> //Buscar Sweet Alert
        <Link to="/">Ver Productos</Link>
      </>
    );
  }

  return (
    <div>
      {carrito.map((prod) => (
        <CartItem key={prod.id} {...prod} />
      ))}
      <h3>Total $: {total}</h3>
      <button onCLick={() => vaciarCarrito()}>Vaciar carrito</button>
      <Link to="/checkout">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
