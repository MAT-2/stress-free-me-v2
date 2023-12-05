import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SurveyQuestions() {
  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 1</Card.Title>
        <p>How would you rate your sleep quality</p>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                value="1"
              />
              <Form.Check
                inline
                label="2"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                value="2"
              />
              <Form.Check
                inline
                label="3"
                name="group1"
                type={type}
                id={`inline-${type}-3`}
                value="3"
              />
              <Form.Check
                inline
                label="4"
                name="group1"
                type={type}
                id={`inline-${type}-4`}
                value="4"
              />
              <Form.Check
                inline
                label="5"
                name="group1"
                type={type}
                id={`inline-${type}-5`}
                value="5"
              />
            </div>
          ))}
        </Form>
        <Button variant="secondary" size="lg" id="nextButton">
          Next Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 2</Card.Title>
        <p>How many times a week do you suffer from headaches?</p>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group2"
                type={type}
                id={`inline-${type}-1`}
                value="1"
              />
              <Form.Check
                inline
                label="2"
                name="group2"
                type={type}
                id={`inline-${type}-2`}
                value="2"
              />
              <Form.Check
                inline
                label="3"
                name="group2"
                type={type}
                id={`inline-${type}-3`}
                value="3"
              />
              <Form.Check
                inline
                label="4"
                name="group2"
                type={type}
                id={`inline-${type}-4`}
                value="4"
              />
              <Form.Check
                inline
                label="5"
                name="group2"
                type={type}
                id={`inline-${type}-5`}
                value="5"
              />
            </div>
          ))}
        </Form>
        <Button variant="secondary" size="lg" id="nextButton">
          Next Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 3</Card.Title>
        <p>How would you rate your academic performance in school?</p>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group3"
                type={type}
                id={`inline-${type}-1`}
                value="1"
              />
              <Form.Check
                inline
                label="2"
                name="group3"
                type={type}
                id={`inline-${type}-2`}
                value="2"
              />
              <Form.Check
                inline
                label="3"
                name="group3"
                type={type}
                id={`inline-${type}-3`}
                value="3"
              />
              <Form.Check
                inline
                label="4"
                name="group3"
                type={type}
                id={`inline-${type}-4`}
                value="4"
              />
              <Form.Check
                inline
                label="5"
                name="group3"
                type={type}
                id={`inline-${type}-5`}
                value="5"
              />
            </div>
          ))}
        </Form>
        <Button variant="secondary" size="lg" id="nextButton">
          Next Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 4</Card.Title>
        <p>Please rate your study load you receive per week from school.</p>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group4"
                type={type}
                id={`inline-${type}-1`}
                value="1"
              />
              <Form.Check
                inline
                label="2"
                name="group4"
                type={type}
                id={`inline-${type}-2`}
                value="2"
              />
              <Form.Check
                inline
                label="3"
                name="group4"
                type={type}
                id={`inline-${type}-3`}
                value="3"
              />
              <Form.Check
                inline
                label="4"
                name="group4"
                type={type}
                id={`inline-${type}-4`}
                value="4"
              />
              <Form.Check
                inline
                label="5"
                name="group4"
                type={type}
                id={`inline-${type}-5`}
                value="5"
              />
            </div>
          ))}
        </Form>
        <Button variant="secondary" size="lg" id="nextButton">
          Next Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 5</Card.Title>
        <p>How often do you participate extracuricular activities?</p>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group5"
                type={type}
                id={`inline-${type}-1`}
                value="1"
              />
              <Form.Check
                inline
                label="2"
                name="group5"
                type={type}
                id={`inline-${type}-2`}
                value="2"
              />
              <Form.Check
                inline
                label="3"
                name="group5"
                type={type}
                id={`inline-${type}-3`}
                value="3"
              />
              <Form.Check
                inline
                label="4"
                name="group5"
                type={type}
                id={`inline-${type}-4`}
                value="4"
              />
              <Form.Check
                inline
                label="5"
                name="group5"
                type={type}
                id={`inline-${type}-5`}
                value="5"
              />
            </div>
          ))}
        </Form>
        <Button variant="secondary" size="lg" id="nextButton">
          Next Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 6</Card.Title>
        <p>Do you handle your stress well?</p>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group6"
                type={type}
                id={`inline-${type}-1`}
                value="1"
              />
              <Form.Check
                inline
                label="2"
                name="group6"
                type={type}
                id={`inline-${type}-2`}
                value="2"
              />
              <Form.Check
                inline
                label="3"
                name="group6"
                type={type}
                id={`inline-${type}-3`}
                value="3"
              />
              <Form.Check
                inline
                label="4"
                name="group6"
                type={type}
                id={`inline-${type}-4`}
                value="4"
              />
              <Form.Check
                inline
                label="5"
                name="group6"
                type={type}
                id={`inline-${type}-5`}
                value="5"
              />
            </div>
          ))}
        </Form>
        <Button variant="secondary" size="lg" id="nextButton">
          Next Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 7</Card.Title>
        <p>How often do you go to therapy?</p>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group7"
                type={type}
                id={`inline-${type}-1`}
                value="1"
              />
              <Form.Check
                inline
                label="2"
                name="group7"
                type={type}
                id={`inline-${type}-2`}
                value="2"
              />
              <Form.Check
                inline
                label="3"
                name="group7"
                type={type}
                id={`inline-${type}-3`}
                value="3"
              />
              <Form.Check
                inline
                label="4"
                name="group7"
                type={type}
                id={`inline-${type}-4`}
                value="4"
              />
              <Form.Check
                inline
                label="5"
                name="group7"
                type={type}
                id={`inline-${type}-5`}
                value="5"
              />
            </div>
          ))}
        </Form>
        <Button variant="secondary" size="lg" id="nextButton">
          Next Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 8</Card.Title>
        <p>How often do you go outside?</p>
        <Form>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="1"
                name="group8"
                type={type}
                id={`inline-${type}-1`}
                value="1"
              />
              <Form.Check
                inline
                label="2"
                name="group8"
                type={type}
                id={`inline-${type}-2`}
                value="2"
              />
              <Form.Check
                inline
                label="3"
                name="group8"
                type={type}
                id={`inline-${type}-3`}
                value="3"
              />
              <Form.Check
                inline
                label="4"
                name="group8"
                type={type}
                id={`inline-${type}-4`}
                value="4"
              />
              <Form.Check
                inline
                label="5"
                name="group8"
                type={type}
                id={`inline-${type}-5`}
                value="5"
              />
            </div>
          ))}
        </Form>
        <Button variant="secondary" size="lg" id="nextButton">
          Next Question
        </Button>
      </Card>
    </div>
  );
}

export default SurveyQuestions;
