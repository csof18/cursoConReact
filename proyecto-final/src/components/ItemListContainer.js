import React from "react";
import ItemList from './ItemList';
import ItemDetailContainer from "./ItemDetailContainer";
//componente de estado
export default function ItemListContainer() {
    return(
        <>
        <ItemDetailContainer/>
        <ItemList/>
        </>
    )
}