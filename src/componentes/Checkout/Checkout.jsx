import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";
import Swal from "sweetalert2";
import "./Checkout.css";

const Checkout = () => {
  const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: "",
    emailConfirmacion: "",
  });
  const [error, setError] = useState("");

  const manejadorSubmit = async (event) => {
    event.preventDefault();

    const { nombre, apellido, telefono, email, emailConfirmacion } = formulario;

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("¡Por favor completa todos los campos!");
      return;
    }

    if (email !== emailConfirmacion) {
      setError("Los emails no coinciden");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.titulo,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      ...formulario, // incluir todos los campos del formulario
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productos", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            Swal.fire({
              title: "¡Orden generada exitósamente!",
              text: `El número de orden es: ${docRef.id}`,
              icon: "success",
            });
            vaciarCarrito();
            setFormulario({
              // reiniciar el estado del formulario
              nombre: "",
              apellido: "",
              telefono: "",
              email: "",
              emailConfirmacion: "",
            });
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [id]: value,
    }));
  };

  return (
    <div>
      <h2>Checkout - Finalizamos la Compra </h2>

      <form onSubmit={manejadorSubmit}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.titulo} x {producto.cantidad}
            </p>
            <p>${producto.item.precio}</p>
            <hr />
          </div>
        ))}

        <div className="borderBox">
          <div>
            < label className="labelCheck" htmlFor="nombre"> Nombre </ label>
            <input
              type="text"
              id="nombre"
              value={formulario.nombre}
              onChange={handleChange}
            />
          </div>

          <div>
            < label className="labelCheck" htmlFor="apellido"> Apellido </ label>
            <input
              type="text"
              id="apellido"
              value={formulario.apellido}
              onChange={handleChange}
            />
          </div>

          <div>
            < label className="labelCheck" htmlFor="telefono"> Telefono </ label>
            <input
              type="text"
              id="telefono"
              value={formulario.telefono}
              onChange={handleChange}
            />
          </div>

          <div>
            < label className="labelCheck" htmlFor="email"> E-mail </ label >
            <input
              type="email"
              id="email"
              value={formulario.email}
              onChange={handleChange}
            />
          </div>

          <div>
            < label className="labelCheck" htmlFor="emailcon"> Email Confirmación </ label >
            <input
              type="email"
              id="emailConfirmacion"
              value={formulario.emailConfirmacion}
              onChange={handleChange}
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button> Finalizar Orden </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
