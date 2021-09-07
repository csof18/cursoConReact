
import { CartContext } from "../context/CartContext";
import { useContext} from "react";
import { Button } from "react-bootstrap";
import Delete from "./Delete";
import CartCount from "./CartCount";
export default function CartContainer(){
    
  const {contextProducto, setContextProducto} =  useContext(CartContext);
  console.log('VER VALOR DE contextProducto en cart ', contextProducto);
 
  const borrarProducto = (idProducto) =>{
    if(contextProducto.length === 1){
      setContextProducto([])
      return;
    }
    const borrarDeContex = contextProducto.findIndex(elemento => idProducto === elemento.id)
    const arrayConProductoBorrado = contextProducto.splice(borrarDeContex, 1);
    setContextProducto(arrayConProductoBorrado);
    console.log(setContextProducto(arrayConProductoBorrado), 'ver valor de arrayConProductoBorrado')
  }

  const onAdd = ()=>{
    
  }
  const productosEnCarrito = contextProducto.map((dataCarrito)=> {
  
    return (
      <>
        <div className="carritoCss margen5">
          <img src={dataCarrito.src} alt={dataCarrito.nombreProducto} className="imgCarrito"/>
          <div className="datosCarrito">
            <p>{dataCarrito.nombreProducto}</p>
            <p>valor contador {dataCarrito.cantidad}</p>                        
            <p >{dataCarrito.precio} $</p>
            <CartCount  onAdd={onAdd} 
            valorStock={dataCarrito.stock}
            cantidad={dataCarrito.cantidad}
            />
            <Button variant="light" style={{margin:"5px"}} onClick={() => borrarProducto(dataCarrito.id)}>{<Delete/>}</Button>
          </div>
        </div>
      </>
    )
  })

      return(
          <>
          {productosEnCarrito}
          {console.log('ESTOY EN EL IF CONTEXTOpRODUCTO ', productosEnCarrito)}
          </>
      )
}