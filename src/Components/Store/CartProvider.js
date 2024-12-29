import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const [totalAmount,setTotalAmount]=useState(0);

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
        setTotalAmount((prevtotal)=>prevtotal+item.price*item.quantity);
    }

    const removeItemFromCartHandler = (id) => {
        setItems((prevItems) => {
            const existingItemIndex = prevItems.findIndex((item) => item.id === id);
            const existingItem = prevItems[existingItemIndex];
            
            if (!existingItem) {
                return prevItems;
            }
    
            let updatedItems;
            if (existingItem.quantity === 1) {
                updatedItems = prevItems.filter((item) => item.id !== id);
            } else {
                const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
                updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = updatedItem;
            }
    
            return updatedItems;
        });
        
        setTotalAmount((prevtotal)=>{
            const existingItem=items.find((item)=>item.id===id);
            if (existingItem){
                return prevtotal-existingItem.price;
            }
            return prevtotal;
        })
    };

    const cartContext = {
        items: items,
        totalAmount:totalAmount,
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