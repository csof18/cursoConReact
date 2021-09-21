// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//CONFIGURACION FIREBASE PARA USAR FIRESTORE
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwWvGiKsDmPx6B6_tNyfOHxNaRDi9DBMg",
  authDomain: "regalameregalate-e367e.firebaseapp.com",
  projectId: "regalameregalate-e367e",
  storageBucket: "regalameregalate-e367e.appspot.com",
  messagingSenderId: "920081487053",
  appId: "1:920081487053:web:2ad47c8e33360bed250584"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 

//ESTA FUNCION RECIBE EL FIRESTORE
async function getProductos(){
  const coleccion = collection(db, 'productos');
  const snapshot = await getDocs(coleccion);
  const productos = snapshot.docs.map( doc => ({ id: doc.id, ...doc.data() }));
  return productos;
}

async function getProductosById(id){
    const productos = await getProductos();
    return productos.find( producto => producto.id == id);
}

async function getProductosByCategoria(categoria){
    const coleccion = collection(db, 'productos');
    const queryProductos = query(coleccion, where("titulo","==",categoria));
    const snapshot = await getDocs(queryProductos);
    const productosFiltradosPorCategoria = snapshot.docs.map( doc => ({ id: doc.id, ...doc.data() }));
    return productosFiltradosPorCategoria;
}

export { getProductos, getProductosById, getProductosByCategoria };