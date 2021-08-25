import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import CartWidget from './CartWidget';
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
                        <Link to="/item/:id" className="navegador">{<CartWidget/>}</Link>
                    </Nav>
                    </Navbar.Collapse>
                </>
            </Navbar>
        </>
    )
}