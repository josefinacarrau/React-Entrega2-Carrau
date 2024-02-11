//Importamos dos funciones del modulo Firebase:

import { initializeApp } from "firebase/app";
// 1) initializeApp me permite iniciar la conexion con Firebase

import {getFirestore} from "firebase/firestore";
//2) Me permite obtener una instacia del Firestore

// Objeto con nuestra informacion de la cuenta.
// Incluye la KEY personal para la base de datos : apiKey
const firebaseConfig = {
  apiKey: "AIzaSyBjKWC8yw_Lgb0K0SsaqwZJZTnT4Gr8RmQ",
  authDomain: "cimarronas-masterclass.firebaseapp.com",
  projectId: "cimarronas-masterclass",
  storageBucket: "cimarronas-masterclass.appspot.com",
  messagingSenderId: "127186262418",
  appId: "1:127186262418:web:cb3449fec704c3701f094b"
};

// Initialize Firebase y se pasa la configuracion como argumento.
// Esto retorna una instancia (un objeto) de Firebase
const app = initializeApp(firebaseConfig);

// Uso esa instacia "app" para obtener el servicio de Firestore:
export const db = getFirestore(app);
// Tengo que agregar el prefijo export porque lo voy a utilizar en toda la app y necesito tenerlo disponible.