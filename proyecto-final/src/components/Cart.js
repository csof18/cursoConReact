import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Form } from "react-bootstrap"
import Delete from "./Delete";
export default function Cart(){
    
  const {contextProducto, setContextProducto} =  useContext(CartContext);
  console.log('VER VALOR DE contextProducto en cart ', contextProducto);
  const borrarProducto = (idProducto) =>{
    const borrarDeContex = contextProducto.findIndex(elemento => idProducto === elemento.id)
    const arrayConProductoBorrado = contextProducto.slice(borrarDeContex, 1);
    setContextProducto(arrayConProductoBorrado);
  }
  const onAdd = ()=>{}
  const productosEnCarrito = contextProducto.map((dataCarrito)=> {
    
    return (
      <>
      
        <div className="carritoCss margen5">
          <img src={dataCarrito.src} alt={dataCarrito.nombreProducto} className="imgCarrito"/>
          <div className="datosCarrito">
            <p>{dataCarrito.nombreProducto}</p>
            <p>valor contador {dataCarrito.cantidad}</p>                        
            <p >{dataCarrito.precio} $</p>
            <ItemCount  onAdd={onAdd} 
            valorStock={dataCarrito.stock}
            carrito={true}
            />
            <Button variant="light" style={{margin:"5px"}} onClick={() => borrarProducto(dataCarrito.id)}>{<Delete/>}</Button>
          </div>
        </div>
      </>
      )
    }
    )
    if(productosEnCarrito.length !== 0){
      return(
          <>
          {console.log('ESTOY EN EL IF CONTEXTOpRODUCTO ', productosEnCarrito)}
            <div>
              {productosEnCarrito}
              <p>Sub total (sin envio): ...</p>
              <div className="envioCss">
                <Form.Check aria-label="option 1" className="itemEnvio"/>
                <p className="textoEnvio">Envío 48hs en CABA y GBA. No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui. (VER MAPA EN: https://cutt.ly/regalameRegalate)</p>
              </div>
              <p>Total: ...</p>
              <Button variant="light" className="margen5">Terminas Compra</Button>
              <Link to="/item" ><Button variant="light" className="margen5">Ver mas productos</Button></Link>
              <Button variant="light" className="margen5">Vaciar carrito {<Delete/>}</Button>
            </div>
          
          </>
      )
    }
    return (
    <>
      {console.log('ESTOY EN EL else CONTEXTOpRODUCTO ', productosEnCarrito)}
      <div  className="anuncios">
        <h3>Aun no tiene productos en el carrito</h3>
        <Link to="/item" variant="light" className="linkConFormaDeBtn btnDerecha">Ver productos</Link>
      </div>
    </>
    )
}