/* const productos = [
  {
    id: "1",
    titulo: "Grip Verde",
    imagen: "../img/GripVerde.jpg" ,
    /* "Rojo": "../img/GripRojo.jpg",
            "Azul": "../img/GripAzul.jpg",
            "Amarillo": "../img/GripAmarillo.jpg"
    precio: 650,
    cantidad: 1,
    idCat: "1",
    stock: 300
  },
  {
    id: "2",
    titulo: "Grip Rojo",
    imagen: "../img/GripRojo.jpg",
    precio: 650,
    cantidad: 1,
    idCat: "1",
    stock:300
  },
  {
    id: "3",
    titulo: "Grip Azul",
    imagen: "../img/GripAzul.jpg",
    precio: 650,
    cantidad: 1,
    idCat: "1",
    stock:300
  },
  {
    id: "4",
    titulo: "Grip Amarillo",
    imagen: "../img/GripAmarillo.jpg",
    precio: 650,
    cantidad: 1,
    idCat: "1",
    stock:300
  },
  {
    id: "5",
    titulo: "Bocha",
    imagen: "../img/Bocha.jpg",
    precio: 190,
    cantidad: 1,
    idCat: "2",
    stock:300
  },
  {
    id: "6",
    titulo: "Guante Aqua",
    imagen: "../img/GuanteAqua.jpg",
    precio: 650,
    cantidad: 1,
    idCat: "1",
    stock:300
  },
  {
    id: "7",
    titulo: "Guante Fucsia",
    imagen: "../img/GuanteFucsia.jpg",
    precio: 650,
    cantidad: 1,
    idCat: "1",
    stock:300
  },
  {
    id: "8",
    titulo: "Guante Negro",
    imagen: "../img/GuanteNegro.jpg",
    precio: 650,
    cantidad: 1,
    idCat: "1",
    stock:300
  },
  {
    id: "9",
    titulo: "Tarjetas de árbitro",
    imagen: "../img/TarjetasArbitro.jpg",
    precio: 300,
    cantidad: 1,
    idCat: "3",
    stock:300
  },
  {
    id: "10",
    titulo: "Tabla Entrenador Verde",
    imagen: "../img/TablaEntrenadorVerde.jpg",
    precio: 690,
    cantidad: 1,
    idCat: "2",
    stock:300
  },
  {
    id: "11",
    titulo: "Tabla Entrenador Fucsia",
    imagen: "../img/TablaEntrenadorFucsia.jpg",
    precio: 690,
    cantidad: 1,
    idCat: "2",
    stock:300
  },
  {
    id: "12",
    titulo: "Tabla Entrenador Blanca",
    imagen: "../img/TablaEntrenadorBlanca.jpg",
    precio: 690,
    cantidad: 1,
    idCat: "2",
    stock:300
  },
  {
    id: "13",
    titulo: "Llaveros",
    imagen: "../img/Llavero.jpg",
    precio: 250,
    cantidad: 1,
    idCat: "3",
    stock:300
  },
  {
    id: "14",
    titulo: "Silbato",
    imagen: "../img/Silbato.jpg",
    precio: 200,
    cantidad: 1,
    idCat: "2",
    stock:300
  },
  {
    id: "15",
    titulo: "Máscara",
    imagen: "../img/Mascara.jpg",
    precio: 1690,
    cantidad: 1,
    idCat: "3",
    stock:300
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 100);
  });
};

//Funcion similar pero que ahora me retorne un solo item:

export const getUnProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const producto = productos.find((prod) => prod.id === id);
      resolve(producto);
    }, 100);
  });
};

//Creamos una función que retorne toda la categoria.

export const getProductosPorCategoria = (idCategoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productosCategoria = productos.filter(
        (prod) => prod.idCat === idCategoria
      );
      resolve(productosCategoria);
    }, 100);
  });
};
 */