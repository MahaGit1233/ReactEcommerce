import React, { useContext } from "react";
import './Header.css';
import { Button, Nav, Navbar } from "react-bootstrap";
import CartContext from "../Store/cart-context";

const Header = (props) => {
    const cartCtx=useContext(CartContext);

    let quantity=0;
    cartCtx.items.forEach((item)=>quantity=quantity+Number(item.quantity));

    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ fontFamily: "Times New Roman" }}>
                <Nav className="mx-auto">
                    <Navbar.Brand>HOME</Navbar.Brand>
                    <Navbar.Brand>STORE</Navbar.Brand>
                    <Navbar.Brand>ABOUT</Navbar.Brand>
                </Nav>
                <div>
                    <Button onClick={props.onConfirm} style={{marginRight:"1.5rem", backgroundColor:"whitesmoke", color:"black", border:"3px solid lightblue", borderRadius:"10px", paddingLeft:'0', paddingBottom:"0"}}><h4>Cart</h4> <h5 style={{marginLeft:"5rem", marginTop:"-2.3rem", border:"1px solid blue", padding:"3px", paddingLeft:"5px", paddingRight:"5px", borderRadius:"6px"}}>{quantity}</h5></Button>
                </div>
            </Navbar>
            <h4 className="generic">The Generics</h4>
        </div>
    )
}

export default Header;