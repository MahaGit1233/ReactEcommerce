import Header from "./Components/Header/Header";
import Cart from "./Components/Header/Cart";
import CartProvider from "./Components/Store/CartProvider";
import { useState } from "react";
import Home from "./Components/Pages/Home";
import ColorStore from "./Components/Pages/ColorStore";
import About from "./Components/Pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Layout/Footer";


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
      <BrowserRouter>
        <Header onConfirm={cartHandler} />
        {showCart && <Cart photosToCart={DummyPhotosArr} onClose={closeBtnHandler} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ColorStore" element={<ColorStore photos={DummyPhotosArr}/>} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
