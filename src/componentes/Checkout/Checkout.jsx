//Versión sin descuento de stock: 

import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [ordenId, setOrdenId] = useState("");
    const [error, setError] = useState("");

    //Funcion manejador del form: 

    const manejadorSubmit = (event) => {
        event.preventDefault();

        //Verificamos que todos los campos se completen: 
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("¡Por favor completa todos los campos o moriremos!");
            return;
        }

        //Validamos que el email coincida: 
        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden, rata de dos patas!");
            return;
        }

        //Creamos un objeto con todos los datos de la orden: 
        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: total,
            fecha: new Date(),
            nombre,
            apellido,
            telefono,
            email
        }

        //Guardamos la orden de compras en la base de datos: 
        addDoc(collection(db, "ordenes"), orden)
            .then(docRef => {
                setOrdenId(docRef.id);
                vaciarCarrito();
            })
            .catch(error => {
                console.log("Error al crear la orden compra", error);
                setError("No se pudo crear la orden, revisa tu codigo maldito");
            })
    }

    return (
        <div>
            <h2>Checkout - Finalizamos la Compra </h2>

            <form onSubmit={manejadorSubmit}>
                {
                    carrito.map(producto => (
                        <div key={producto.item.id}>
                            <p> {producto.item.nombre} x {producto.cantidad} </p>
                            <p> {producto.item.precio} </p>
                            <hr />
                        </div>
                    ))
                }

                <div>
                    <label htmlFor="nombre"> Nombre </label>
                    <input type="text" id="nombre" onChange={(e) => setNombre(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="apellido"> Apellido </label>
                    <input type="text" id="apellido" onChange={(e) => setApellido(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="telefono"> Telefono </label>
                    <input type="text" id="telefono" onChange={(e) => setTelefono(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="email"> E-mail </label>
                    <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="emailcon"> Email Confirmación </label>
                    <input type="email" id="emailcon" onChange={(e) => setEmailConfirmacion(e.target.value)} />
                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button> Finalizar Orden </button>

                {
                    ordenId && <strong>¡Gracias por su compra! Tu número de orden es el siguiente: {ordenId} </strong>
                }

            </form>
        </div>
    )
}

export default Checkout