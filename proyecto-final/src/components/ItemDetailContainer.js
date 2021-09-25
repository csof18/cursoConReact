import React,{ useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { datosProducto } from "./datosProducto";
import ItemDetail from "./ItemDetail";
import { getProductosById } from "../firebase";
export default function ItemDetailContainer(){
    const [dataProducto, setDataProducto] = useState({})
    const { id } = useParams();
    useEffect(() => {
        async function getData(){
          const resultById = await getProductosById(id);
          console.log(resultById);
          setDataProducto(resultById);
        }
        getData();
      },[id])

    return (
        <>
            <Link to={`/item/${id}`}></Link>
            {dataProducto && <ItemDetail {...dataProducto}   />}
            
        </>
    );
}