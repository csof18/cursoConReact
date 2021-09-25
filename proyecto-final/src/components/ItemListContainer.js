import { useEffect, useState } from "react";
import { datosProducto } from "./datosProducto";
import ItemList from "./ItemList";
import { Link } from "react-router-dom";
import { getProductos } from "../firebase";
export default function ItemListContainer(){
    const [producto, setProducto] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        async function getData(){
          setCargando(true);
          setTimeout( async ()=>{
            const result = await getProductos();
            console.log(result);
            setProducto(result);
            setCargando(false);
          }, 0)
        }
        getData();
      },[])
    return (
        <>
            <Link to={`/item`}></Link>
            {cargando ? (<h3 className="anuncios">Cargando....</h3>) : (<ItemList producto={producto}/>)}
        </>
    )
}