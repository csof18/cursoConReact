import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
export default function Item(props){
  return(
    <>
      <Link to="/item">
        <Link to={`/category/${props.titulo}`}></Link>
        <Button style={{ padding: 0 }} variant="outline" >
          <Card style={{ width: "18rem", margin: "10px" }} className="colorDeFondoCards">
              <Card.Title>{props.nombreProducto}</Card.Title>
            <Card.Img
              variant="top"
              src={props.src}
              alt="imagen producto"
              style={{ height:"300px" }}
              />
            <Card.Body>
              <p>{`${props.precio} $`}</p>
            {/*<ItemCount valorStock={props.stock}/>*/}
            </Card.Body>
            <Link to={`/item/${props.id}`} variant="light" className="btnVerDetalles">Ver detalles</Link>
          </Card>
        </Button>
      </Link>
    </>
  )
}