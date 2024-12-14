import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const removeItemFromCartHandler = (id) => {
        setItems((prevItems) => {
            return prevItems.filter(item => item.id !== id);
        })
    };

    const cartContext = {
        items: items,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;