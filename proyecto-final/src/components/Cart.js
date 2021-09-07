import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import Delete from "./Delete";
import CartContainer from "./CartContainer";

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
          setContextProducto([])
          console.log('ESTOY EN EL IF DEL CARRITO VACIO')
          return;
        }
      }

    if(contextProducto.length !== 0){
        return(
            <>
           
              <div>
                <CartContainer/>
                <p>Sub total (sin envio): {sumarPrecios} $</p>
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
        <div  className="anuncios">
          <h3>Aun no tiene productos en el carrito</h3>
          <Link to="/item" variant="light" className="linkConFormaDeBtn btnDerecha">Ver productos</Link>
        </div>
      </>
      )
}