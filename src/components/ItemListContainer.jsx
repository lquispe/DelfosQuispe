import React from 'react';
import ItemCount from './ItemCount';
import ItemList from "./ItemList";
import { Container, Row } from "react-bootstrap";


/*
const ItemListContainer =({greeting})=>{
 return(
     <>
     <span className="text-titulo">{greeting}</span>
     <ItemCount></ItemCount>
     </>
 );
}*/

const ItemListContainer = ({ products }) => {
    return (
        <Container>
            <Row xs={2} md={4} className="g-4 mt-1">
                <ItemList products={products} />
            </Row>
        </Container>
    )
}

export default ItemListContainer