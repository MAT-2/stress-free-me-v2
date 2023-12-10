import { useState } from "react";
import { useMutation } from "@apollo/client";

import { ADD_THOUGHT } from "../../utils/mutations";

const ThoughtForm = ({ thoughtId }) => {
  const [thoughtText, setThoughtText] = useState("");

  const [addThought, { error }] = useMutation(ADD_THOUGHT);

  const handleFormSubmit = async (event) => {
    // event.preventDefault();
    // removed preventDefault so that thoughtList will refresh after a new thought is added

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
      <form
        onSubmit={handleFormSubmit}
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
          <button className="btn btn-info" type="submit">Add Thought</button>
        </div>
      </form>
    </>
  );
};

export default ThoughtForm;
