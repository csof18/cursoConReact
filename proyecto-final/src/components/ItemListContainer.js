import { useEffect, useState } from "react";
import { datosProducto } from "./datosProducto";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";

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

    return (
        <>
        <Link to="/category/:id">Estoy en categoria</Link>
        {cargando ? (<h3 className="cargando">Cargando....</h3>) : (<ItemList producto={producto}/>)}
        </>
    )
}