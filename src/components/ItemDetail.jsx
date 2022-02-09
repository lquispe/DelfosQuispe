import { Breadcrumb, Button, Card, Col, Container, Row } from "react-bootstrap";
import { useContext, useState } from 'react';
import ItemCount from "./ItemCount";
import {useNavigate} from "react-router-dom"
const ItemDetail = ({ product }) => {



    const { title, description, price, sold_quantity, warranty, attributes, pictures, available_quantity } = product

    const navigate = useNavigate();

    const [itemsQty, setItemsQty] = useState(0);

    const [viewBottonCart,setViewBottonCart]= useState(true);

    const onAdd=(product, itemsQty)=>{
        setViewBottonCart(false)

    }
    const goto=()=>{
        navigate('/cart')
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
                                <ItemCount itemsQty={itemsQty} available_quantity={available_quantity} setItemsQty={setItemsQty} />                               
                                <Row pb={3}>
                                    
                                    <Col className="d-grid"> 
                                    {viewBottonCart ?              
  
                                    <Button onClick={()=>onAdd(product,itemsQty)} className="btn btn-success btn-lg">by too cart</Button> 
                                    :
                                    <Button onClick={()=>goto()} className="btn btn-success btn-lg">finalizar</Button> 
}
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