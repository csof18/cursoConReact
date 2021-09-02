import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
export default function Cart(){
    
  const {contextProducto} =  useContext(CartContext);
  console.log('VER VALOR DE contextProducto en cart ', contextProducto);
  const [contadorCarrito, setContadorCarrito] = useState(1);
  const sumaProduc = () =>{
    if(contadorCarrito < contextProducto.stock){
      setContadorCarrito(contadorCarrito +1)
    }
  }
  const productosEnCarrito = contextProducto.map((dataCarrito)=> {
    return (
      <>
        <img src={dataCarrito.src} alt={dataCarrito.nombreProducto} style={{height:"300px"}}/>
        <p>{dataCarrito.nombreProducto}</p>
        <p>valor contador {dataCarrito.cantidad}</p>
        <Button variant="light" onClick={() => {sumaProduc 
        (console.log('me tocaron estoy en +'))}
        }>+ </Button>
        <Button>Productos {contadorCarrito}{console.log('valor de contadorCarrito ', contadorCarrito)}</Button>
      </>
      )
    })
    return(
        <>
        {productosEnCarrito}
        
        </>
    )
}