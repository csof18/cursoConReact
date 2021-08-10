import React from "react";
import ItemList from "./ItemList";
//componente de estado
export default function ItemListContainer({imagen, nombreProducto, descripcion, precio, stock}) {
    return(
        <>
            <img>{imagen}</img>
            <h3>{nombreProducto}</h3>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <p>{stock}</p>
        </>
    )
}
<ItemList/>