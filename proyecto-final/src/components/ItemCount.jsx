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
    /*const terminarCompra = (contador) => {
        if(contador > 0){
            return (

                <>
                {console.log('ESTOY EN EL IF DE VER CARRITO')}
                <Button as={Link} to="/cart" variant="outline-light" >Ver carrito </Button> 
            </>
            )
        }
    }*/
    useEffect(() => {
        console.log('ver cantCompra ', contador);
    }, [contador]);
   /*if(props.carrito){
        return (
            <>
                <div class="btn-group  datosCarrito ">
                    <Button variant="light" onClick={sumar}>+ </Button>
                    <Button variant="light" onClick={()=> {
                        props.onAdd(contador)
                        setComprado(true);
                        setTimeout(()=> setComprado(false) ,1000)
                        console.log('ME TOCARON TERMINAR COMPRA')
                    } }>{<CartWidget/>}  {props.cantidad}</Button>
                    <Button variant="light" onClick={restar}>-</Button>
                </div>
                
            </>
        )
    }*/
    if(contador < props.valorStock){
        return (
            <>
                <div className="botonesCompra">
                    <div className="btn-group ">

                    <Button variant="light" onClick={sumar}>+ </Button>
                    {console.log('ver valor de contador ',contador)}
                    <Button variant="light" onClick={()=> {
                        props.onAdd(contador)
                        setComprado(true);
                        setTimeout(()=> setComprado(false) ,1000)
                    } }>{contador} Productos agregados {<CartWidget/>} </Button>
                    <Button variant="light" onClick={restar}>-</Button>
                    </div>
                    {contador > 0 ? (<Button as={Link} to="/cart" variant="outline-light" >Ver carrito </Button>) : (console.log('no agrego ningun producto al carrito'))}
                    {/*terminarCompra(contador)*/}
                    {/*<Button as={Link} to="/cart" variant="outline-light" >Terminar compra </Button>*/}
                    { comprado && <p className="productoAgregado">Producto agregado</p>}
                </div>
            </>
        )
    }
    return (
        <>
            <Button variant="light" onClick={()=> {
                        props.onAdd(contador)
                        setComprado(true);
                        setTimeout(()=> setComprado(false) ,1000)
                    } }>{<CartWidget/>}Productos agregados {contador}</Button>
            {/*<Button as={Link} to="/cart" variant="outline-light" >Terminar compra </Button>*/}
            <Button variant="outline-light" onClick={restar}>Quitar un producto {<CartWidget/>}</Button>
        </>
    )
}
