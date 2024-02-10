import { initializeApp } from "firebase/app"; //Me permite inizar la conexion con Firebase
import {getFirestore} from "firebase/firestore"; //Me permite obtener una instacia del Firestre

// Your web app's Firebase configuration
//INFORMACION SENSIBLE, EN ESPECIAL LA APIKEY
const firebaseConfig = {
  apiKey: "AIzaSyBjKWC8yw_Lgb0K0SsaqwZJZTnT4Gr8RmQ",
  authDomain: "cimarronas-masterclass.firebaseapp.com",
  projectId: "cimarronas-masterclass",
  storageBucket: "cimarronas-masterclass.appspot.com",
  messagingSenderId: "127186262418",
  appId: "1:127186262418:web:cb3449fec704c3701f094b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Uso esa instacia para obtener el servicio del Firestore:
export const db=getFirestore(app); //Se agrega export para poder acceder desde toda la app.