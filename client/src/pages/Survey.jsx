import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";

//Use state to cycle through the questions.
//Only things changing would be question names, and the next cycled question. Form is the same.

//Insert an array of the qustions.
const survey = {
  questions: [
    {
      question: "Question 1: How would you rate your sleep quality?",
    },
    {
      question:
        "Question 2: How many times a week do you suffer from headaches?",
    },
    {
      question:
        "Question 3: How would you rate your academic performance in school?",
    },
    {
      question:
        "Question 4: Please rate your study load you receive per week from school.",
    },
    {
      question:
        "Question 5: How often do you participate extracuricular activities?",
    },
    {
      question: "Question 6: Do you handle your stress well?",
    },
    {
      question: "Question 7: How often do you go to therapy?",
    },
    {
      question: "Question 8: How often do you go outside?",
    },
  ],
};

function SurveyQuestions() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  // const [selectedAnswer, setSelectedAnswer] = useState("");

  //Retrieve the question
  const { questions } = survey;

  //Creating a click event to move onto the next question.
  const nextQuestion = () => {
    setActiveQuestion((prev) => prev + 1);
    // setSelectedAnswer
    // ? {
    //   ...prev,

    // }
    // : {}
  };

  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 1</Card.Title>
        <h2>{questions[activeQuestion].question}</h2>
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
        <Button
          variant="secondary"
          size="lg"
          id="nextButton"
          onClick={nextQuestion}
        >
          Next Question
        </Button>
      </Card>
      {/* <Card style={{ width: "25rem" }}>
        <Card.Title>Question 2</Card.Title>
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
        <Button variant="secondary" size="lg" id="previousButton">
          Previous Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 3</Card.Title>
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
        <Button variant="secondary" size="lg" id="previousButton">
          Previous Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 4</Card.Title>
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
        <Button variant="secondary" size="lg" id="previousButton">
          Previous Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 5</Card.Title>
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
        <Button variant="secondary" size="lg" id="previousButton">
          Previous Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 6</Card.Title>
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
        <Button variant="secondary" size="lg" id="previousButton">
          Previous Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 7</Card.Title>
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
        <Button variant="secondary" size="lg" id="previousButton">
          Previous Question
        </Button>
      </Card>
      <Card style={{ width: "25rem" }}>
        <Card.Title>Question 8</Card.Title>
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
          Submit Survey
        </Button>
        <Button variant="secondary" size="lg" id="previousButton">
          Previous Question
        </Button>
      </Card> */}
    </div>
  );
}

export default SurveyQuestions;
