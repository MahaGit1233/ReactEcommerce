import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const About = () => {
    return (
        <div>
            <h2 style={{ textAlign: "center", fontFamily: "Algerian", fontStyle: "italic", marginBottom:"3rem", marginTop:"1.5rem" }}>ABOUT</h2>
            <Container>
                <Row>
                    <Col xs={12} className="d-flex flex-column align-items-center">
                        <div style={{marginLeft:"20rem", marginTop:"-2rem", fontFamily:"Times New Roman"}}>
                            <Image src="https://i.pinimg.com/736x/7e/7b/40/7e7b405b72fd9e9c4a8fb00aa54af88b.jpg" roundedCircle style={{width:"200px", height:"200px", marginBottom:"2rem", marginTop:"2rem"}}/>
                            <p style={{marginLeft:"15rem", marginTop:"-15rem"}}>Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.</p>
                            <p style={{marginTop:"-1rem"}}>Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;