import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
export default function Cart(){
    
  const {contextProducto} =  useContext(CartContext);
  console.log('VER VALOR DE contextProducto en cart ', contextProducto);
    return(
      <>
        <Link to="/cart"></Link>
        <h2>Estoy en cart</h2>
      </>
    )
}