import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import{NavDropdown} from 'react-bootstrap';
import CartWidget from './CartWidget';
export default function  NavBar(){
    return(
        <>
            <Navbar expand="lg" id="App-nav">
                <>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav>
                        <Nav.Link href="#home">Ramos de Flores</Nav.Link>
                        <Nav.Link href="#link">Pantas</Nav.Link>
                        <Nav.Link href="#link">Regalos Sorpresa</Nav.Link>
                        <Nav.Link href="#link">Combos especiales</Nav.Link>
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