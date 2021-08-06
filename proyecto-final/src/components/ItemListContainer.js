import React from "react";
//componente de estado
export default function ItemListContainer({descripcion, precio}) {
    return(
        <>
            <p>{descripcion}</p>
            <p>{precio}</p>
        </>
    )
}