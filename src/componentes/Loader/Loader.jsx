import React from "react";
import { useState, useEffect } from "react";

//Un LOADER es un componente visual que se usa para indicar que estamos realizando un actividad en segundo plano -  Cargando

const Loader = () => {
  const [loder, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return (
    <div>{loader ? <h2>Cargando data!</h2> : <h2>Contenido Listo!</h2>}</div>
  );
};

export default Loader;
