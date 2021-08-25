import { useEffect, useState } from 'react';
import CartWidget from './CartWidget';
import { Button } from "react-bootstrap";
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
        <p>Lo sentimos ya no contamos con stock</p>
        <Button variant="light" onClick={()=> setCantCompra(cantCompra - 1)}>Quitar un producto {<CartWidget/>}</Button>
        </>
    )
}