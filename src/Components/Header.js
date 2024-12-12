import React from "react";
import './Header.css';
import { Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" style={{ justifyContent: "center", fontFamily: "Times New Roman", gap: "30px" }}>
                <Navbar.Brand>HOME</Navbar.Brand>
                <Navbar.Brand>STORE</Navbar.Brand>
                <Navbar.Brand>ABOUT</Navbar.Brand>
            </Navbar>
            <h4 className="generic">The Generics</h4>
        </div>
    )
}

export default Header;