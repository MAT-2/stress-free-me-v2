import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Thought = ({ thought, removeThought, editThought }) => {
  const [editState, setEditState] = useState(false);
  const [thoughtText, setThoughtText] = useState("");
  
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "thoughtText") {
      setThoughtText(value);
    }
  };
  return (
    <div key={thought._id}>
      <Card>
        <Card.Header>Created on {thought.createdAt}</Card.Header>
        <Card.Body>
          {!editState ? (
            <Card.Title className="text-center">
              {thought.thoughtText}
            </Card.Title>
          ) : (
            <form
              onSubmit={ (event) => {editThought(event, thought._id,thoughtText)
            setEditState(false)}}
              className="flex-row justify-center justify-space-between-md align-center"
            >
              <div className="col-12">
                <textarea
                  name="thoughtText"
                  placeholder="Type your thoughts here!"
                  value={thoughtText}
                  className="form-input w-100"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <button className="btn btn-info" type="submit">
                 Update
                </button>
              </div>
            </form>
          )}
          <Button
            variant="danger"
            size="sm"
            onClick={() => removeThought(thought._id)}
          >
            Delete
          </Button>
          {!editState && <Button
            variant="success"
            size="sm"
            onClick={() =>
              setEditState(!editState)
            }
          >
            Update
          </Button>}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Thought;