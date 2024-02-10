import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  //const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("");

  //Funcion manejador del form:
  const manejadorSubmit = async (event) => {
    event.preventDefault();

    //Verificamos que todos los campos se completen:
    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("¡Por favor completa todos los campos!");
      return;
    }

    //Validamos que el email coincida:
    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden");
      return;
    }

    //Creamos un objeto con todos los datos de la orden:
    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.titulo,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    //Codigo CON descuento STOCK
    Promise.all(
      //Me permite ejecutar varias promesas a la vez: crear la OC y descontar stock
      orden.items.map(async (productoOrden) => {
        //Por cada producto obtengo una ref y a partir de esa ref el doc
        const productoRef = doc(db, "productos", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock; //data me permite obtener los datos del doc

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        }); //Modifico el stock y subo la actualización
      })
    )
      //Guardamos en la bd la OC
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            //Mostrar num orden con Sweet Alert
            Swal.fire({
              title: "¡Orden generada exitósamente!",
              text: `El número de orden es: ${docRef.id}`,
              icon: "success",
            });
            vaciarCarrito();
            //Limpio los datos del formulario
            setNombre("");
            setApellido("");
            setTelefono("");
            setEmail("");
            setEmailConfirmacion("");

            // Redirigir a la página de inicio después de 5 segundos
            setTimeout(() => {
              window.location.href = "/";
            }, 10000);
          })
          .catch((error) =>
            console.log("Error al crear la orden de compra", error)
          );
      })
      .catch((error) => {
        console.log("No pudimos actualizar el stock", error);
      });
  };

  return (
    <div>
      <h2>Checkout - Finalizamos la Compra </h2>

      <form onSubmit={manejadorSubmit}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {" "}
              {producto.item.titulo} x {producto.cantidad}{" "}
            </p>
            <p> {producto.item.precio} </p>
            <hr />
          </div>
        ))}

        <div>
          <label htmlFor="nombre"> Nombre </label>
          <input
            type="text"
            id="nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="apellido"> Apellido </label>
          <input
            type="text"
            id="apellido"
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="telefono"> Telefono </label>
          <input
            type="text"
            id="telefono"
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email"> E-mail </label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="emailcon"> Email Confirmación </label>
          <input
            type="email"
            id="emailcon"
            onChange={(e) => setEmailConfirmacion(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}> {error} </p>}

        <button> Finalizar Orden </button>

        {/*  {ordenId && (
          <strong>
            ¡Gracias por su compra! Tu número de orden es el siguiente:{" "}
            {ordenId}{" "}
          </strong>
        )} */}
      </form>
    </div>
  );
};

export default Checkout;
