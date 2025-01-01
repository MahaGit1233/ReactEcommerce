import React from "react";
import { useParams } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import SweatShirt from "./SweatShirt";
import TrenchCoat from "./TrenchCoat";
import Sweater from "./Sweater";
import Skirt from "./Skirt";
import Trousers from "./Trousers";
import TShirt from "./Tshirt";

const ProductDetail = () => {
    const params=useParams();

    return (
        <div>
            <h1 style={{textAlign:"center", fontFamily:"HP Simplified Light", fontWeight:"bolder", marginBottom:"1.5rem"}}>ProductDetails</h1>
            <Switch>
                <Route path="/Products/sweatshirt">
                    <SweatShirt />
                </Route>
                <Route path="/Products/trenchcoat">
                    <TrenchCoat />
                </Route>
                <Route path="/Products/sweater">
                    <Sweater />
                </Route>
                <Route path="/Products/skirt">
                    <Skirt />
                </Route>
                <Route path="/Products/trouser">
                    <Trousers />
                </Route>
                <Route path="/Products/tshirt">
                    <TShirt />
                </Route>
            </Switch>
        </div>
    )
};

export default ProductDetail;