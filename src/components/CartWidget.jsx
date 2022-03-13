import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../context/CartContex';



const CartWidget = () => {

    const { items } = useContext(CartContext);
    const renderItem = () => {

        if (items.length > 0) {
            return (

                <>
                    <FontAwesomeIcon icon={faShoppingCart} />

                    <div className="circuloNum"
                        
                    >{items.length}</div>
                </>
            )

        }
        return (<>                <FontAwesomeIcon icon={faShoppingCart} />
        </>)
    }


    return (
        <>
            <div style={{ position: "relative", marginLeft: 6 }}>

                {renderItem()}



            </div>

        </>
    )
}

export default CartWidget