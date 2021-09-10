import { useEffect, useState } from "react";
import { datosProducto } from "./datosProducto";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { getData } from "../firebase";
export default function ItemListContainer(){
    const [producto, setProducto] = useState([]);
    useEffect(()=>{
        //pido los datos
        const getProducto = async () => {
            
            //acceso a coleccion de productos que cargue
            const productoCollection = collection(getData(), 'productos');
            //obtengo el snapShot(muestra la lista en ese momento, si cambia la lista no se actualiza)
            const productoSnapshot = await getDocs(productoCollection);
            //obtengo datos en formato json con data()
            //docs es el array pero no son los datos en si  sino que es un objeto mucho mas grande
            const productoList = productoSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            console.log(productoList, 'VER QUE DEVUELVE PRODUCTOLIST en itemListContainer');
            setProducto(productoList);

            
        };
        getProducto();
    }, [])

    return (
        <>
            <Link to={`/item`}></Link>
            <ItemList producto={producto}/>
            
        </>
    )
}