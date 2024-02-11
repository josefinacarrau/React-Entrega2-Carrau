import React from "react";
import NavBar from "./componentes/NavBar/NavBar";
import Fondo from "./componentes/Fondo/Fondo";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { CarritoProvider } from "./context/CarritoContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./componentes/Cart/Cart";
import Checkout from "./componentes/Checkout/Checkout";

import "./style.css";

const App = () => {
  return (
    <>
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
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter> 
    </>
  );
};

export default App;
