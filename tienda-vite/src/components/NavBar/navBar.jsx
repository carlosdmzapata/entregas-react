import './navBar.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
    return(
        <div className='sectionBar'>
            <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">TRIBE STORE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="MEN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">T-shirts</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Caps
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Shipping Cart
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="WOMAN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sweaters</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Shoes
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Shipping Cart
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Nav.Link href="#action1">Cart</Nav.Link>
        </div>
    )
}

export default NavBar