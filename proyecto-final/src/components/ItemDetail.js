import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
export default function ItemDetail(props){
  const {contextProducto, setContextProducto} =  useContext(CartContext);
  console.log('VER VALOR DE contextProducto ', contextProducto);
    const onAdd = (producto)=> {
        console.log('agregaron producto', producto)
    }
    return(
        <>
        {console.log('VER VALOR PROPS', props.imagen)}
        <h1>ver valor de contextProducto {contextProducto}</h1>
        <Button onClick={()=>setContextProducto(!contextProducto)}>cambie a falso?</Button>*/
            <section className='estiloProducto'>
               
                <div className='imgProducto'>
                    {/*<img src={props.imagen.src} alt={props.nombreProducto} height={props.imagen.height} className='imagen'/>*/}
                </div>
                <div className='datosDeProducto'>
                <Button onClick={()=> onAdd(props)} variant="outline-light" ><Link to="/"  className="textDecorationNone">x</Link></Button> 
                    
                    <div className='detallesProduc'>
                        <h2>{props.nombreProducto}</h2>
                        <p>{props.descripcion}</p>
                    </div>
                    <div className='precioYComprar'>
                        <p className='precioProduc'>{props.precio} $</p>
                        <p className='stockProduc'>Disponibles {props.stock}</p>
                        <ItemCount  onAdd={onAdd} className='btnComprar' valorStock={props.stock}/>
                    </div>
                    <p className='datosEnvio'>{props.envio}</p>
                    
                    
                </div>
        </section>
        </>
    )
}