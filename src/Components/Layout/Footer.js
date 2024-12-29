import React from "react";
import { Image, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            <Navbar style={{ backgroundColor: "#56CCF2", marginTop: "4rem" }}>
                <Navbar.Brand style={{ color: "white", fontFamily: "Times New Roman", padding: "1%", fontSize: "50px", marginLeft:"15%" }}>The Generics</Navbar.Brand>
                <div style={{padding:"0", marginLeft:"33%"}}>
                    <NavLink to="https://www.youtube.com/"><Image roundedCircle style={{ width: "5%", marginRight:"3rem" }} src="https://i.pinimg.com/736x/7a/a5/6a/7aa56a308691c11ac0d350a3adbede91.jpg" /></NavLink>
                    <NavLink to="https://open.spotify.com/"><Image roundedCircle style={{ width: "5%", marginRight:"3rem" }} src="https://i.pinimg.com/736x/14/8b/28/148b28a3992349e8db92184c65d24bbd.jpg" /></NavLink>
                    <NavLink to="https://www.facebook.com/"><Image roundedCircle style={{ width: "5%", marginRight:"3rem" }} src="https://i.pinimg.com/736x/25/ea/59/25ea5941311b06c6cec08f99bf5d72a5.jpg" /></NavLink>
                </div>
            </Navbar>
        </footer>
    )
}

export default Footer;