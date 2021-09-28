import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import Delete from "./Delete";
import CartCount from "./CartCount";
export default function CartContainer(){
  const {contextProducto, setContextProducto} =  useContext(CartContext);
  const borrarProducto = (idProducto) =>{
    const arrayConProductoBorrado = contextProducto.filter(productoBorrado => productoBorrado.id !== idProducto)
    setContextProducto(arrayConProductoBorrado);
  }
  const onAdd = (idProducto)=>{
    const posicionProductoEnContext = contextProducto.findIndex( productoEnContexto => productoEnContexto.id === idProducto )    
    contextProducto[posicionProductoEnContext].cantidad += 1;
    setContextProducto(Array.from(contextProducto));
  }
  const onRemove = (idProducto) =>{
    const posicionProductoEnContext = contextProducto.findIndex( productoEnContexto => productoEnContexto.id === idProducto )    
    contextProducto[posicionProductoEnContext].cantidad -= 1;
    setContextProducto(Array.from(contextProducto));
  }
  const productosEnCarrito = contextProducto.map((dataCarrito)=> {
    return (
      <>
        <div className="carritoCss margen5">
          <img src={dataCarrito.src} alt={dataCarrito.nombreProducto} className="imgCarrito"/>
          <div className="datosCarrito">
            <p>{dataCarrito.nombreProducto}</p>
            <p>Stock disponible {dataCarrito.stock - dataCarrito.cantidad}</p>                        
            <p >{dataCarrito.precio} $</p>
            <CartCount 
              onAdd={() => onAdd(dataCarrito.id)}
              onRemove={() => onRemove(dataCarrito.id) } 
              valorStock={dataCarrito.stock}
              cantidad={dataCarrito.cantidad}
            />
            <Button variant="light" style={{margin:"5px"}} onClick={() => borrarProducto(dataCarrito.id)}>{<Delete/>}</Button>
          </div>
        </div>
      </>
    )
  })
  return ({productosEnCarrito})
}