import { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { Button } from "react-bootstrap";
import CartWidget from "./CartWidget";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
export default function CartCount(props, contador){
    const {contextProducto, setContextProducto} =  useContext(CartContext);
  console.log('VER VALOR DE contextProducto en CARTCOUNT ', contextProducto);

    const[contCantidad, setContCantidad] = useState(props.cantidad)


    const sumarCantidad = () => {
        if(contCantidad < props.valorStock){
            setContCantidad(contCantidad + 1);
            console.log('VER VALOR DE PROPS CANTIDAD ', props.cantidad);
            props.onAdd()
        }
    }
    const restarCantidad = () => {
        if(contCantidad > 0){
            setContCantidad(contCantidad - 1)
            props.onRemove()
        }
    }
    useEffect(()=>{
        console.log('ver valor contCantidad en el useEffect', contCantidad)
    }, [contCantidad])
   
    return (
        <>
            <div class="btn-group  datosCarrito ">
                <Button variant="light" onClick={sumarCantidad}>+ </Button>
                <i className="fas fa-shopping-cart carritoCompras"> {contCantidad}</i>
                <Button variant="light" onClick={restarCantidad}>-</Button>
            </div>
            {console.log('ver valor de contCantidad ', contCantidad)}
        </>
    )
}