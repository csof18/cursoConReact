import React, { useEffect, useState } from "react";
import ItemList from './ItemList';
import ItemDelait from './ItemDetail';
import { datosProducto } from './DatosProducto';
import { propTypes } from "react-bootstrap/esm/Image";
//componente de estado
export default function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(false);

    const onAdd =(producto) => {
        console.log('ITEMLISTCONTAINER AGREGARON UN PRODUCTO ', producto);
        console.log('ITEMLISTCONTAINER ME TOCARON ', producto.nombreProducto);
       
    }
    useEffect(()=>{
        new Promise ((resolve, reject) =>{
            setCargando(true);
            setTimeout(()=>resolve(datosProducto), 2000);
        })
        .then((datos) => setProductos(datos)).finally(()=>{
            setCargando(false)
        })
    }, []);
    return cargando ? <h3>Cargando</h3> : <ItemList productos={productos} onAdd={onAdd}/>;
}