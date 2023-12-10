import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth'



const Signup = (props) => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addUser({
                variables: { ...formState },
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <Card style={{ width: "25rem", margin: "4rem" }}>
                {data ? (
                      <p>
                      Success! You may now head{' '}
                      <Link to="/Survey">to the profile page.</Link>
                    </p>
                ) : (
                    <Card.Body>
                        <Card.Title>Signup</Card.Title>
                        <Form onSubmit={handleFormSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="usernameForm">
                                <Form.Label column sm="3">
                                    Username
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="text" placeholder="Username" name="username" value={formState.username} onChange={handleChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="emailForm">
                                <Form.Label column sm="3">
                                    Email
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="email" placeholder="hello123@example.com" name="email" value={formState.email} onChange={handleChange}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="passwordForm">
                                <Form.Label column sm="3">
                                    Password
                                </Form.Label>
                                <Col sm="7">
                                    <Form.Control type="password" placeholder="Password" name="password" value={formState.password} onChange={handleChange} />
                                </Col>
                            </Form.Group>
                            <Button variant="secondary" size="lg" type="submit">
                                Signup
                            </Button>
                        </Form>
                    </Card.Body>
                )}

                {error && (
                    <div>
                        {error.message}
                    </div>
                )}
            </Card>
        </div>
    )
}

export default Signup;