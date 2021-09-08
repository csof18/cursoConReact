import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
                    } }>{contador} Productos agregados</Button>
                    <Button variant="light" onClick={restar}>-</Button>
                    </div>
                    {contador > 0 ? (<Button as={Link} to="/cart" variant="outline-light" >Ver carrito </Button>) : (console.log('no agrego ningun producto al carrito'))}
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
                    } }>Productos agregados {contador}</Button>
            
            <Button variant="outline-light" onClick={restar}>Quitar un producto</Button>
        </>
    )
}
