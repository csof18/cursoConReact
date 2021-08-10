export default function Item({imagen, nombreProducto, descripcion, precio, stock}) {
    return (
        <div>
            <img src={imagen} alt='nombre de producto'/>
            <h3>{nombreProducto}</h3>
            <p>{descripcion}</p>
            <p>{precio}</p>
            <button><i className="fas fa-shopping-cart"></i>Comprar</button> {/*<BotonCarrito stockProducto={stock} /> va a reemplazar el boton*/}
            <p>{stock}</p>
        </div>
    )
}
//para hacer el boton del carrito para comprar.
//componente con 3 botones en item, y despues pasarle el stock de item como una prop


// componente en si. dentro de la carpeta componentes un archivo nuevo q se llame boton carrito   ....   function BotonCarrito({stockProducto}){ }