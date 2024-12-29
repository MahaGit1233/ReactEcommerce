import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Contact.css";

const Contact = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredMail, setEnteredMail] = useState("");
    const [enteredPhone, setEnteredPhone] = useState("");

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const mailChangeHandler = (event) => {
        setEnteredMail(event.target.value);
    }

    const phoneChangeHandler = (event) => {
        setEnteredPhone(event.target.value);
    }

    const formSubmitHandler=(event)=>{
        event.preventDefault();
        const contactData={
            name:enteredName,
            email:enteredMail,
            phone:enteredPhone,
        };
        props.onSaveData(contactData);
        setEnteredName("");
        setEnteredMail("");
        setEnteredPhone("");
    }

    return (
        <div className="contactform" onSubmit={formSubmitHandler}>
            <Form className="form">
                <Form.Group>
                    <Form.Label className="formlabel">Name:</Form.Label>
                    <Form.Control className="forminput" type="text" value={enteredName} onChange={nameChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="formlabel">Email Id:</Form.Label>
                    <Form.Control className="forminput" type="email" value={enteredMail} onChange={mailChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="formlabel">Phone Number:</Form.Label>
                    <Form.Control className="forminput" type="number" value={enteredPhone} onChange={phoneChangeHandler} />
                </Form.Group>
                <div className="formBtn">
                    <Button type="submit" variant="outline-dark">Submit</Button>
                </div>
            </Form>
        </div>
    )
};

export default Contact;