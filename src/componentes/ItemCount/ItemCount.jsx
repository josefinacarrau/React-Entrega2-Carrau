//Voy a importar un Hook que me permite crear un estado. 
import { useState } from "react";
//1) siempre lo importamos. 

const ItemCount = ({stock}) => {

    const [contador, setContador] = useState(1);

    //2)useState me retorna un array con dos elementos. El primero es el estado y el segundo es es una función que me actualiza el valor de ese estado. 

    //3) Crear las funciones para incrementar y decrementar el contador. 

    const incrementar = () => {
      if(contador < stock) {
        setContador(contador + 1);
      }
    }

    const decrementar = () => {
      if(contador > 1) {
        setContador(contador - 1);
      }
    }


  return (
    <div>
        <button onClick={decrementar}> - </button>
        <p> {contador} </p>
        <button onClick={incrementar}> + </button>
    </div>
  )
}

//Incrementar y decrementar van sin parentesis porque si no se ejecutarian al momento de renderizar el componente. Y solo queremos que se ejecute caudno el visitante haga click en los botones. 

export default ItemCount