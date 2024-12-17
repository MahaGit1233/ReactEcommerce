import React, { useContext } from "react";
import './Header.css';
import { Button, Nav, Navbar } from "react-bootstrap";
import CartContext from "../Store/cart-context";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    const cartCtx=useContext(CartContext);

    let quantity=0;
    cartCtx.items.forEach((item)=>quantity=quantity+Number(item.quantity));

    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ fontFamily: "Times New Roman", position:"fixed", top:"0", left:"0", width:"100%", zIndex:"1000" }}>
                <Nav className="mx-auto">
                    <NavLink to="/" className="nav-link" style={{ color: "white", marginRight: "1.5rem" }}>HOME</NavLink>
                    <NavLink to="/ColorStore" className="nav-link" style={{ color: "white", marginRight: "1.5rem" }}>STORE</NavLink>
                    <NavLink to="/about" className="nav-link" style={{ color: "white", marginRight: "1.5rem" }}>ABOUT</NavLink>
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