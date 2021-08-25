import React, { useEffect, useState } from "react";
import Item from './Item';
import { datosProducto } from "./datosProducto";
export default function ItemListContainer() {

    const [detallesProductos, setDetallesProductos] = useState([]);
    const [cargando, setCargando] = useState(false);
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
        }, 2000)
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