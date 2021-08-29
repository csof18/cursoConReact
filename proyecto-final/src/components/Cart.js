import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
import { Button } from "react-bootstrap";
export default function Cart(){
    
  const {contextProducto} =  useContext(CartContext);
  console.log('VER VALOR DE contextProducto en cart ', contextProducto);
    return(
        <>
        <Link to="/cart"></Link>
        <h2>Estoy en cart</h2>
        <div style={{background: contextProducto ? 'red' : 'black', color: 'blue'}}>

        <p>contesto en cart {contextProducto}</p>
        
        </div>
        </>
    )
}