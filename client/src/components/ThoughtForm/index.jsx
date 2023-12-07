import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_THOUGHT } from "../../utils/mutations";

const ThoughtForm = ({ thoughtId }) => {
  const [thoughtText, setThoughtText] = useState("");

  const [addThought] = useMutation(ADD_THOUGHT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addThought({
        variables: {
          thoughtId,
          thoughtText,
        },
      });
      setThoughtText("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "thoughtText") {
      setThoughtText(value);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <textarea onChange={handleChange}></textarea>
        </div>

        <div>
          <button type="submit">Add Thought</button>
        </div>
      </form>
    </>
  );
};

export default ThoughtForm;
