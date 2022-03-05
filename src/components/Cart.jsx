import { Container, Card, Row, Col, Button } from "react-bootstrap"
import { CartContext } from "../context/CartContex";
import { useContext, useState,useEffect } from 'react';



const Cart = () => {

    const { removeItemId } = useContext(CartContext);
    const { clear } = useContext(CartContext);
    const { items } = useContext(CartContext);
    const { isInCart } = useContext(CartContext);
    const [total, setTotal]= useState(0);

    useEffect(() => {
        
        let acum=0

        for (var i = 0; i < items.length; i++) {
            console.log(items[i].price)
             acum=acum + items[i].price;
        }
        setTotal(acum);
    }, []);


    

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
                                                <img style={{ width: '3.5rem' }} className="img-fluid" src={product.thumbnail} />
                                            </Col>


                                            <Col>
                                                <Row>
                                                    {product.title}
                                                </Row>
                                            </Col>
                                            <Col style={{ padding: '0 1vh' }}>
                                                <a href="#">-</a><a href="#" class="border">1</a><a href="#">+</a>
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
                                        {total}
                                    </Col>


                                </Row>
                                <form>
                                    <p>SHIPPING</p> <select>
                                        <option class="text-muted">Standard-Delivery- &euro; 5.00</option>
                                    </select>
                                    <p>GIVE CODE</p> <input id="code" placeholder="Enter your code" />
                                </form>
                                <Row style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                                    <Col> Total
                                    </Col>
                                    <Col className="text-right">
                                        {total}
                                        </Col>
                                    <Button className="btn">CHECKOUT</Button>


                                </Row>
                            </Col>




                        </Row>

                    </Card>
                </Container>

            </section>

        </>
    )

}
export default Cart