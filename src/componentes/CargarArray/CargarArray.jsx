import {useEffect} from 'react';
import {db} from "../../services/config";
import { collection, doc, setDoc} from "firebase/firestore";

const CargarArray = () => {

    useEffect(() => {
        const cargarData = async () => {
            try {
                const productitos = [
                    { id: 1, nombre: "Lapiz", precio: 100 },
                    { id: 2, nombre: "Goma", precio: 200 },
                    { id: 3, nombre: "Regla", precio: 300 }
                ]
                const productosCollection = collection(db, "productitos");
                productitos.forEach(async (producto) => {
                    const productoDoc = doc(productosCollection, producto.id.toString());
                    await setDoc(productoDoc, producto);
                })
            } catch (error) {
                console.log(error => console.log("nos vamos a re morir ahh", error))
            }
        }
        cargarData();
    }, [])

  return (
    <div>CargarArray</div>
  )
}

export default CargarArray