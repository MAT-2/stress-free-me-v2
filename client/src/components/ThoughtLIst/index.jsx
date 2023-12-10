import { useState } from "react";
const ThoughtList = ({ thoughts = [] }) => {
  const [mythoughts, setMyThought] = useState(thoughts);

  if (!mythoughts.length) {
    return <h1>There Are No Thoughts Existing</h1>;
  }
  const removeThought = (id) => {
    const updatedThought = mythoughts.filter((item) => item._id !== id);
    setMyThought(updatedThought);
  };

  // Function to edit the bucket list item
  const editThought = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue) {
      return;
    }
  
    // Create a new array with the updated thought
    const updatedThoughts = mythoughts.map((item) =>
      item._id === itemId ? { ...item, thoughtText: newValue } : item
    );
  
    setMyThought(updatedThoughts);
  };
  return (
    <>
      <h2>Thought Journal</h2>
      <div>
        {mythoughts.map((thought) => (
          <div key={thought._id}>
            <div>
              <h5>Created on {thought.createdAt}</h5>
              <h5>{thought.thoughtText}</h5>
              <button onClick={() => removeThought(thought._id)}>Delete</button>
              <button onClick={() => editThought(thought._id, "new text in here")}>
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ThoughtList;