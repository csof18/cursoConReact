import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Form } from "react-bootstrap"
import Delete from "./Delete";
import CartCount from "./CartCount";
import Cart from "./Cart";
export default function CartContainer(){
    
  const {contextProducto, setContextProducto} =  useContext(CartContext);
  console.log('VER VALOR DE contextProducto en cart ', contextProducto);
 // const [pedirEnvio, setPedirEnvio] = useState(false);
  /*
  let sumarPrecios = 0;
  for ( const precioProducto of contextProducto){
    sumarPrecios += precioProducto.precio * precioProducto.cantidad
    console.log('VER VALOR DE FOR DENTRO DEL FOR', sumarPrecios)
  }
  console.log('VER VALOR DE FOR FUERA DE EL', sumarPrecios)
  let valorTotalConEnvio = 350 + sumarPrecios;
 console.log('ver valor del TOTAL CON EL ENVIO ', valorTotalConEnvio);
  */
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

/*
  const borrarProducto = (idProducto) =>{
    
    const borrarDeContex = [...contextProducto]
    const arrayConProductoBorrado = borrarDeContex.filter(borrarProducto.id )
    setContextProducto(arrayConProductoBorrado);
    console.log(setContextProducto(arrayConProductoBorrado), 'ver valor de arrayConProductoBorrado')
  }*/
/*
  const vaciarCarrito = () => {
    if(contextProducto.length !== 0){
      setContextProducto([])
      console.log('ESTOY EN EL IF DEL CARRITO VACIO')
      return;
    }
  }
  */
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
            {/*<p>CANTIDAD DE PRODUCTOS {dataCarrito.cantidadFinal}</p>
            {console.log('ver valor de cantidad final', dataCarrito.cantidadFinal)}*/}
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

   // if(productosEnCarrito.length !== 0){
      return(
          <>
          {productosEnCarrito}
          {console.log('ESTOY EN EL IF CONTEXTOpRODUCTO ', productosEnCarrito)}
           
            {/*<div>
              {...productosEnCarrito}
              <p>Sub total (sin envio): <CartCount {sumarPrecios}/> $</p>
              <div className="envioCss">
                <Form.Check aria-label="option 1" className="itemEnvio" onClick={()=> setPedirEnvio(true)}/>
                <p className="textoEnvio">Envío 48hs en CABA y GBA. No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui. (VER MAPA EN: https://cutt.ly/regalameRegalate)</p>
                <p className="textoPrecioEnvio">Costo 350$</p>
              </div>
              <p>Total: {pedirEnvio ? (valorTotalConEnvio) : (sumarPrecios)} $</p>
              <Button variant="light" className="margen5">Terminas Compra</Button>
              <Link to="/item" ><Button variant="light" className="margen5">Ver mas productos</Button></Link>
              <Button variant="light" className="margen5" onClick={() => vaciarCarrito()}>Vaciar carrito {<Delete/>}</Button>
            </div>
            
          </>*/}
          </>
      )
   /* }
    return (
    <>
      {console.log('ESTOY EN EL else CONTEXTOpRODUCTO ', productosEnCarrito)}
      <div  className="anuncios">
        <h3>Aun no tiene productos en el carrito</h3>
        <Link to="/item" variant="light" className="linkConFormaDeBtn btnDerecha">Ver productos</Link>
      </div>
    </>
    )
*/

}