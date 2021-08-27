import { useEffect, useState } from "react";
import CartWidget from './CartWidget';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ItemCount(props){
    const [cantCompra, setCantCompra] = useState(0);

    
    useEffect(() => {
        console.log('ver cantCompra ', cantCompra);
    }, [cantCompra]);
   if(cantCompra <= props.valorStock){
        return(
       <>
            <div class="btn-group">
                <Button variant="light" onClick={()=> setCantCompra (cantCompra + 1) }>+ </Button>
                <Button variant="light" >{<CartWidget/>}Comprar {cantCompra}</Button>
                <Button variant="light" onClick={()=> setCantCompra(cantCompra - 1) }>-</Button>
            </div>
       </>
    )}
    return(
        <>
        <Button onClick={()=> props.onAdd(props)} variant="outline-light" ><Link to="/cart"  className="textDecorationNone">Terminar compra </Link></Button> 
        <Button variant="outline-light" onClick={()=> setCantCompra(cantCompra - 1)}>Quitar un producto {<CartWidget/>}</Button>        
        <p>Lo sentimos ya no contamos con mas stock</p>
        </>
    )
}
