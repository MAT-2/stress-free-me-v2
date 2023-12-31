import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AuthService from "../utils/auth";
import { useState, useEffect } from "react";

//Use state to cycle through the questions.
//Only things changing would be question names, and the next cycled question. Form is the same.

//Insert an array of the qustions.
//Added values associated with model names.
const survey = {
  questions: [
    {
      question: "Question 1: How would you rate your sleep quality?",
      value: "sleep_quality",
    },
    {
      question:
        "Question 2: How many times a week do you suffer from headaches?",
      value: "headaches",
    },
    {
      question:
        "Question 3: How would you rate your academic performance in school?",
      value: "performance",
    },
    {
      question:
        "Question 4: Please rate your study load you receive per week from school.",
      value: "workload",
    },
    {
      question:
        "Question 5: How often do you participate extracurricular activities?",
      value: "hobbies",
    },
    {
      question: "Question 6: Do you handle your stress well?",
      value: "stress",
    },
    {
      question: "Question 7: How often do you go to therapy?",
      value: "therapy",
    },
    {
      question: "Question 8: How often do you go outside?",
      value: "outside",
    },
  ],
};

function SurveyQuestions() {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("1");
  //Creating a state using an object. Will need results object to be push to mutation.
  const [results, setResults] = useState({});

  //Retrieve the question
  const { questions } = survey;

  //Created two functions: onValueChange helps to update values for the selectedOption
  //The formSubmit function prevents our page to reloading, and also logs the value for selectedOption to see if it works via console.log.
  function onValueChange(event) {
    setSelectedOption(event.target.value);
  }

  function formSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

  //Creating a click event to move onto the next question.
  const nextQuestion = () => {
    setResults((previous) => ({
      ...previous,
      [questions[activeQuestion].value]: parseInt(selectedOption),
    }));
    console.log(questions);
    if (activeQuestion === survey.questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
    } else {
      setActiveQuestion(activeQuestion + 1);
    }
  };
  useEffect(() => {
    async function storeData() {
      try {
        const response = await fetch("/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthService.getToken(),
          },
          body: JSON.stringify({
            query: `
              mutation Mutation($sleepQuality: Int, $headaches: Int, $performance: Int, $workload: Int, $hobbies: Int, $stress: Int, $therapy: Int, $outside: Int) {
                userSurveyResponse(sleep_quality: $sleepQuality, headaches: $headaches, performance: $performance, workload: $workload, hobbies: $hobbies, stress: $stress, therapy: $therapy, outside: $outside) {
                  avgValue
                  survey {
                    _id
                  }
                }
              }`,
            variables: {
              sleepQuality: results.sleep_quality,
              headaches: results.headaches,
              performance: results.performance,
              workload: results.workload,
              hobbies: results.hobbies,
              stress: results.stress,
              therapy: results.therapy,
              outside: results.outside,
            },
          }),
        });

        const responseData = await response.json();
        console.log(responseData);
      } catch (error) {
        console.error(error);
      }

      console.log(results)
    }

    const checkQuizFinished = async () => {
      if (activeQuestion === survey.questions.length) {
        await storeData();
        window.location.assign("/Results");
      }
    }

    checkQuizFinished();

  }, [results, activeQuestion]);

  return (
    <div className="m-5 d-flex justify-content-center">
      {activeQuestion === questions.length ? <div>Storing results...</div> :
        <Card style={{ width: "45rem", height: "20rem", padding: "10px" }}>
          <div className=" p-5 row justify-content-center">
            <h2>{questions[activeQuestion].question}</h2>
            <Form onSubmit={formSubmit}>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="1"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    value="1"
                    checked={selectedOption === "1"}
                    onChange={onValueChange}
                  />
                  <Form.Check
                    inline
                    label="2"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    value="2"
                    checked={selectedOption === "2"}
                    onChange={onValueChange}
                  />
                  <Form.Check
                    inline
                    label="3"
                    name="group1"
                    type={type}
                    id={`inline-${type}-3`}
                    value="3"
                    checked={selectedOption === "3"}
                    onChange={onValueChange}
                  />
                  <Form.Check
                    inline
                    label="4"
                    name="group1"
                    type={type}
                    id={`inline-${type}-4`}
                    value="4"
                    checked={selectedOption === "4"}
                    onChange={onValueChange}
                  />
                  <Form.Check
                    inline
                    label="5"
                    name="group1"
                    type={type}
                    id={`inline-${type}-5`}
                    value="5"
                    checked={selectedOption === "5"}
                    onChange={onValueChange}
                  />
                </div>
              ))}
            </Form>
            <Button
              variant="info"
              size="lg"
              id="nextButton"
              onClick={nextQuestion}
            >
              Next Question
            </Button>
          </div>
        </Card>
      }
    </div>
  );
}

export default SurveyQuestions;
