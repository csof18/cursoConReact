import { useEffect, useState } from "react";
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








































  /*
    const[contador, setContador] = useState(0);
    
    
    useEffect(() => {
        //cuando contador cambie useEffect se va a ejecutar
        setContador(productos)
        console.log('estoy en el useEffect contador', contador);
    }, [contador]);
    */

    /*
    return(
        <>
            
            {productos.map((datosDelProducto) => (
                <CardProductos {...datosDelProducto}/>

            ))}
        </>
    )
}
*/
/*<h2>verContador: </h2>
            <Botones text='comprar' hiceClick={ () => setContador (contador +1)}/>
            {console.log(contador)}
            <button onClick={ ()=> setContador (contador -1)}> Quitar </button>
            */