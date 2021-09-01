import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { datosProducto } from "./datosProducto";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(){
    const [dataProducto, setDataProducto] = useState([]);
    const { id } = useParams();
    const idFiltrado = datosProducto.filter((filtrarId) => filtrarId.id === id)
    console.log('ver FILTRADO DE ID ', idFiltrado);
    console.log('VER ID ', id);
    useEffect(()=>{
        setDataProducto(datosProducto)
        new Promise((resolve, reject)=>{
           
            resolve(datosProducto.filter((itemData)=> itemData.id === id))
        })
        .then((datos) => setDataProducto(datos[0]));
    }, []);
    return (
        <>
            <Link to={`/item/${id}`}></Link>
            {dataProducto && <ItemDetail {...dataProducto}   />}
            {console.log('ver valor dataproducto', dataProducto)}
            
        </>
    );
}