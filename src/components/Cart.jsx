import { Container, Card, Row, Col, Button } from "react-bootstrap"
import { CartContext } from "../context/CartContex";
import { useContext, useState, useEffect } from 'react';
import CartEmpty from '../components/CartEmptyState';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {faTrash} from '@fortawesome/free-solid-svg-icons';








const Cart = () => {

    const { removeItemId } = useContext(CartContext);
    const { clear } = useContext(CartContext);
    const { items } = useContext(CartContext);
    const { isInCart } = useContext(CartContext);
    const [total, setTotal] = useState(0);


    const [success, setSuccess] = useState(false);
    const [orderId, setOrderId] = useState("");
    const [isCartEmpty, setIsCartEmpty] = useState(true)


    const checkout = () => {
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
            name: "Jesus Nieves",
            phone: "2932389283",
            email: "yo@nievesjesus.com"
        }

        const totalGlobal = items.reduce((a, b) => {
            return (a.qty * a.price) + (b.qty * b.price)
        }, 1)
        console.log("este es el valor a grabar" + totalGlobal)

        const order = { buyer: buyer, items: itemsToBuy, total: totalGlobal }

        addDoc(collection(db, "orders"), order)
            .then(doc => {
                setOrderId(doc.id)
                setSuccess(true)
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


                                    <Row className="border-top border-bottom">
                                        {items.map((product) => (
                                            <Row key={product.id}  className="main align-items-center">

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
                                                        <Nav.Link as={Link} to="/" onClick={() => removeItemId(product.id)}>
                                                        <FontAwesomeIcon icon={faTrash} />
                                                        </Nav.Link>
                                                    </Nav>
                                                  
                                                </Col>



                                            </Row>

                                        ))}
                                    </Row>
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
                                        <Button variant="success" onClick={checkout}>Finalizar compra</Button>


                                    </Row>
                                </Col>




                            </Row>

                        </Card>
                    </Container>

                </section>

            </>
        )

    }
}
export default Cart