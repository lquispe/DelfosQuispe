import React from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import CartWidget from './CartWidget';

import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img
              src={require('../theme/img/logo.png')}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="logo"
            />
            <span className="fs-4 text">Delfos</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Nav
              className="my-2 my-lg-0 "

              navbarScroll
            >
              <Nav.Link href="#action1">Inicio</Nav.Link>
              <Nav.Link href="#action2">Libros</Nav.Link>
              <Nav.Link href="#action4">
                <CartWidget/>
              </Nav.Link>
              <span className="cirtextnumber">0</span>

              <Nav.Link href="#action2">Login</Nav.Link>
              
            </Nav>



          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;

