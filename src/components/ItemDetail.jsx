import { Breadcrumb, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useContext, useState } from 'react';
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom"
import { CartContext } from "../context/CartContex";
const ItemDetail = ({ product }) => {
    const { onAdd } = useContext(CartContext);

    const { isInCart } = useContext(CartContext);

    const { removeItemId } = useContext(CartContext);
    const { clear } = useContext(CartContext);





    const { id, title, description, price, sold_quantity, warranty, attributes, docImgUrl, avaible_quantity } = product

    const navigate = useNavigate();


    const [itemsQty, setItemsQty] = useState(0);

    const [viewBottonCart, setViewBottonCart] = useState(true);


    const goto = () => {
        navigate('/cart')
    }




    return (

        <section class="bg-light">
            <Container ṕb={5}>
                <Row>
                    <Col lg={5} mt={5}>
                        <Card mb={3}>

                            <img src={docImgUrl} alt="" />
                        </Card>

                    </Col>
                    <Col lg={7} mt={5}>

                        <Card>
                            <Card.Body>
                                <h2>{title} </h2>
                                <h2 className="product-price display-4">$ {price}</h2>
                                <h6>Descripción</h6>{description}
                                <ItemCount itemsQty={itemsQty} avaible_quantity={avaible_quantity} setItemsQty={setItemsQty} />
                                <Row pb={3}>

                                    <Col className="d-grid">


                                        <Button onClick={() => onAdd(product, itemsQty)} className="btn btn-success btn-lg">Agregar a Carrito</Button>

                                        <Button onClick={() => goto()} className="btn btn-success btn-lg">finalizar Compra</Button>

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