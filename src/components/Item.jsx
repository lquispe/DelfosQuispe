import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { getProductsFromCategory } from '../services/Producto';
import { useNavigate } from 'react-router-dom';

const Item = ({ product }) => {
    //ver atributos
    const { id, title, docImgUrl, price } = product;

    const navigate = useNavigate();




    const [itemsQty, setItemsQty] = useState(10);

    const { idproduct, setIdProduct } = useState(0);

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
    const goToDetail = () => {

              navigate(`/product/${id}`)

    }




    return (
        <Container>
            <Row>
                <Col md={4}>

                    <Card className="mb4  product-wap rounded-0" style={{ width: '18rem' }}>
                        <Card.Img  style={{ marginTop: 10, height: '110px', with: "100%", objectFit: "contain" }} variant="top" src={docImgUrl} />

                        <Card.Body style={{textAlign:'left'}}>
                           
                            <Card.Text style={{height:40}}>
                                {title}
                            </Card.Text>
                            <Card.Title>${price}</Card.Title>


                        </Card.Body>
                        <Card.Body>
                            <Card.Link className="btn btn-primary" onClick={() => goToDetail({  })}>Ver detalle</Card.Link>

                        </Card.Body>
                    </Card>




                </Col>



            </Row>
        </Container>


    )
}
export default Item;