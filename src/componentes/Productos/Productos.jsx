import { useState, useEffect } from "react";

//Importamos nuestra conexion a la base "bd"
import { db } from "../../services/config";

// Importamos las funciones de Firebase que vamos  usar:
import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore";
// query me permite hacer una consulta
// collection me permite acceder a una coleccion
// getDocs me permite obtener los documentos de una coleccion
// doc trae un solo documento
// updateDoc actualiza

const Productos = () => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    // Original
    const misProductos = query(collection(db, "productos")); //Primero indico mi base, y segundo el nombre de mi coleccion

    //Para filtrar productos debo usar where
   /*  const misProductos = query(
      collection(db, "productos"),
      where("precio", "<", 700)
    ); */

    getDocs(misProductos).then((respuesta) => {
      //setProducto(respuesta) - Esto seria la logica
      setProducto(respuseta.docs.map((doc) => ({ id: doc.id, ...doc.data() }))); //Creo un array que contenga los datos del producto y el id del documento
    });
  }, [producto]);

  //Modificacion para que descuente stock
  const descontarStock =async(producto)=>{
    const productoRef = doc(db,"productos", producto.id);
    let nuevoStock = producto.stock-1;

    await updateDoc(productoRef, {stock: nuevostock});

    //Actualizamos la lista de productos despues de descontar stock:
    const productosActualizados = producto.map(p => {
    if(p.id === producto.id){
        return {...p,stock:nuevoStock};
    }
    return p;
    })
    setProducto(productosActualizados);
  }


  return (
    <div>
      <h2>Mis Productos</h2>
      <div className="contenedor">
        {producto.map((item) => {
          <div>
            <img src={item.img} alt={item.nombre} />
            <h3>{item.nombre}</h3>
            <p>{item.precio}</p>
            <p>Stock: {item.stock}</p>
            <button onClick={()=> descontarStock(item)}>Comprar</button>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Productos;
