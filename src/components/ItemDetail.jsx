import { Breadcrumb, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useContext, useState } from 'react';
import ItemCount from "./ItemCount";

const ItemDetail = ({ product }) => {



    const { title, description, price, sold_quantity, warranty, attributes, pictures, available_quantity } = product


    const [itemsQty, setItemsQty] = useState(0);

    const setRealStock = (qty) => {
        if (qty <= 10) {
            setItemsQty(qty)
        }
    }

    const removeFromStock = (qty) => {
        if (qty >= 0) {
            setItemsQty(qty)
        }
    }


    return (

        <section class="bg-light">
            <Container ṕb={5}>
                <Row>
                    <Col lg={5} mt={5}>
                        <Card mb={3}>

                            <img src={pictures[0].secure_url} alt="" />
                        </Card>

                    </Col>
                    <Col lg={7} mt={5}>

                        <Card>
                            <Card.Body>
                                <h2>{title} </h2>
                                <h2 className="product-price display-4">$ {price}</h2>
                                <h6>Descripción</h6>{description}
                                <ul className="list-inline pb-3">

                                    <li onClick={() => removeFromStock(itemsQty - 1)} class="list-inline-item"><span class="btn btn-success" id="btn-minus">-</span></li>
                                    <li className="list-inline-item"><span class="badge bg-secondary" id="var-value">{itemsQty}</span></li>
                                    <li onClick={() => setRealStock(itemsQty + 1)} class="list-inline-item"><span class="btn btn-success" id="btn-plus">+</span></li>
                                </ul>
                                <Row pb={3}>
                                    <Col className="d-grid">   
                                    <Button  className="btn btn-success btn-lg">Comprar</Button> 

                                    </Col>
                                    <Col className="d-grid">   
                                    <Button  className="btn btn-success btn-lg">by too cart</Button> 

                                    </Col>
                                </Row>



                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </section>

    )
}

export default ItemDetail;