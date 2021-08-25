import { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemDetail from './ItemDetail';
export default function Item({
  imagen,
  nombreProducto,
  descripcion,
  precio,
  stock,
  envio,
}) {
  const [verDetalleProducto, setVerDetalleProducto] = useState(false);
  const cultarDetalleProducto = ()=>{
    setVerDetalleProducto(false)
  }
  return (
    <>
      {verDetalleProducto && <ItemDetail {...{imagen,nombreProducto,descripcion,precio,stock, envio, cultarDetalleProducto}}/>}
      <Link to="/category/:id"></Link>
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
          </Card.Body>
        </Card>
      </Button>
    </>
  );
}