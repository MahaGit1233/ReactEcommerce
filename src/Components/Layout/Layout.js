import React, { useContext, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import CartContext from "../Store/cart-context";

const Layout = (props) => {
    const [quantity,setQuantity]=useState(1);

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (photo) => {
        cartCtx.addItem({
            id: photo.id,
            title: photo.title,
            price: photo.price,
            imageUrl: photo.imageUrl,
            quantity:quantity,
        });
    };

    return (
        <Container className="mt-5">
            <Row style={{ marginLeft: "20rem" }}>
                {props.photos.map((photo) => (
                    <Col xs={5}>
                        <Card className="mb-5" style={{ width: "300px" }}>
                            <Card.Body>
                                <Card.Title>{photo.title}</Card.Title>
                                <Card.Img src={photo.imageUrl} style={{ marginBottom: "15px" }} />
                                <Card.Text>Price: ₹{photo.price}<Button style={{ marginLeft: "4rem" }} onClick={()=>addToCartHandler(photo)}>ADD TO CART</Button></Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Layout;