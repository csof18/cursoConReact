import { useEffect, useState } from "react";
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
        }
    }
    const restarCantidad = () => {
        if(contCantidad > 0){
            setContCantidad(contCantidad - 1)
        }
    }
    useEffect(()=>{
        console.log('ver valor contCantidad en el useEffect', contCantidad)
    }, [contCantidad])
   
    return (
        <>
            <div class="btn-group  datosCarrito ">
                <Button variant="light" onClick={sumarCantidad}>+ </Button>
                <Button variant="light" onClick={()=> {
                   props.onAdd(contCantidad)
                    console.log('ME TOCARON TERMINAR COMPRA', props.cantidad)
                } }>{<CartWidget/>}  {contCantidad}</Button>
                <Button variant="light" onClick={restarCantidad}>-</Button>
            </div>
            {console.log('ver valor de contCantidad ', contCantidad)}
        </>
    )
}