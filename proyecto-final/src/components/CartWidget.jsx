import { Card } from 'react-bootstrap';
import ItemListContainer from "./ItemListContainer"
//componente bruto
export default function CardProductos(props){
    return(
        <Card style={{ width: '18rem' }}>
            <img src="https://images.pexels.com/photos/5478137/pexels-photo-5478137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350&w=640" alt=""/>
            <p>{`Nombre del producto ${props.nombreProducto}`}</p>
            <ItemListContainer {...props.caracteristicas}/>
        </Card>
        
    )
}