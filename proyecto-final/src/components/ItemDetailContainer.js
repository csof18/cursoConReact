import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { datosProducto } from "./datosProducto";
import ItemDetail from "./ItemDetail";

import "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { getData } from "../firebase";
export default function ItemDetailContainer(){
    const [dataProducto, setDataProducto] = useState([]);
    const { id } = useParams();
    const idFiltrado = dataProducto.filter((filtrarId) => filtrarId.id === id)
    console.log('ver FILTRADO DE ID ', idFiltrado);
    const getDataProducto = async () => {
        try {
            const dataProductoCollection = collection(getData(), 'productos');
            
            const dataProductoSnapshot =  await getDocs(dataProductoCollection);
            
            const dataProductoList =dataProductoSnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setDataProducto(dataProductoList);
        }
        catch (error) {
            console.log('ESTOY EN EL CATCH DEL ASYNC itemDetailCOntainer');
        }
    }

    useEffect(() => {
        getDataProducto()
    }, [])
    console.log(dataProducto, 'VER valor de dataProducto')
    

    return (
        <>
          
            <Link to={`/item/${id}`}></Link>
            {console.log('a ver SI SALE  filtrar id del click', id)}
            <p>{id}</p>
            {dataProducto.map((mapaDeDataProducto) => {
                return (
                    <>
                        <ItemDetail {...mapaDeDataProducto}/>
                        {console.log('ver valor de mapaDeDataProducto y de mapaDeDataProducto.id', mapaDeDataProducto, mapaDeDataProducto.precio)}
                    </>
                )
            })}
                            
        </>
    )
};