import React, { useEffect, useState } from "react";
import ItemList from './ItemList';
//componente de estado
export default function ItemDetailContainer() {
    const [getItems, setGetItems] =useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            setGetItems()
        }, 2000)
    }, []);
    return(
        <>
        <ItemList/>
        </>
    )
}