import { useEffect, useState } from "react";
import CartWidget from './CartWidget';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Delete from "./Delete";

export default function ItemCount(props){
    const [contador, setContador] = useState(0);
    const [comprado, setComprado] = useState(false);
    const sumar = ()=>{
        if(contador < props.valorStock){
            setContador(contador + 1);
        }
    };
    const restar = () =>{
        if(contador > 0){
            setContador(contador - 1);
        }
    };
    useEffect(() => {
        console.log('ver cantCompra ', contador);
    }, [contador]);
    if(props.carrito){
        setContador(props.cantidad)
        console.log(props.cantidad, 'VER VALOR DE CANTIDAD')
        return (
            <>
                <div class="btn-group  datosCarrito ">
                    <Button variant="light" onClick={sumar}>+ </Button>
                    <Button variant="light" onClick={()=> {
                        props.onAdd(contador)
                        setComprado(true);
                        setTimeout(()=> setComprado(false) ,1000)
                        console.log('ME TOCARON TERMINAR COMPRA')
                    } }>{<CartWidget/>}  {contador}</Button>
                    <Button variant="light" onClick={restar}>-</Button>
                </div>
                
            </>
        )
    }
    if(contador < props.valorStock){
        return (
            <>
                <div className="botonesCompra">
                    <div className="btn-group ">

                    <Button variant="light" onClick={sumar}>+ </Button>
                    <Button variant="light" onClick={()=> {
                        props.onAdd(contador)
                        setComprado(true);
                        setTimeout(()=> setComprado(false) ,1000)
                    } }>{<CartWidget/>}Comprar {contador}</Button>
                    <Button variant="light" onClick={restar}>-</Button>
                    </div>
                    <Link to="/cart" className="textDecorationNone"><Button onClick={()=>props.onAdd(props)} variant="outline-light" >Terminar compra </Button></Link> 
                    { comprado && <p className="productoAgregado">Producto agregado</p>}
                </div>
            </>
        )
    }
    return (
        <>
            <Link to="/cart"  className="textDecorationNone"><Button onClick={()=>props.onAdd(props)} variant="outline-light" >Terminar compra </Button></Link>
            <Button variant="outline-light" onClick={restar}>Quitar un producto {<CartWidget/>}</Button>        
            <p className="parrafoDelBbnComprar">Lo sentimos ya no contamos con mas stock</p>
        </>
    )
}
