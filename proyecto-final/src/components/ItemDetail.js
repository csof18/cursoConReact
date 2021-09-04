import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";
import { useContext } from "react";
export default function ItemDetail(props){
    const { contextProducto, setContextProducto } = useContext(CartContext);
    const onAdd = (contador)=> {
        const producto = { ...props, cantidad:contador}
        const filtrarProducto = contextProducto.find(productoFiltrado => productoFiltrado.id === producto.id)
        
        if(!filtrarProducto)
            setContextProducto([...contextProducto,producto])
        console.log('VER VALOR FILTRAR PRODUCTO CONTEXT ', filtrarProducto)
        console.log('agregaron producto', producto)
        console.log('ver valor de contextProducto en onadd', contextProducto)
        console.log('VER VALOR DE CONTADOR ', contador)
    
    }
    return(
        <>
            <section className='estiloProducto'>
                <div className='imgProducto'>
                    <img src={props.src} alt={props.nombreProducto}  className='imagen'/>
                </div>
                <div className='datosDeProducto'>
                <Link to="/item"  className="textDecorationNone"><Button  variant="outline-light" >x</Button></Link> 
                    <div className='detallesProduc'>
                        <h2>{props.nombreProducto}</h2>
                        <p>{props.descripcion}</p>
                    </div>
                    <div className='precioYComprar'>
                        <p className='precioProduc'>{props.precio} $</p>
                        <p className='stockProduc'>Disponibles {props.stock}</p>
                        <ItemCount  onAdd={onAdd} className='btnComprar ' valorStock={props.stock} />
                        
                    </div>
                    <p className='datosEnvio'>{props.envio}</p>
                </div>
            </section>
        </>
    )
}