import React, { useState } from "react";
import CartContext from "./cart-context";
import axios from "axios";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    const addItemToCartHandler = (item) => {
        axios.post(`https://crudcrud.com/api/78545503020a4a02a8816fdfa25bcd27/cart${'maharush5409gmailcom'}`, item)
            .then((response) => {
                console.log('Item added:', response);

                const newItem = { ...item, id: response.data._id };

                setItems((prevItems) => {
                    const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);

                    if (existingItemIndex !== -1) {
                        const updatedItems = [...prevItems];
                        updatedItems[existingItemIndex].quantity += item.quantity;
                        return updatedItems;
                    }
                    return [...prevItems, newItem];
                });
                setTotalAmount((prevtotal) => prevtotal + item.price * item.quantity);
            })
            .catch((error) => {
                console.log(error);

            })
    }

    const getItemHandler = () => {
        axios.get('https://crudcrud.com/api/78545503020a4a02a8816fdfa25bcd27/cartmaharush5409gmailcom')
            .then((response) => {
                setItems(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const removeItemFromCartHandler = (id) => {
        axios.delete(`https://crudcrud.com/api/78545503020a4a02a8816fdfa25bcd27/cartmaharush5409gmailcom/${id}`)
            .then(() => {
                setItems((prevItems)=>prevItems.filter((item)=>item.id!==id));
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const clearCartHandler = () => {
        axios.get('https://crudcrud.com/api/78545503020a4a02a8816fdfa25bcd27/cartmaharush5409gmailcom')
            .then(() => {
                console.log('purchase items loading...')
                setItems([]);
                setTotalAmount(0);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    const cartContext = {
        items: items,
        totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        getItem: getItemHandler,
        clearCart: clearCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;