import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <Container>
            <Row style={{ marginLeft: "8%", fontFamily: "monospace" }}>
                <Col style={{ marginBottom: "1%" }}>
                    <h2 style={{ textAlign: "justify", marginTop: "2rem" }}>SweatShirt</h2>
                    <Link to="/Products/sweatshirt">
                        <Image src="SweatShirts\main.avif" />
                    </Link>
                </Col>
                <Col style={{ marginBottom: "1%" }}>
                    <h2 style={{ textAlign: "justify", marginTop: "2rem" }}>TrenchCoat</h2>
                    <Link to="/Products/trenchcoat">
                        <Image src="TrenchCoats\main.avif" />
                    </Link>
                </Col>
                <Col style={{ marginBottom: "1%" }}>
                    <h2 style={{ textAlign: "justify", marginTop: "2rem" }}>Sweater</h2>
                    <Link to="/Products/sweater">
                        <Image src="Sweaters\main.avif" />
                    </Link>
                </Col>
                <Col style={{ marginBottom: "1%" }}>
                    <h2 style={{ textAlign: "justify", marginTop: "2rem" }}>Skirt</h2>
                    <Link to="/Products/skirt">
                        <Image src="Skirts\main.avif" />
                    </Link>
                </Col>
                <Col style={{ marginBottom: "1%" }}>
                    <h2 style={{ textAlign: "justify", marginTop: "2rem" }}>Trousers</h2>
                    <Link to="/Products/trouser">
                        <Image src="Trousers\main.avif" />
                    </Link>
                </Col>
                <Col style={{ marginBottom: "1%" }}>
                    <h2 style={{ textAlign: "justify", marginTop: "2rem" }}>TShirt</h2>
                    <Link to="/Products/tshirt">
                        <Image src="Tshirts\main.avif" />
                    </Link>
                </Col>
            </Row>
        </Container >
    )
};

export default Products;