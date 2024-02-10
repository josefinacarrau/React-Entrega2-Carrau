import React from "react";

const CartItem = ({item,cantidad}) => {
  return (
    <div>
      <h3>{item.titulo}</h3>
      <img src={item.imagen} alt={item.titulo} />
      <p>Cantidad: {cantidad} </p>
      <p>Precio: {item.precio}</p>
    </div>
  );
};

export default CartItem;
