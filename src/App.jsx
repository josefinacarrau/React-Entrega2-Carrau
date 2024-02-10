import React from "react";
import NavBar from "./componentes/NavBar/NavBar";
import Fondo from "./componentes/Fondo/Fondo";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CarritoProvider } from "./context/CarritoContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./componentes/Cart/Cart";

import "./style.css";

//import Loader from "./componentes/Loader/Loader";
//import LoaderApi from "./componentes/LoaderApi/LoaderApi";
//import Formulario from "./componentes/Formulario/Formulario";
//import Productos from "./componentes/Productos/Productos";
//import CargarArray from "./componentes/CargarArray/CargarArray";
//import CargarJson from "./componentes/CargarJson/CargarJson";

const App = () => {
  return (
    <>
      {/* <Loader/>
    <LoaderApi/> */}
      {/* <Productos />
      <Formulario /> 
      <CargarJson/> */}
<BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Fondo />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter> 
    </>
  );
};

export default App;
