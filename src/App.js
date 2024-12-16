import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "./Components/Header/Header";
import Cart from "./Components/Header/Cart";
import CartProvider from "./Components/Store/CartProvider";
import { useState } from "react";
import Layout from "./Components/Layout/Layout";

const DummyPhotosArr = [
  { id: 1, title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' },
  { id: 2, title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' },
  { id: 3, title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' },
  { id: 4, title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' },
];

function App() {
  const [showCart, setShowCart] = useState(false);

  const cartHandler = () => {
    setShowCart(true);
  }

  const closeBtnHandler = () => {
    setShowCart(false);
  }

  return (
    <CartProvider>
      <Header onConfirm={cartHandler}/>
      {showCart && <Cart photosToCart={DummyPhotosArr} onClose={closeBtnHandler}/>}
      <Layout photos={DummyPhotosArr}/>
    </CartProvider>
  );
}

export default App;
