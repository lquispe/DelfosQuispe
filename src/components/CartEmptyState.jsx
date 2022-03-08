import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';


const CartEmpty = () => {
    
    return (
        <Container>
            <Row>
                <Col className="mt-5" style={{ textAlign: "center" }} md={{ span: 6, offset: 3}}>
                    <h4 style={{ marginTop: "10%" }}>Aún no agregas productos a tu carrito de compras</h4>
                                    
                </Col>
            </Row>
        </Container>
    )
}

export default CartEmpty;