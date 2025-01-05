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
    const products=[
        {id: 'sweatshirt', title:'SweatShirt', mainImg:'\SweatShirts\main.avif', front:'\SweatShirts\front.avif', price:1500},
        {id: 'trenchcoat', title:'TrenchCoat', mainImg:'\TrenchCoats\main.avif', front:'\TrenchCoats\front.avif', price:1250},
        {id: 'sweater', title:'Sweater', mainImg:'\Sweaters\main.avif', front:'\Sweaters\front.avif', price:800},
        {id: 'skirt', title:'Skirt', mainImg:'\Skirts\main.avif', front:'\Skirts\front.avif', price:1000},
        {id: 'trouser', title:'Trousers', mainImg:'\Trousers\main.avif', front:'\Trousers\front.avif', price:900},
        {id: 'tshirt', title:'Tshirt', mainImg:'\Tshirts\main.avif', front:'\Tshirts\front.webp', price:1000},
    ]

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