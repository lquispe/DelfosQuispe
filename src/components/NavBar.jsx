import { React, useState } from 'react';
import { Nav, Navbar, Container, NavDropdown, Form, FormControl,  Image } from 'react-bootstrap';
import CartWidget from './CartWidget';
import Signin from './Signin';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../context/CartContex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import logo from '../theme/img/logo.png';


const NavBar = ({ categories, products }) => {

  const [buscar, setBuscar] = useState("")
  const { addSearch } = useContext(CartContext);
  const handleSearch = (e) => {
    let valor = e.target.value.toLowerCase();
    console.log(valor)
    setBuscar(valor)
    addSearch(valor)
  }


  return (
    <>
      <Navbar sticky="top"   bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/"> 
          <Image  src={logo} width="50px" width="50px"/>
            <span >Delfos</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Form className="d-flex">
              <FormControl
                onChange={handleSearch}
                values={buscar}

                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />

            </Form>
            <Nav
              className="my-2 my-lg-0 "

              navbarScroll
            >

              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <NavDropdown title={"Categorias"} id="basic-nav-dropdown" style={{ fontSize: "0.8rem"}} >
                {categories.slice(0, 6).map(category => { return (<NavDropdown.Item key={category.id} as={Link} to={`/category/${category.id}`}>{category.name}</NavDropdown.Item>) })}
                <NavDropdown.Item as={Link} to={`/categories`}>Ver todas</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/">Libros</Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <CartWidget />
              </Nav.Link>
              <Signin />




            </Nav>



          </Navbar.Collapse>
        </Container>
      </Navbar>




    </>

  );
}
export default NavBar;

