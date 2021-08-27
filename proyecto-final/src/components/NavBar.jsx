import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import{NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
export default function  NavBar(){
    return(
        <>
            <Navbar expand="lg" id="App-nav">
                <>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav>
                        <Link to="/"  className="navegador">Inicio</Link>
                        <Link to="/category/:id"  className="navegador">Categoria</Link>
                        <Link to="/item/:id"  className="navegador">Productos</Link>
                        <Link to="/cart"  className="navegador">Cart</Link>
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