import ItemCount from './ItemCount';
export default function ItemDetail({imagen,nombreProducto,descripcion,precio,stock, envio}){
    return(
        <section className='estiloProducto'>
                <div className='imgProducto'>
                    <img src={imagen.src} alt={nombreProducto} height={imagen.height} className='imagen'/>
                </div>
                <div className='datosDeProducto'>
                    <div className='detallesProduc'>
                        <h2>Producto destacaro de la semana</h2>
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
    )
}