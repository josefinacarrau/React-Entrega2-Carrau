import { useState, createContext } from "react"; //importo el Hook

export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
}); //Creamos el nuevo contexto y lo exporto para poder usarlo en el resto de modulos de la app. Le doy como valor inicial un objeto.

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  // Steps for testing purposes to check if it updates correctly
 //console.log(carrito);
  //console.log("Monto total de la compra: ", total);
  //console.log("Cantidad de item: ", cantidadTotal);

  const agregarAlCarrito = (item, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);
    if (!productoExistente) {
      setCarrito(prev => [...prev, { item, cantidad }]);
      setCantidadTotal(prev => prev + cantidad);
      setTotal(prev => prev + (item.precio * cantidad));             /*La sintaxis: prev => [...prev, {item, cantidad}] se utiliza para crear un nuevo array a partir del estado anterior del carrito (prev) y agregar un nuevo objeto, que representa el nuevo producto.*/
    } else {
      const carritoActualizado = carrito.map(prod=> {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
            setCantidadTotal(prev => prev + cantidad);
            setTotal(prev => prev + (item.precio * cantidad))
    }
  };

  //Funcion ELIMINAR PROD
  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === id); //ME guardo una ref del prod a eliminar
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id); //Lo elimino del carrito

    setCarrito(carritoActualizado);
    setCantidadTotal(prev => prev - productoEliminado.cantidad);
    setTotal(prev => prev - (productoEliminado.item.precio * productoEliminado.cantidad));

  };

  //Funcion VACIAR carrito
  const vaciarCarrito = () => {
    setCarrito([]);
    setTotal(0);
    setCantidadTotal(0);
  };

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        total,
        cantidadTotal,
        agregarAlCarrito,
        eliminarProducto,
        vaciarCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};