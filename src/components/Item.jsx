import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';

const Item = ({ product }) => {
    //ver atributos
    const { title, thumbnail, price } = product

    const [itemsQty, setItemsQty] = useState(10);

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
        <Container>
            <Row>
                <Col md={4}>

                    <Card style={{ width: '18rem' }}>
                        {<Card.Img variant="top" src={thumbnail} />}

                        <Card.Body>
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                Un mundo feliz es un clásico de la literatura de este siglo.
                                Con ironía mordiente, el genial autor inglés plasma una sombría metáfora sobre el futuro
                            </Card.Text>
                            <p className="text-center mb-0">${price}</p>
                            <ul className="list-inline pb-3">

                                <li onClick={() => removeFromStock(itemsQty - 1)} class="list-inline-item"><span class="btn btn-success" id="btn-minus">-</span></li>
                                <li className="list-inline-item"><span class="badge bg-secondary" id="var-value">{itemsQty}</span></li>
                                <li onClick={() => setRealStock(itemsQty + 1)} class="list-inline-item"><span class="btn btn-success" id="btn-plus">+</span></li>
                            </ul>


                        </Card.Body>
                        <Card.Body>
                            <Card.Link className="btn btn-primary" href="#">Ver detalle</Card.Link>
                           
                        </Card.Body>
                    </Card>


                </Col>



            </Row>
        </Container>


    )
}
export default Item