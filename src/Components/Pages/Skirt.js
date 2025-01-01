import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const Skirt = () => {
    return (
        <div style={{ fontFamily: "HP Simplified Light" }}>
            <h1 style={{textAlign:"center"}}>Skirt</h1>
            <Container fluid style={{ display: "flex", gap: "2rem", alignItems: "stretch" }}>
                <Container style={{ backgroundColor: "#f8f9fa", padding: "1rem", borderRadius: "8px", flex: "1" }}>
                    <Row>
                        <Col md={1} style={{ display: "flex", justifyContent: "left" }}>
                            <ul style={{ listStyleType: "none", marginTop: "1rem" }}>
                                <li style={{ marginTop: "3%" }}><Image src="\Skirts\front.avif" /></li>
                                <li style={{ marginTop: "3%" }}><Image src="\Skirts\side1.avif" /></li>
                                <li style={{ marginTop: "3%" }}><Image src="\Skirts\side2.avif" /></li>
                                <li style={{ marginTop: "3%" }}><Image src="\Skirts\back.avif" /></li>
                            </ul>
                        </Col>
                        <Col md={6} style={{ textAlign: "left", marginLeft: "20%", marginTop: "4%" }}>
                            <Image style={{ width: "142%" }} src="\Skirts\main.avif" />
                        </Col>
                    </Row>
                    <div style={{ display: "flex", marginTop: "2%" }}>
                        <h1 style={{ marginTop: "2%" }}>₹1000</h1>
                        <div style={{ marginLeft: "53%", marginTop: "2.5%" }}>
                            <Button>BUY NOW</Button>
                        </div>
                    </div>
                </Container>
                <Container style={{ backgroundColor: "#f8f9fa", flex: "2" }}>
                    <h1 style={{color:"green"}}>Reviews</h1>
                    <ul style={{listStyleType:"none", marginTop:"2%"}}>
                        <li>
                            <li style={{color:"lightseagreen"}}><h4>Review 1:</h4></li>
                            <li><p>"The design and color are stunning, but I wish the skirt had a little more stretch. Overall, a great buy for the price, and the quality is excellent."</p></li>
                        </li>
                        <li>
                            <li style={{color:"lightseagreen"}}><h4>Review 2:</h4></li>
                            <li><p>"Bought this as a gift for my wife, and she loved it! The stitching is neat, and the skirt flows beautifully. The only issue was a slight delay in delivery, but the product itself is great."</p></li>
                        </li>
                        <li>
                            <li style={{color:"lightseagreen"}}><h4>Review 3:</h4></li>
                            <li><p>"The skirt looks beautiful, but it runs slightly small. If you’re between sizes, definitely size up. The material is a bit thinner than expected, but still decent for the price."</p></li>
                        </li>
                        <li>
                            <li style={{color:"lightseagreen"}}><h4>Review 4:</h4></li>
                            <li><p>"This skirt exceeded my expectations! It’s so versatile, and I can dress it up or down. I’ve already ordered another one in a different color!"</p></li>
                        </li>
                        <li>
                            <li style={{color:"lightseagreen"}}><h4>Review 5:</h4></li>
                            <li><p>"The skirt was not what I expected. The color looked slightly different than in the images. The material is okay, but it didn’t suit my style."</p></li>
                        </li>
                    </ul>
                </Container>
            </Container>
        </div>
    )
};

export default Skirt;