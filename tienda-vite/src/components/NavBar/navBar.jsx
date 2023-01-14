import './navBar.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { Input } from '../Input/Input';


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
            <NavLink className={({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary' } to='/'>
              Home
            </NavLink>
            
            <NavDropdown title="MEN" id="navbarScrollingDropdown">
              <NavLink className= 'btn btn-outline-primary' to='/category/t-shirts'>
                T-shirts
              </NavLink>
              <NavDropdown.Divider />
              <NavLink className= 'btn btn-outline-primary' to='/category/caps'>
                Caps
              </NavLink>
            </NavDropdown>
            
            <NavDropdown title="WOMEN" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Sweaters
              </NavDropdown.Item>
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
    <Input />
    <CartWidget />
    </div>
    
  )
}

export default NavBar