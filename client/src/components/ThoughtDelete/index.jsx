import { useState } from "react";
import Results from "../../pages/Results";

function ThoughtDelete() {
  const [thought, setThoughts] = useState([]);

  const deleteThought = (id) => {
    const updateThought = [...thought].filter((item) => item.id !== id);

    setThoughts(updateThought);
  };

  return (
    <div>
      <Results deleteThought={deleteThought} />
    </div>
  );
}

export default ThoughtDelete;
