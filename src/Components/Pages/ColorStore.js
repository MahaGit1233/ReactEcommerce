import React from "react";
import Layout from "../Layout/Layout";

const ColorStore = (props) => {
    return (
        <div>
            <Layout photos={props.photos} onOpenCart={props.openCart}/>
        </div>
    )
}

export default ColorStore;