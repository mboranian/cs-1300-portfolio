import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css'
import '../pages/Home'

function Navigation() {

  const handleNavClick = (event) => {
    event.preventDefault(); // Prevent the default anchor behavior
    const targetId = event.target.getAttribute("href").slice(1); // Remove the '#' from href
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme='dark' fixed='top'>
      <Container>
        <Navbar.Brand href="#home" onClick={handleNavClick}>Matthew Boranian</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='#Projects' onClick={handleNavClick}>Projects</Nav.Link>
            <Nav.Link href='#About' onClick={handleNavClick}>About</Nav.Link>
            <Nav.Link href='#Contact' onClick={handleNavClick}>Contact</Nav.Link>
            {/* <NavDropdown title="Case Studies" id="basic-nav-dropdown">
              <NavDropdown.Item href='#responsiveredesign'>Responsive Redesign</NavDropdown.Item>
              <NavDropdown.Item href="#development">Development</NavDropdown.Item>
              <NavDropdown.Item href="#portfolio">Third Thing</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;