import React from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button ,Image} from 'react-bootstrap';
import CartWidget from './CartWidget';
import Signin from './Signin';

import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import { UsrContext } from '../context/UsrContext';
import { signInWithPopup } from 'firebase/auth';
import {auth,googleProvider} from '../firebase'; 



const NavBar = ({categories}) => {
  const { onAdd } = useContext(UsrContext);
  const { singInWithGoogle } = useContext(UsrContext);


  

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
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
                
              <Nav.Link  as={Link} to="/">Inicio</Nav.Link>
              <NavDropdown title={"Categorias"} id="basic-nav-dropdown">                      
                        {categories.slice(0,6).map(category => { return (<NavDropdown.Item key={category.id} as={Link} to={`/category/${category.id}`}>{category.name}</NavDropdown.Item>)})}
                        <NavDropdown.Item as={Link} to={`/categories`}>Ver todas</NavDropdown.Item>                          
                    </NavDropdown>     
              <Nav.Link as={Link} to="/">Libros</Nav.Link>
              <Nav.Link href="#action4">
                <CartWidget/>
              </Nav.Link>
              <Signin/>

           
                
              
              </Nav>



          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default NavBar;

