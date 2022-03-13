import { Container, Card, Row, Col, Button, Form, hr ,Modal} from "react-bootstrap"
import { CartContext } from "../context/CartContex";
import { useContext, useState, useEffect } from 'react';
import CartEmpty from '../components/CartEmptyState';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom"

const Cart = () => {

    const { removeItemId } = useContext(CartContext);
    const { items } = useContext(CartContext);
    const { clear } = useContext(CartContext);

    const [orderId, setOrderId] = useState("");
    const [total, setTotal] = useState(0);
    const [succes, setSuccess] = useState(false)

    const [isCartEmpty, setIsCartEmpty] = useState(true)
    const [isbuyer, setIsBuyer] = useState()
    const [validated, setValidated] = useState(false);
    const [show, setShow] = useState(false);

    const navigate = useNavigate();


    const checkout = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        event.preventDefault();
        const name = event.target.elements.name.value;
        const phone = event.target.elements.phone.value;
        const email = event.target.elements.email.value;

        console.log(items)
        if (items.length === 0) {
            alert("no tienes itemes en el carrito")
            return
        }
        const itemsToBuy = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                price: item.price,
                qty: item.qty
            }
        })

        const buyer = {
            name: name,
            phone: phone,
            email: email
        }


        const totalProd = items.map(x => x.price * x.qty)
        const totalGlobal = suma(totalProd)
        console.log("este es el valor a grabar" + totalGlobal)

        /*
        const totalGlobal = items.reduce((a, b) => {
            return (a.qty * a.price) + (b.qty * b.price)
        })*/





        const order = { buyer: buyer, items: itemsToBuy, total: totalGlobal }

        addDoc(collection(db, "orders"), order)
            .then(doc => {
                setOrderId(doc.id)
                setSuccess(true)
                handleShow()
                console.log("esto es muy sencillo, el id de mi orden creada es", doc.id)
            })
            .catch(err => {
                console.log("algo muy malo paso", err)
            })

    }
    useEffect(() => {
        if (items.length > 0) {

            const totalProd = items.map(x => x.price * x.qty)
            const totalGlobal = suma(totalProd)
            /*
            const totalGlobal = items.reduce((a, b) => {
                return (a.qty * a.price) + (b.qty * b.price)
            })*/

            console.log("este es el total" + totalGlobal);
            setTotal(totalGlobal)
            setIsCartEmpty(false)
        }
    }, [items]);


  const handleClose = () =>{ 
      setShow(false);
      clear()
      navigate("/")

  };
  const handleShow = () => setShow(true);
 
    const buyer = () => {
        if (isbuyer) {
            return (
                <Container>
                    <Form noValidate validated={validated} onSubmit={checkout}>
                        <Form.Group className="md-4" controlId="name">
                            <Form.Label>Nombre </Form.Label>
                            <Form.Control type="text" required placeholder="Ingrese su nombre" />
                            <Form.Control.Feedback type="invalid">
                               Por favor ingrese su nombre
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="phone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="number" required placeholder="Phone" />
                            <Form.Control.Feedback type="invalid">
                               Por favor ingrese un teléfono
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" required placeholder="email" />
                            <Form.Control.Feedback type="invalid">
                               Por favor ingrese un email
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button variant="success" type="succes">
                            Checkout
                        </Button>
                    </Form>


                </Container>
            )


        }
    }

    const suma = (ns) => {
        let acumulado = 0
        let i = 0
        for (i = 0; i < ns.length; i++) {
            acumulado += ns[i];
        }
        return acumulado;
    }
    if (isCartEmpty) {
        return <CartEmpty />
    } else {


        return (
            <>
                <section >
                    <Container>
                        <Card>

                            <Row>
                                <Col md={8} className="cart" style={{ padding: "0 1vh" }}>
                                    <div className="title">
                                        <Row>
                                            <Col style={{ padding: "0 1vh" }}>

                                                <h2>Carrito de compras </h2>


                                            </Col>
                                            <Col className="col align-self-center text-right text-muted">
                                                {items.length} Libros en tu carrito
                                            </Col>
                                        </Row>
                                    </div>

                                    <hr className="my-4" />
                                    <Row >
                                        {items.map((product) => (
                                            <Row key={product.id} className="main align-items-center">

                                                <Col className="col-2">
                                                    <img style={{ width: '3.5rem' }} className="img-fluid" src={product.docImgUrl} />
                                                </Col>


                                                <Col>
                                                    <Row>
                                                        {product.title}
                                                    </Row>
                                                </Col>
                                                <Col style={{ padding: '0 1vh' }}>
                                                    {product.qty}
                                                </Col>
                                                <Col>
                                                    $ {product.price}
                                                </Col>
                                                <Col>
                                                    <Nav>
                                                        <Nav.Link as={Link} to="#" onClick={() => removeItemId(product.id)} className="navlink">
                                                            <FontAwesomeIcon icon={faTrash} />
                                                        </Nav.Link>
                                                    </Nav>

                                                </Col>



                                            </Row>



                                        ))}
                                    </Row>
                                    <hr className="my-4" />
                                    <div class="pt-5">
                                        <h6 class="mb-0">
                                            <Nav>
                                                <Nav.Link as={Link} to="/" className="navlink">
                                                    <FontAwesomeIcon icon={faLongArrowAltLeft} />Volver a comprar
                                                </Nav.Link>
                                            </Nav></h6>
                                    </div>
                                </Col>



                                <Col md={4} className="summary">

                                    <div >
                                        <h5 ><b>Orden total</b></h5>
                                    </div>
                                    <Row>
                                        <Col style={{ paddingLeft: 0 }}>
                                            Libros
                                        </Col>
                                        <Col className="text-right">
                                            {items.length} Libros en tu carrito
                                        </Col>


                                    </Row>


                                    <Row style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                                        <Col> Total
                                        </Col>
                                        <Col className="text-right">
                                            ${total}
                                        </Col>
                                        <Button variant="success" onClick={() => { setIsBuyer(true) }}>Finalizar compra</Button>


                                    </Row>
                                </Col>




                            </Row>

                        </Card>
                    </Container>
                    {buyer()}

                </section>
                <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Felicitaciones se ha realizado con éxito la compra</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         Su orden de compra es {orderId}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Aceptar
          </Button>
          
        </Modal.Footer>
      </Modal>


            </>
        )

    }
}
export default Cart