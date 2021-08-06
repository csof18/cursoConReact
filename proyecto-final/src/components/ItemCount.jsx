import { useEffect, useState } from "react";
import Botones from "./button";
import CardProductos from './CartWidget';
const productos = [
    {
        nombreProducto: 'producto 1',
        stock: '7',
        imagen: '#',
        caracteristicas: {
            id: '1',
            descripcion: 'descripcion producto 1',
            precio: '100 $',
            carrito:''
        }
    },
    {
        nombreProducto: 'producto 2',
        stock: '4',
        imagen: '#',
        caracteristicas: {
            id: '2',
            descripcion: 'descripcion producto 2',
            precio: '200 $',
            carrito:''
        }
    }
]

export default function ItemCount() {
    const [item, setItem] = useState(1);
    
   useEffect(() => {
        console.log('mostrar item ', item);
    }, [item]);

    productos.map((datosDelProducto) => (
        <CardProductos {...datosDelProducto}/>
    ));

    const {stock} = productos[0];

    console.log(stock, 'valor de stock');
    if(item <= stock) {

        return(
            <>
                <Botones text='+' onAdd={() => setItem (item +1)} />
                <button><i class="fas fa-shopping-cart">{`Comprar ${item}`}</i></button>
                <Botones  text='-' onAdd={() => setItem(item -1)}/>
            </>
        )
    }
    return( <p>Lo sentimos ya no contamos con stock</p>)
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