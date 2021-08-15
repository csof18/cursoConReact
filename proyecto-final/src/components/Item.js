import { Card, Button } from "react-bootstrap";
import ItemCount from './ItemCount';

export default function Item({
  imagen,
  nombreProducto,
  descripcion,
  precio,
  stock,
}) {
  return (
    <>
      <Button style={{ padding: 0 }} variant="outline">
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
