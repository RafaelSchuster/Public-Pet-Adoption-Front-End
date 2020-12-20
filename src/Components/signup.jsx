import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <>
            <h1>Welcome To RentaPET</h1>
            <Card>
                <Card.Body></Card.Body>
                <h2 className="text-center mb-4">Sign-Up</h2>
                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                <Form >
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" required></Form.Control>
                    </Form.Group>
                    <Button className="w-100" type="submit" >Sign Up</Button>
                </Form>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}
export default SignUp;