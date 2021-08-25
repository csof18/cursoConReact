import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ItemCount from './ItemCount';
export default function ItemDetail({imagen,nombreProducto,descripcion,precio,stock, envio, cultarDetalleProducto}){
    console.log("Imagen:",imagen)
    return(
        <>
        <Link to="/item/:id" className="decoracionNone">
        <section className='estiloProducto'>
                <div className='imgProducto'>
                    <img src={imagen.src} alt={nombreProducto} height={imagen.height} className='imagen'/>
                </div>
                <div className='datosDeProducto'>
                    <Button variant="outline-light" className='btnCerrarProducto' onClick={()=> {cultarDetalleProducto()}}>X</Button>
                    <div className='detallesProduc'>
                        <h2>{nombreProducto}</h2>
                        <p>{descripcion}</p>
                    </div>
                    <div className='precioYComprar'>
                        <p className='precioProduc'>{precio} $</p>
                        <p className='stockProduc'>Disponibles {stock}</p>
                        <ItemCount className='btnComprar' valorStock={stock}/>
                    </div>
                    <p className='datosEnvio'>{envio}</p>
                </div>
        </section>
        </Link>
        </>
    )
}