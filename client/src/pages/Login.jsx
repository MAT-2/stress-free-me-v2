import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="emailForm">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="hello123@example.com" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="passwordForm">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <Button variant="secondary" size="lg">
              Login
            </Button>
          </Form>
          <div className="form-group mt-2">
            <p>
              <a href="#">New User? Signup here!</a>
            </p>
          </div>
        </Card.Body>
      </Card>

      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Signup</Card.Title>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="emailForm">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="hello123@example.com" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="passwordForm">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <Button variant="secondary" size="lg">
              Signup
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Login;
