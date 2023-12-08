import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ThoughtList from "../components/ThoughtLIst";
import ThoughtForm from "../components/ThoughtForm";

import { QUERY_SINGLE_THOUGHT } from "../utils/queries";

const styles = {
  card: {
    width: "50rem",
    padding: 20,
  },
};

function Results() {
  const { thoughtId } = useParams();

  const { data } = useQuery(QUERY_SINGLE_THOUGHT, {
    variables: { thoughtId: thoughtId },
  });

  const thought = data?.thought || {};

  return (
    <>
      <div className="m-5 d-flex justify-content-center">
        <div className="card shadow-lg" style={styles.card}>
          <div className="card-body">
            <h1>How are you feeling today? Log your thoughts to keep track.</h1>
            <blockquote>{thought.thoughtText}</blockquote>
          </div>
          <div className="m-3 p-2 border border-dark align-content-center">
            <ThoughtForm />
          </div>
          <div>
            <ThoughtList />
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;
