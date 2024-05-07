import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme='dark' fixed='top'>
      <Container>
        <Navbar.Brand href="#home">Matthew Boranian</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#About">About</Nav.Link>
            <NavDropdown title="Case Studies" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Redesign">Responsive Redesign</NavDropdown.Item>
              <NavDropdown.Item href="#Development">Development</NavDropdown.Item>
              <NavDropdown.Item href="#Third-Thing">Third Thing</NavDropdown.Item>
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;