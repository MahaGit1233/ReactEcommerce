import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const addItemToCartHandler = (item) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);

            if (existingItemIndex !== -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += item.quantity;
                return updatedItems;
            }
            return [...prevItems, item];
        });
    }

    const removeItemFromCartHandler = (id) => {
        setItems((prevItems) => {
            return prevItems.filter(item => item.id !== id);
        })
    };

    const cartContext = {
        items: items,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;