/*
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { Form } from "react-bootstrap"
import Delete from "./Delete";
export default function Cart(){
    
  const {contextProducto, setContextProducto} =  useContext(CartContext);
  console.log('VER VALOR DE contextProducto en cart ', contextProducto);
  const [pedirEnvio, setPedirEnvio] = useState(false);
  
  let sumarPrecios = 0;
  for ( const precioProducto of contextProducto){
    sumarPrecios += precioProducto.precio * precioProducto.cantidad
    console.log('VER VALOR DE FOR DENTRO DEL FOR', sumarPrecios)
  }
  console.log('VER VALOR DE FOR FUERA DE EL', sumarPrecios)
  let valorTotalConEnvio = 350 + sumarPrecios;
 console.log('ver valor del TOTAL CON EL ENVIO ', valorTotalConEnvio);
  
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

  const vaciarCarrito = () => {
    if(contextProducto.length !== 0){
      setContextProducto([])
      console.log('ESTOY EN EL IF DEL CARRITO VACIO')
      return;
    }
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
            <Button variant="light" style={{margin:"5px"}} onClick={() => borrarProducto(dataCarrito.id)}>{<Delete/>}</Button>
          </div>
        </div>
      </>
    )
  })

    if(productosEnCarrito.length !== 0){
      return(
          <>
          {console.log('ESTOY EN EL IF CONTEXTOpRODUCTO ', productosEnCarrito)}
            <div>
              {productosEnCarrito}
              <p>Sub total (sin envio): {sumarPrecios}$</p>
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
*/


import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import Delete from "./Delete";
import CartContainer from "./CartContainer";
import FormularioDeCompras from "./FormularioDeCompras";

export default function Cart(){
    const {contextProducto, setContextProducto} =  useContext(CartContext);
    const [pedirEnvio, setPedirEnvio] = useState(false);
    
    //calculando total
    console.log('VER VALOR DE contextProducto en CARTCOUNT ', contextProducto);
      let sumarPrecios = 0;
      for ( const precioProducto of contextProducto){
        sumarPrecios += precioProducto.precio * precioProducto.cantidad
        console.log('VER VALOR DE FOR DENTRO DEL FOR', sumarPrecios)
        console.log('VER VALOR DE contextProducto en CARTCOUNT ', contextProducto);
      }
      console.log('VER VALOR DE FOR FUERA DE EL', sumarPrecios)
      let valorTotalConEnvio = 350 + sumarPrecios;
     console.log('ver valor del TOTAL CON EL ENVIO ', valorTotalConEnvio);  

     const vaciarCarrito = () => {
        if(contextProducto.length !== 0){
          console.log('ESTOY EN EL IF DEL CARRITO VACIO',contextProducto)
          setContextProducto([])
        }
      }

    
      return (
            <>
              {
              
              (contextProducto.length !== 0) ? 
                <div>
                  <CartContainer/>
                  <p>Sub total (sin envio): {sumarPrecios} $</p>
                  <div className="envioCss">
                    <Form.Check aria-label="option 1" className="itemEnvio" onClick={()=> setPedirEnvio(true)}/>
                    <p className="textoEnvio">Envío 48hs en CABA y GBA. No Escobar, Pilar, Gral Rodríguez, Marcos Paz, Ezeiza, Esteban Echeverría, Alte. Brown, F. Varela, Berazategui. (VER MAPA EN: https://cutt.ly/regalameRegalate)</p>
                    <p className="textoPrecioEnvio">Costo 350$</p>
                  </div>
                  <p>Total: {pedirEnvio ? (valorTotalConEnvio) : (sumarPrecios)} $</p>
                  <Button variant="light" className="margen5" onClick={FormularioDeCompras()}>Terminar Compra</Button>
                  <Link to="/item" ><Button variant="light" className="margen5">Ver mas productos</Button></Link>
                  <Button variant="light" className="margen5" onClick={() => vaciarCarrito()}>Vaciar carrito {<Delete/>}</Button>
                </div>
              : 

                <div  className="anuncios">
                  <h3>Aun no tiene productos en el carrito</h3>
                  <Link to="/item" variant="light" className="linkConFormaDeBtn btnDerecha">Ver productos</Link>
                </div>
              
              }
              
              
            </>
      )
}