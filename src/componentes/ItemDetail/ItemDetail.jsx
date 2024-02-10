import { useState } from "react"; //Importo Hook
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react"; //Importo el Hook
import "./ItemDetail.css";

const ItemDetail = ({ id, titulo, precio, imagen, stock }) => {
  //Creamos un estado local, con la cantidad de productos agregados.
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarAlCarrito } = useContext(CarritoContext);

  //Creamos una funcion manejadora de la cantidad
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, titulo, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="cardProductos">
      <h3>{titulo} </h3>
      <img src={imagen} alt={titulo} className="imgProducto" />
      <h4>Precio: {precio} </h4>
      {/*       <h5>ID: {id} </h5> */}
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>

      {
        /// Acá empleamos la lógica de montaje y desmontaje del contador
      }

      {agregarCantidad > 0 ? (
        <>
          <button>
            <Link to="/cart"> Ver Carrito </Link>
          </button>
          <button>
            <Link to="/"> Volver </Link>
          </button>
        </>
      ) : (
        <ItemCount
          incial={1}
          stock={stock}
          funcionAgregar={manejadorCantidad}
        />
      )}
    </div>
  );
};

export default ItemDetail;
