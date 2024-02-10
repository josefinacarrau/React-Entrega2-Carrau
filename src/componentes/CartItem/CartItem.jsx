import React from "react";
import "./CartItem.css";

const CartItem = ({ item, cantidad }) => {
  return (
    <div className="cart-item">
      <table>
        <thead>
        {cantidad === 1 && (
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          )}
        </thead>
        <tbody>
          <tr>
            <td className="cart-image">
              <img src={item.imagen} alt={item.titulo} />
            </td>
            <td>
              <h5>{item.titulo}</h5>
            </td>
            <td>
              <label htmlFor="">Cantidad:</label>
              <p>{cantidad}</p>
            </td>
            <td>
            <label htmlFor="">Precio Unitario:</label>
              <p>{item.precio}</p>
            </td>
          </tr>
        </tbody>
      </table>

      {/*       <h3>{item.titulo}</h3>
      <img src={item.imagen} alt={item.titulo} />
      <p>Cantidad: {cantidad} </p>
      <p>Precio: {item.precio}</p> */}
    </div>
  );
};

export default CartItem;
