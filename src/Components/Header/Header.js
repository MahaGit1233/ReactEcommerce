import React, { useContext } from "react";
import './Header.css';
import { Button, Nav, Navbar } from "react-bootstrap";
import CartContext from "../Store/cart-context";
import { NavLink, useLocation } from "react-router-dom";

const Header = (props) => {
    const cartCtx = useContext(CartContext);
    const location = useLocation();

    let quantity = 0;
    cartCtx.items.forEach((item) => quantity = quantity + Number(item.quantity));

    if (location.pathname === '/') {
        return (
            <div>
                <Navbar className="links" bg="dark" variant="dark" style={{ fontFamily: "Times New Roman", position: "fixed", top: "0", left: "0", width: "100%", zIndex: "1000" }}>
                    <Nav className="mx-auto">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{ color: "white", marginRight: "1.5rem" }}>HOME</NavLink>
                        <NavLink to="/ColorStore" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{ color: "white", marginRight: "1.5rem" }}>STORE</NavLink>
                        <NavLink to="/About" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{ color: "white", marginRight: "1.5rem" }}>ABOUT</NavLink>
                        <NavLink to="/Contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{ color: "white", marginRight: "1.5rem" }}>CONTACT</NavLink>
                        <NavLink to="/Products" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{ color: "white", marginRight: "1.5rem" }}>PRODUCTS</NavLink>
                    </Nav>
                </Navbar>
                <div className="homeGeneric">
                    <h1 style={{ fontSize: "4rem", marginBottom: "1.5rem" }}>The Generics</h1>
                    <Button style={{ backgroundColor: "gray", border: "1.5px solid #56CCF2", borderRadius: "0", fontSize: "21px" }}>Get our Latest Album</Button>
                    <div><Button style={{ backgroundColor: "gray", color: "#56CCF2", border: "1.5px solid #56CCF2", marginTop: "1.5rem", fontSize: "30px", borderRadius: "50px" }}>►</Button></div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Navbar className="links" bg="dark" variant="dark" style={{ fontFamily: "Times New Roman", position: "fixed", top: "0", left: "0", width: "100%", zIndex: "1000" }}>
                <div className="contents">
                    <Nav>
                        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{ color: "white", marginRight: "1.5rem" }}>HOME</NavLink>
                        <NavLink to="/ColorStore" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{ color: "white", marginRight: "1.5rem" }}>STORE</NavLink>
                        <NavLink to="/About" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{ color: "white", marginRight: "1.5rem" }}>ABOUT</NavLink>
                        <NavLink to="/Contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{ color: "white", marginRight: "1.5rem" }}>CONTACT</NavLink>
                        <NavLink to="/Products" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} style={{ color: "white", marginRight: "1.5rem" }}>PRODUCTS</NavLink>
                    </Nav>
                </div>
                {location.pathname === '/ColorStore' && <Button onClick={props.onConfirm} style={{ marginRight: "2rem", marginBottom: "-0.5rem", marginTop: "-0.5rem", backgroundColor: "whitesmoke", color: "black", border: "3px solid lightblue", borderRadius: "10px", paddingLeft: '0', paddingBottom: "0" }}><h5>Cart</h5> <h6 style={{ marginLeft: "4rem", marginTop: "-2.2rem", border: "1px solid blue", padding: "3px", paddingLeft: "5px", paddingRight: "5px", borderRadius: "6px" }}>{quantity}</h6></Button>}
            </Navbar>
            <h4 className="generic" style={{ fontSize: "4rem" }}>The Generics</h4>
        </div>
    )
}

export default Header;