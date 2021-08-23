import { useEffect, useState } from "react";
import { datosProducto } from "./datosProducto";
import ItemList from "./ItemList";
export default function ItemListContainer(){
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(false);
    
    useEffect(()=>{
        new Promise((resolve, reject) => {
            setCargando(true);
            setTimeout(()=> resolve(datosProducto), 2000);
        })
        .then((datos) => setProducto(datos))
        .finally(()=>{
            setCargando(false);
        });
    }, []);

    return cargando ? (<h3>Cargando</h3>) : (<ItemList producto={producto}/>);
}