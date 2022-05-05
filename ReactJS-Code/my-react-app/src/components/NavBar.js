import logo from '../logo.svg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget.js'

function NavBar() {
  return (
    <div className="Navbar">
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px" />{' '}
          ArtBoard
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Estilos">
              <NavDropdown.Item href="#products/Digital">Digital</NavDropdown.Item>
              <NavDropdown.Item href="#products/Clasico">Clasico</NavDropdown.Item>
              <NavDropdown.Item href="#products/Contemporaneo">Contemporaneo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/Graffiti">Graffiti</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#about-us">Sobre Nosotros</Nav.Link>
            <Nav.Link href="#contact-us">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
            <div className="justify-content-end">
            <Nav.Link href="#"><CartWidget /></Nav.Link>
            </div>
      </Navbar>
    </div>
  );
}

export default NavBar;
