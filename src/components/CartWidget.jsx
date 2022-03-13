import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../context/CartContex';



const CartWidget = () => {

    const { items } = useContext(CartContext);
    const renderItem = ()=>{

        if(items.length>0){
            return(

                <>
                                <FontAwesomeIcon icon={faShoppingCart} />

                <div style={{
                    color: "#fff",
                    marginLeft: 6,
                    fontWeight: "bold",
                    position: "absolute",
                    left: 6,
                    top: -2,
                    fontSize: "0.6rem",
                    backgroundColor: "black",
                    paddingTop: "2px",
                    paddingBottom: "2px",
                    paddingLeft: "5px",
                    paddingRight: "4px",
                    borderRadius: "50%"
                }}>{items.length}</div>
</>
            )

        }
        return(<>                <FontAwesomeIcon icon={faShoppingCart} />
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