import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ id, titulo, precio, imagen, stock }) => {
//Creamos un estado local, con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarALcarrito } = useContext(CarritoContext);

  //Creamos una funcion manejadora de la cantidad
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarALcarrito(item, cantidad);
  };

  return (
    <div className="cardProductos">
      <h3>{titulo} </h3>
      <img src={imagen} alt={titulo} className="imgProducto" />
      <h4>Precio: {precio} </h4>
      <h5>ID: {id} </h5>
      <p>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>

      {
        /// Acá empleamos la lógica de montaje y desmontaje del contador
      }

      {agregarCantidad > 0 ? (
        <Link to="/cart"> Terminar compra</Link>
      ) : (
        <ItemCount incial={1} stock={stock} funcionAgregar={manejadorCantidad} />
      )}
    </div>
  );
};

export default ItemDetail;
