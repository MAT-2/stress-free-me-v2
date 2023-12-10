import { useState } from "react";
const ThoughtList = ({ thoughts = [] }) => {
  const [mythoughts, setMyThought] = useState(thoughts);

  if (!mythoughts.length) {
    return <h1>There Are No Thoughts Existing</h1>;
  }
  const removeThought = (id) => {
    const updatedThought = [...mythoughts].filter((item) => item.id !== id);
    setMyThought(updatedThought);
  };

  // Function to edit the bucket list item
  const editThought = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setMyThought((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };
  return (
    <>
      <h2>Thought List</h2>
      <div>
        {mythoughts &&
          mythoughts.map((thought) => (
            <div key={thought._id}>
              <div>
                <h5>Created on {thought.createdAt}</h5>
                <h5>{thought.thoughtText}</h5>
                <button onClick={removeThought(thought._id)}>Delete</button>
                <button onClick={editThought(thought._id,"undefined" )}>Update</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ThoughtList;
