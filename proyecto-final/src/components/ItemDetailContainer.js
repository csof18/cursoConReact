import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { datosProducto } from "./datosProducto";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer(){
    const [dataProducto, setDataProducto] = useState([]);
      
    /*const onAdd = (...productos) =>{
        <>
        {console.log('VER VALOR DE ONADD ', productos)};
        
        <h2>Ver imagen {productos.imagen.src}</h2>
        </>
    }*/
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
            {dataProducto && <ItemDetail {...dataProducto}   />}
            {console.log('ver valor dataproducto', dataProducto)}
            {console.log('ver valor datosProducto', datosProducto)}
        </>
    );
}

/*onAdd={onAdd}*/






























/*import { useState, useEffect } from 'react';
import Productos from './MockAppi';
import Item from './Item';
export default function ItemDetailContainer() {
    const [detallesProductos, setDetallesProductos] = useState([]);
    const getProductos = async () => {
        try{
            const datos = await fetch(`${<Productos/>}`, {method: 'GET'});
            const mostrandoDatos = await datos.json();
            setDetallesProductos(mostrandoDatos.datosProducto);
        }catch (error){
            console.log('SURGIO UN ERROR');
        }
    };
    useEffect(() => {
        getProductos();
    }, []);
    return(
        <>
      {detallesProductos.length &&
        detallesProductos.map((mapProductos) => <Item {...mapProductos} />)}
    </>
    )
}*/