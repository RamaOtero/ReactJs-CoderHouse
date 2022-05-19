import logo from './Assets/hoodie.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget.js';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="Navbar">
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} width="40px" height="40px" alt='Logo' />{' '}
              Hoodies
            </Navbar.Brand>
          </Link>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Colores">
              <Link to='/color/negro'>
              <NavDropdown.Item href="/color/negro">Negro</NavDropdown.Item>
              </Link>
              <Link to='/color/gris'>
              <NavDropdown.Item href="/color/Gris">Gris</NavDropdown.Item>
              </Link>
              <Link to='/color/rosa'>
              <NavDropdown.Item href="/color/rosa">Rosa</NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Overzise</NavDropdown.Item>
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
