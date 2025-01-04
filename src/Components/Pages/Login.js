import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import AuthContext from "../Store/auth-context";

const Login = () => {
    const [enteredMail, setEnteredMail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const authCtx = useContext(AuthContext);

    const mailChangeHandler = (event) => {
        setEnteredMail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD6Gj3hGJUWemo2iK8w7GkCTWiU41SmoFI', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredMail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application.json'
            },
        }).then((res) => {
            if (res.ok) {
                console.log('ok');
                return res.json();
            }
            else {
                return res.json().then((data) => {
                    alert(data.error.message);
                    console.log(data.error.message);
                })
            }
        }).then((data) => {
            console.log(data);
            authCtx.login(data.idToken);
        }).catch((err) => {
            alert(err.message);
        })

        setEnteredMail('');
        setEnteredPassword('');
    };

    return (
        <div className="contactform" onSubmit={formSubmitHandler}>
            <Form className="form">
                <Form.Group>
                    <Form.Label className="formlabel">Email Id:</Form.Label>
                    <Form.Control className="forminput" type="email" value={enteredMail} onChange={mailChangeHandler} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className="formlabel">Password:</Form.Label>
                    <Form.Control className="forminput" type="password" value={enteredPassword} onChange={passwordChangeHandler} />
                </Form.Group>
                <div className="formBtn">
                    <Button type="submit" variant="outline-dark">Login</Button>
                </div>
            </Form>
        </div>
    )
};

export default Login;