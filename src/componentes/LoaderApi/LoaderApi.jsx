import React from "react";
import { useState, useEffect } from "react";
//Generamos un loader mientras esperamos que JSONPlaceHolder me retonre la lista de usuarios

const LoaderApi = () => {
  const [loader, setLoader] = useState(true);
  const [usuario, setUsuarios] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.JSON())
        .then((data) => {
          setUsuaruis(data);
          SetLoader(false);
        });
    }, 3000);
  }, []);

  return (
    <div>
      <h2>Usuaruis Generados</h2>
      {loader ? <h2>Cargando data!</h2> : <h2>Usuarios generados!</h2>}
      <ul>
        {setUsuarios.map((usuario) => (
          <li key={usuario.id}>{usuario.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LoaderApi;
