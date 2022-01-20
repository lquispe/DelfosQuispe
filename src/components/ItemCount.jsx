import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';



const ItemCount = () => {

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
                        {/*<Card.Img variant="top" src="holder.js/100px180" />*/}
                        <Card.Body>
                            <Card.Title>Un Mundo Feliz</Card.Title>
                            <Card.Text>
                                Un mundo feliz es un clásico de la literatura de este siglo.
                                Con ironía mordiente, el genial autor inglés plasma una sombría metáfora sobre el futuro
                            </Card.Text>
                            <ul class="list-inline pb-3">

                                <li onClick={() => removeFromStock(itemsQty - 1)} class="list-inline-item"><span class="btn btn-success" id="btn-minus">-</span></li>
                                <li class="list-inline-item"><span class="badge bg-secondary" id="var-value">{itemsQty}</span></li>
                                <li onClick={() => setRealStock(itemsQty + 1)} class="list-inline-item"><span class="btn btn-success" id="btn-plus">+</span></li>
                            </ul>
                        </Card.Body>
                    </Card>


                </Col>



            </Row>
        </Container>


    )
}
export default ItemCount;