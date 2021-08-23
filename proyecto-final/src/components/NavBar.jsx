import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import{NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import { datosProducto } from './DatosProducto';
export default function  NavBar(props){
    return(
        <>
            <Navbar expand="lg" id="App-nav">
                <>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav>
                        <Link to="/">Inicio</Link>
                        <Link to={`/category/${props.titulo}`} >Ramos de Flores</Link>
                        <Link to={`/category/${props.titulo}`} >Pantas</Link>
                        <Link to={`/item/${props.id}`} >Regalos Sorpresa</Link>
                        <Link to={`/item/${props.id}`} >Combos especiales</Link>
                        <NavDropdown title={<CartWidget/>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Especiales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Dia del niño</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cumpleaños</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </>
            </Navbar>
            
        </>
        
    )
}