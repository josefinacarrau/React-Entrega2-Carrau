import React from "react";

const CartItem = ({item,cantidad,imagen}) => {
  return (
    <div>
      <h3>{item.titulo}</h3>
      <img src={imagen} alt={item.titulo} />
      <p>Cantidad: {cantidad} </p>
      <p>Precio: {item.precio}</p>
    </div>
  );
};

export default CartItem;
