import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';



const ItemCount = ({itemsQty, available_quantity,setItemsQty}) => {


    const setRealStock = (qty) => {
        if (qty <=available_quantity ) {
            setItemsQty(qty)
        }
    }

    const removeFromStock = (qty) => {
        if (qty >= 0) {
            setItemsQty(qty)
        }
    }
    return (
       
                            <ul class="list-inline pb-3">

                                <li onClick={() => removeFromStock(itemsQty - 1)} class="list-inline-item"><span class="btn btn-success" id="btn-minus">-</span></li>
                                <li class="list-inline-item"><span class="badge bg-secondary" id="var-value">{itemsQty}</span></li>
                                <li onClick={() => setRealStock(itemsQty + 1)} class="list-inline-item"><span class="btn btn-success" id="btn-plus">+</span></li>
                            </ul>
                       


    )
}
export default ItemCount;