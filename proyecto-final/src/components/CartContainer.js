
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Delete from "./Delete";
export default function CartContainer(){
    
  const {contextProducto, setContextProducto} =  useContext(CartContext);
 
  const borrarProducto = (idProducto) =>{
    
    const borrarDeCarrito = [...contextProducto]
    const arrayConProductoBorrado = borrarDeCarrito.filter(productoBorrado => productoBorrado.id !== idProducto)
    setContextProducto(arrayConProductoBorrado);
  }
  
  const productosEnCarrito = contextProducto.map((dataCarrito)=> {
  
    return (
      <>
        <div className="carritoCss margen5">
          <img src={dataCarrito.src} alt={dataCarrito.nombreProducto} className="imgCarrito"/>
          <div className="datosCarrito">
            <p>{dataCarrito.nombreProducto}</p>                       
            <p >{dataCarrito.precio} $</p>
            
            <Button variant="light" style={{margin:"5px"}} onClick={() => borrarProducto(dataCarrito.id)}>{<Delete/>}</Button>
          </div>
        </div>
      </>
    )
  })

   
      return ( {productosEnCarrito} )
}