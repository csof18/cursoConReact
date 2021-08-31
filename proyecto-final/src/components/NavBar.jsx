import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import{NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import Logo from './Logo';
export default function  NavBar(){
    return(
        <>
            <Navbar expand="lg" id="App-nav" >
                <>
                    <Logo/>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav>
                        <Link to="/"  className="navegador">Inicio</Link>
                            <NavDropdown title="Categoria" id="basic-nav-dropdown" style={{padding:"5px"}}>
                                <Link to="/category/ramo-de-flores" className="navegador">
                                    <NavDropdown.Item href="#action/4.1">Ramo de flores</NavDropdown.Item>
                                </Link>
                                <Link to="/category/combo-especial" className="navegador">
                                    <NavDropdown.Item href="#action/4.2">Combo especial</NavDropdown.Item>
                                </Link>
                                <Link to="/category/regalos" className="navegador">
                                    <NavDropdown.Item href="#action/4.3">Regalos</NavDropdown.Item>
                                </Link>
                                <Link to="/category/plantas" className="navegador">
                                    <NavDropdown.Item href="#action/4.4">Plantas</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        <Link to="/item"  className="navegador">Productos</Link>
                        <Link to="/cart"  className="navegador">{<CartWidget/>}</Link>
                    </Nav>
                    </Navbar.Collapse>
                </>
            </Navbar>
        </>
    )
}