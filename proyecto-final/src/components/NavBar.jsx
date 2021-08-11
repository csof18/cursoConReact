import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import{NavDropdown} from 'react-bootstrap';

function  NavBar(){
    return(
        <>
            <Navbar expand="lg" className="App-nav">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="#home">Flores</Nav.Link>
                        <Nav.Link href="#link">Desayunos</Nav.Link>
                        <Nav.Link href="#link">Globos</Nav.Link>
                        <NavDropdown title="Combos especiales" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Especiales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Dia del niño</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cumpleaños</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<i class="fas fa-shopping-cart"></i>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Especiales</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Dia del niño</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Cumpleaños</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar