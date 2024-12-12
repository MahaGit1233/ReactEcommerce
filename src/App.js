import { Card, Col, Container, Row } from "react-bootstrap";
import Header from "./Components/Header";

function App() {
  const DummyPhotosArr = [
    { title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' },
    { title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' },
    { title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' },
    { title: 'Blue Color', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png' },

  ]
  return (
    <div>
      <Header />
      <Container className="mt-5">
        <Row style={{marginLeft:"20rem"}}>
          {DummyPhotosArr.map((photo) => (
            <Col xs={5}>
              <Card className="mb-5" style={{width:"300px"}}>
                <Card.Body>
                  <Card.Title>{photo.title}</Card.Title>
                  <Card.Img src={photo.imageUrl} style={{marginBottom:"15px"}}/>
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
