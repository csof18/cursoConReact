import { useEffect, useState } from "react";
import { datosProducto } from "./datosProducto";
import Category from "./Category";
import { useParams } from "react-router";
export default function CategoryContainer(){
    const [filtrarTitulo, setFiltrarTitulo ]= useState([])
    const { nombre } = useParams();
    useEffect(() =>{
        setFiltrarTitulo(datosProducto)
    }, []);
    const datosFiltrados = filtrarTitulo.filter((filtTitulos)=>filtTitulos.titulo === nombre)
    return (
        <>
            <h1>{nombre}</h1>
            {datosFiltrados && datosFiltrados.map((dataFiltro) => {
                return (
                    <Category {...dataFiltro}/>
                )
            })}
        </>
    )
}