import { useState } from "recat";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");

  const manejadorFormulario = (e)=>{
    e.preventDefault();

    addDoc(collection(db,"usuarios"),{
        nombre, apellido, telefono
    })
setNombre("");
setApellido("");
setTelefono("");
  }

  return (
    <div>
      <form onSubmit={manejadorFormulario}>
        <h2>Formulario Clientes</h2>
        <label htmlFor="">Nombre</label>
        <input type="text" vale={nombre} onChange={(e) => setNombre(e.target.value)} />
        <br/>   <br/>

        <label htmlFor="">Apellido</label>
        <input type="text" vale={apellido} onChange={(e) => setNombre(e.target.value)} />
        <br/>   <br/>

        <label htmlFor="">Telefono</label>
        <input type="number" vale={telefono} onChange={(e) => setNombre(e.target.value)} />
        <br/>   <br/>

      </form>
    </div>
  );
};

export default Formulario;
