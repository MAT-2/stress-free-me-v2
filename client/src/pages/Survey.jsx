import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SurveyQuestions() {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 1</Card.Title>
        <p>How would you rate your happiness?</p>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="2"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}
        </Form>
        <Button variant="secondary" size="lg">
          Next Question
        </Button>
      </Card>
    </div>
  );
}

export default SurveyQuestions;
