import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Navbar style={{backgroundColor:"#56CCF2", justifyContent:"center", marginTop:"4rem"}}>
                <Navbar.Brand style={{color:"white", fontFamily:"Times New Roman", padding:"1%", fontSize:"50px"}}>The Generics</Navbar.Brand>
            </Navbar>
        </footer>
    )
}

export default Footer;