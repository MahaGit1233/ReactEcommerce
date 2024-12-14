import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "./Components/Header";
import Cart from "./Components/Cart";
import { useState } from "react";

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
    <div>
      <Header onConfirm={cartHandler}/>
      {showCart && <Cart photos={DummyPhotosArr} onClose={closeBtnHandler}/>}
      <Container className="mt-5">
        <Row style={{ marginLeft: "20rem" }}>
          {DummyPhotosArr.map((photo) => (
            <Col xs={5}>
              <Card className="mb-5" style={{ width: "300px" }}>
                <Card.Body>
                  <Card.Title>{photo.title}</Card.Title>
                  <Card.Img src={photo.imageUrl} style={{ marginBottom: "15px" }} />
                  <Card.Text>Price: ₹{photo.price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
