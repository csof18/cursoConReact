import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import ItemCount from "./ItemCount";
import { datosProducto } from "./datosProducto";
import ItemDetail from "./ItemDetail";
export default function Item(props){
  return(
    <>
      <Link to="/category/:id">
      {/*PASANDO VISUAL */}
      <Button style={{ padding: 0 }} className='btnVerProducto' variant="outline" >
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
           {/*<ItemCount valorStock={props.stock}/>*/}
           {console.log(props.stock, ' CUANTO VALE STOCK EN ITEM')}
          </Card.Body>
          <Button onClick={()=> props.onAdd(props)} variant="light">ver detalle</Button>
          <Link to={`/item/${props.id}`}>Ver detalles</Link>
        </Card>
      </Button>
      </Link>
        
      
    </>
  )
}