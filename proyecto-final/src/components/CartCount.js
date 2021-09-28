import { useState } from "react";
import { Button } from "react-bootstrap";
export default function CartCount(props){
    const[contCantidad, setContCantidad] = useState(props.cantidad)
    const sumarCantidad = () => {
        if(contCantidad < props.valorStock){
            setContCantidad(contCantidad + 1);
            props.onAdd()
        }
    }
    const restarCantidad = () => {
        if(contCantidad > 0){
            setContCantidad(contCantidad - 1)
            props.onRemove()
        }
    }
    return (
        <>
            <div class="btn-group  datosCarrito ">
                <Button variant="light" onClick={sumarCantidad}>+ </Button>
                <i className="fas fa-shopping-cart carritoCompras"> {contCantidad}</i>
                <Button variant="light" onClick={restarCantidad}>-</Button>
            </div>
        </>
    )
}