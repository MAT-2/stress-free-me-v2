import { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { REMOVE_THOUGHT, UPDATE_THOUGHT } from "../../utils/mutations";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ThoughtList = ({ thoughts = [] }) => {
  const [mythoughts, setMyThought] = useState(thoughts);

  useEffect(() => {
    setMyThought(thoughts);
  }, [thoughts]);

  const [deleteThought] = useMutation(REMOVE_THOUGHT);
  const [updateThought] = useMutation(UPDATE_THOUGHT);

  const removeThought = async (id) => {
    try {
      // Use the deleteThought mutation
      await deleteThought({
        variables: { thoughtId: id },
      });
      // Update local state
      const updatedThought = mythoughts.filter((item) => item._id !== id);
      setMyThought(updatedThought);
    } catch (error) {
      console.error("Error deleting thought:", error);
    }
  };

  const editThought = async (itemId, newThoughtText) => {
    try {
      // Use the updateThought mutation
      const response = await updateThought({
        variables: { thoughtId: itemId, thoughtText: newThoughtText },
      });
      // Extract the updated thought from the GraphQL response
      const updatedThought = response.data.updateThought;
      // Update local state
      const updatedThoughts = mythoughts.map((item) =>
        item._id === itemId ? updatedThought : item
      );
      setMyThought(updatedThoughts);
    } catch (error) {
      console.error("Error updating thought:", error);
    }
  };

  return (
    <>
      <h2>Thought List</h2>
      <div>
        {mythoughts.map((thought) => (
          <div key={thought._id}>
            <Card>
              <Card.Header>Created on {thought.createdAt}</Card.Header>
              <Card.Body>
                <Card.Title className="text-center">
                  {thought.thoughtText}
                </Card.Title>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeThought(thought._id)}
                >
                  Delete
                </Button>
                <Button
                  variant="success"
                  size="sm"
                  onClick={() =>
                    editThought(
                      thought._id,
                      "I changed my mind about this thought"
                    )
                  }
                >
                  Update
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default ThoughtList;
