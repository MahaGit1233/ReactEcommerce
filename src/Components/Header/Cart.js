import React, { useContext } from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
import './Cart.css';
import CartContext from "../Store/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const deleteBtnHandler = (id) => {
        cartCtx.removeItem(id);
    }

    const cartItems = cartCtx.items.map((item, index) => (
        <Row key={index}>
            <Col style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "-1rem" }}><Image src={item.imageUrl} className="img" /> <span style={{ paddingTop: "10px", marginLeft: "5rem", marginTop: "-3.5rem" }}>{item.title}</span></Col>
            <Col style={{ marginTop: "2.5rem" }}><h5>{item.price}</h5></Col>
            <Col style={{ marginTop: "2.5rem", }}>
                <input type="number" style={{ width: '40px', marginLeft: '-3rem', marginRight: "1rem" }} value={item.quantity} />
                <Button onClick={() => deleteBtnHandler(item.id)} style={{ backgroundColor: "GrayText", borderColor: "white" }}>REMOVE</Button>
            </Col>
        </Row>
    ));

    return (
        <div className="backdrop">
            <div>
                <h2 className="cart">CART</h2>
                <Button className="button" onClick={props.onClose} style={{ backgroundColor: "white", padding: "2%", paddingTop: "1%", paddingBottom: "1%", color: "black" }}>X</Button>
            </div>
            <Container className="cont">
                <Row>
                    <Col style={{ textDecoration: "underline" }}>ITEM</Col>
                    <Col style={{ textDecoration: "underline" }}>PRICE</Col>
                    <Col style={{ textDecoration: "underline" }}>QUANTITY</Col>
                </Row>
                {cartItems}
            </Container>
            <div className="total">
                <h3>Total ₹0</h3>
            </div>
            <Button className="purchase" style={{ backgroundColor: "GrayText", borderColor: "white" }}>PURCHASE</Button>
        </div>
    )
}

export default Cart;