import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';



const ItemCount = ({itemsQty, avaible_quantity,setItemsQty}) => {


    const setRealStock = (qty) => {
        if (qty <=avaible_quantity ) {
            setItemsQty(qty)

        }
    }

    const removeFromStock = (qty) => {
        if (qty >= 0) {
            setItemsQty(qty)
        }
    }
    return (
       
                            <ul className="list-inline pb-3">

                                <li onClick={() => removeFromStock(itemsQty - 1)} className="list-inline-item"><span className="btn btn-success" id="btn-minus">-</span></li>
                                <li className="list-inline-item"><span className="badge bg-secondary" id="var-value">{itemsQty}</span></li>
                                <li onClick={() => setRealStock(itemsQty + 1)} className="list-inline-item"><span className="btn btn-success" id="btn-plus">+</span></li>
                            </ul>
                       


    )
}
export default ItemCount;