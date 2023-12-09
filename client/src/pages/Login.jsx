import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth'




const Login = (props) => {
  const [formState, setFormState] = useState({email: '', password: ''});
  const [login, { error, data }] = useMutation(LOGIN_USER);


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  }

  return (
    <div>
      <Card style={{ width: "25rem", margin: "4rem" }}>
        {data ? (
          <p>
          Success! You may now head{' '}
          <Link to="/Profile">to the profile page.</Link>
        </p>
        ) :(
            <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="emailForm">
                <Form.Label column sm="3">
                  Email
                </Form.Label>
                <Col sm="7">
                  <Form.Control placeholder="hello123@example.com" type="email" name="email" value={formState.email} onChange={handleChange}/>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="passwordForm">
                <Form.Label column sm="3">
                  Password
                </Form.Label>
                <Col sm="7">
                  <Form.Control placeholder="Password" type="password" name="password" value={formState.password} onChange={handleChange}/>
                </Col>
              </Form.Group>
              <Button  type="submit" variant="secondary" size="lg">
                Login
              </Button>
            </Form>
            {/* <div className="form-group mt-2">
              <p>
                <a href="#">New User? Signup here!</a>
              </p>
            </div> */}
          </Card.Body>
        )}
        
      </Card>

    </div>
  );
}


export default Login;

