import Header from "./Components/Header/Header";
import Cart from "./Components/Header/Cart";
import CartProvider from "./Components/Store/CartProvider";
import { useCallback, useContext, useState } from "react";
import Home from "./Components/Pages/Home";
import ColorStore from "./Components/Pages/ColorStore";
import About from "./Components/Pages/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Contact from "./Components/Pages/Contact";
import Products from "./Components/Pages/Products";
import ProductDetail from "./Components/Pages/ProductDetail";
import Login from "./Components/Pages/Login";
import AuthContext from "./Components/Store/auth-context";
import { Redirect } from "react-router-dom";
import axios from "axios";
import CartContext from "./Components/Store/cart-context";


const DummyPhotosArr = [
  { id: 1, title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' },
  { id: 2, title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' },
  { id: 3, title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' },
  { id: 4, title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' },
];

function App() {
  // const [showCart, setShowCart] = useState(false);

  // // const cartCtx = useContext(CartContext);
  const authCtx = useContext(AuthContext);

  // // // photosToCart={DummyPhotosArr}

  // // const cartHandler = () => {
  // //   cartCtx.getItem();
  // //   setShowCart(true);
  // // }

  // // const closeBtnHandler = () => {
  // //   setShowCart(false);
  // // }

  const saveDataHandler = useCallback(async (enteredData) => {
    const response = await fetch("https://react-api-73b69-default-rtdb.firebaseio.com/ecommerce.json", {
      method: "POST",
      body: JSON.stringify(enteredData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ColorStore" render={() => <ColorStore photos={DummyPhotosArr}/>} />
          <Route path="/About" component={About} />
          <Route path="/Login">{!authCtx.isLoggedIn ? <Login /> : <Redirect to='/Products' />}</Route>
          <Route path="/Products" exact >{authCtx.isLoggedIn ? <Products /> : <Redirect to='/Login' />}</Route>
          <Route path="/Products/:productId" component={ProductDetail} />
          <Route path="/Contact" render={() => <Contact onSaveData={saveDataHandler} />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
