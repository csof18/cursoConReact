import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { datosProducto } from "./datosProducto";
import ItemDetail from "./ItemDetail";
export default function Item(props){
  return(
    <>
      <Link to="/category/:id">Categoria</Link>
      
      <h4>{props.nombreProducto}</h4>
      <>
        <p>${props.precio}</p>
      </>
      <>
        <p>stock {props.stock}</p>
      </>
      <>
        <p>id {props.id}</p>
      </>
      
       { /*<h2>Estoy en el div de item detail</h2>
        <Button onClick={() => props.onAdd(props)}>agregar {<ItemDetail {...datosItem}/>}</Button>
        <ItemDetail {...props}/>*/}
        <Link to={`/item/${props.id}`}>ver detalles</Link>
      
    </>
  )
}






/*<Link to={`/category/${props.id}`}></Link>*/























/*import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';
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