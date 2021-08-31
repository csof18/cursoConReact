import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
export default function ItemDetail(props){
    const onAdd = (producto)=> {
        console.log('agregaron producto', producto)
    }
    return(
        <>
            <section className='estiloProducto'>
                <div className='imgProducto'>
                    <img src={props.src} alt={props.nombreProducto}  className='imagen'/>
                </div>
                <div className='datosDeProducto'>
                <Button onClick={()=> onAdd(props)} variant="outline-light" ><Link to="/item"  className="textDecorationNone">x</Link></Button> 
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