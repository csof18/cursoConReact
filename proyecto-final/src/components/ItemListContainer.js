import React, { useEffect, useState } from "react";
import Item from './Item';
import ItemDelait from './ItemDetail';
import { datosProducto } from "./datosProducto";
//componente de estado
export default function ItemListContainer() {

    const [detallesProductos, setDetallesProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
    /*useEffect(()=>{
        
            setDetallesProductos(datosProducto)
        
    }, [])*/
    const getProductos = async () => {
        try{
            setDetallesProductos(datosProducto);
            setCargando(false);
        }catch (error){
            console.log('SURGIO UN ERROR');
        }
    };
    useEffect(() => {
        setDetallesProductos(datosProducto)
        setCargando(true)
        setTimeout(()=>{
            getProductos();
            setCargando(false)
        }, 1000)
    }, []);
    return(
        <>
            {cargando ? (<h3>Cargando...</h3>) : (
                detallesProductos.length && detallesProductos.map((mapProductos) => 
                    <Item {...mapProductos} />
                )
            )}
        </>
    )
}