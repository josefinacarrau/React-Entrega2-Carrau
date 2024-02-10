import { useEffect } from "react";
import { db } from "../../../services/config";
import { collection, doc, setDoc } from "firebase/firestore";

const CargarJson = () => {
  useEffect(() => {
    const cargarUnArchivo = async () => {
      try {
        const res = await fetch("./asyncmock/json");
        const jsonData = await res.json();

        jsonData.forEach(async (usuario) => {
          const usuarioDoc = doc(
            collection(db, "users"),
            usuario.id.toString()
          );
        });
      } catch (error) {
        console.log("Error", error);
      }
    };
  });

  cargarUnArchivo();

  return <div>CargarJson</div>;
};

export default CargarJson;
