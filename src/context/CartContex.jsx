
import { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [search,setSearch]= useState("")

    const addSearch=(val)=>{
        setSearch(val)
    }
    const cartItems = () => {
        return items.length
    }


    const onAdd = (producto, qty) => {
        setItems([...items, {qty: qty, ...producto}])      
    }
    /*
    const onAdd = (producto, qty) => {
        


        if (!isInCart(producto.id)) {


            console.log("entró")
            producto.qty = qty
            setItems([...items, producto])
            console.log(items)
        }
    }*/

    const clear = () => {
        setItems([])
    }



    const removeItemId = (id) => {

        if (items.length > 0) {
            let newItems = []

            if (id.length > 0) {
                newItems = items.filter(p => p.id !== id)
                setItems(newItems)
                console.log(newItems)
            } else {

                console.log("no se pudo remover")


            }
        } else {
            console.log("no hay items")
        }



    }

    const isInCart = (id) => {
        let newItems = []

        newItems = items.filter(p => p.id == id)
        console.log(newItems.length)
        if (newItems.length > 0)
            return true
        else{
console.log(items);

            return false
        }

    }

    return (
        <CartContext.Provider value={{ items, cartItems, onAdd, isInCart, removeItemId, clear ,search,addSearch}}>
            {children}
        </CartContext.Provider>
    )

}