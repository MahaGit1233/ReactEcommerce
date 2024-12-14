import React from "react";

const CartContext = React.createContext({
    items: [],
    removeItem: (id) => { },
});

export default CartContext;