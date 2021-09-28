import { useEffect, useState } from "react";
import Category from "./Category";
import { useParams } from "react-router";
import { getProductosByCategoria } from "../firebase";

export default function CategoryContainer(){
    const [filtrarTitulo, setFiltrarTitulo ]= useState([])
    const { nombre } = useParams();
    useEffect(() => {
        async function getData(){
          const resultByCategoria = await getProductosByCategoria(nombre)
          console.log(resultByCategoria);
          setFiltrarTitulo(resultByCategoria);
        }
        getData();
      },[nombre])
    
    return (
        <>
            <h1>{nombre}</h1>
            {filtrarTitulo && filtrarTitulo.map((dataFiltro) => {
                return (
                    <Category {...dataFiltro}/>
                )
            })}
        </>
    )
}