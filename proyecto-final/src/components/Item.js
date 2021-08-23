/*import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from './itemCount';
import ItemDetail from './itemDetail';
export default function Item({
  imagen,
  nombreProducto,
  descripcion,
  precio,
  stock,
  envio,
}) {
  console.log(imagen,nombreProducto,precio,stock)
  const [verDetalleProducto, setVerDetalleProducto] = useState(false);
  const cultarDetalleProducto = ()=>{
    setVerDetalleProducto(false)
  }
  return (
    <>
      {verDetalleProducto && <ItemDetail {...{imagen,nombreProducto,descripcion,precio,stock, envio, cultarDetalleProducto}}/>}
      <Button style={{ padding: 0 }} className='btnVerProducto' variant="outline" onClick={()=>{setVerDetalleProducto(true)}}>
        <Card style={{ width: "18rem", margin: "10px" }} className="colorDeFondoCards">
            <Card.Title>{nombreProducto}</Card.Title>
          <Card.Img
            variant="top"
            src={imagen.src}
            alt="imagen producto"
            style={{ height: imagen.height }}
            />
          <Card.Body>
            <p>{`${precio} $`}</p>
           <ItemCount valorStock={stock}/>
           {console.log(stock, ' CUANTO VALE STOCK EN ITEM')}
          </Card.Body>
        </Card>
      </Button>
    </>
  );
}
//para hacer el boton del carrito para comprar.
//componente con 3 botones en item, y despues pasarle el stock de item como una prop
// componente en si. dentro de la carpeta componentes un archivo nuevo q se llame boton carrito   ....   function BotonCarrito({stockProducto}){ }
*/
import { Link } from "react-router-dom"
import { Card, Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';
export default function Item(props){
  return(
    <>
    {/*verDetalleProducto && <ItemDetail {...{imagen,nombreProducto,descripcion,precio,stock, envio, cultarDetalleProducto}}/>*/}
     {console.log('ver valor de titulo y de id ', props.titulo, props.id)}
      <Link to={`/category/${props.titulo}/${props.id}`}>
      <Button style={{ padding: 0 }} className='btnVerProducto' variant="outline" onClick={() => props.onAdd(props)}>
        <Card style={{ width: "18rem", margin: "10px" }} className="colorDeFondoCards">
            <Card.Title>{props.nombreProducto}</Card.Title>
          <Card.Img
            variant="top"
            src={props.imagen.src}
            alt="imagen producto"
            style={{ height: props.imagen.height }}
            />
          <Card.Body>
            <p>{`${props.precio} $`}</p>
           <ItemCount valorStock={props.stock}/>
           {console.log(props.stock, ' CUANTO VALE STOCK EN ITEM')}
          </Card.Body>
        </Card>
      </Button>
      </Link>
      </>
  )
}