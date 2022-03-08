import { Container, Card, Row, Col, Button } from "react-bootstrap"
import { CartContext } from "../context/CartContex";
import { useContext, useState, useEffect } from 'react';
import CartEmpty from '../components/CartEmptyState';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';







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
        })

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
            const totalGlobal = items.reduce((a, b) => {
                return (a.qty * a.price) + (b.qty * b.price)
            })
            setTotal(totalGlobal)
            setIsCartEmpty(false)
        }

    }, [items]);


if (isCartEmpty) {
    return <CartEmpty />
} else {


    return (
        <>
            <section>
                <Container>
                    <Card>

                        <Row>
                            <Col md={8} className="cart">
                                <Row>
                                    <Col>

                                        <h2>Shopping cart </h2>


                                    </Col>
                                    <Col className="col align-self-center text-right text-muted">
                                        {items.length} items
                                    </Col>
                                </Row>


                                <Row className="border-top border-bottom">
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
                                                <a href="#">-</a><a href="#" class="border">{product.qty}</a><a href="#">+</a>
                                            </Col>
                                            <Col>
                                                $ {product.price}
                                            </Col>
                                            <Col>
                                                <Button onClick={() => removeItemId(product.id)} className="btn btn-success btn-lg"></Button>
                                            </Col>



                                        </Row>

                                    ))}
                                </Row>
                            </Col>



                            <Col md={4} className="summary">
                                <div>
                                    <h5><b>Summary</b></h5>
                                </div>
                                <Row>
                                    <Col style={{ paddingLeft: 0 }}>
                                        ITEMS
                                    </Col>
                                    <Col className="text-right">
                                    </Col>


                                </Row>

                                <Row style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                                    <Col> Total
                                    </Col>
                                    <Col className="text-right">
                                    </Col>
                                    <Button className="btn" onClick={checkout}>CHECKOUT</Button>


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