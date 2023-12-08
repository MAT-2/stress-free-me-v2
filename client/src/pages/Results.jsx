import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import ThoughtList from "../components/ThoughtLIst";
import ThoughtForm from "../components/ThoughtForm";

// Changed to QUERY_THOUGHTS and not QUERY_SINGLE_THOUGHTS, since we want all of the thought data.
import { QUERY_THOUGHTS } from "../utils/queries";

const styles = {
  body: {
    margin: "5px",
  },
  card: {
    width: "50rem",
    padding: 20,
  },
};

function Results() {
  const { thoughtId } = useParams();

  // Had to change to QUERY_THOUGHTS
  const { data } = useQuery(QUERY_THOUGHTS, {
    variables: { thoughtId: thoughtId },
  });

  //Console.log thought to see what data we have. also changed it to thoughts
  const thought = data?.thoughts || {};
  console.log(thought);

  return (
    <>
      <div style={styles.body}>
        <div className="m-5 d-flex justify-content-center">
          <div className="card shadow-lg" style={styles.card}>
            <div className="card-body">
              <h1>
                How are you feeling today? Log your thoughts to keep track.
              </h1>
              <blockquote>{thought.thoughtText}</blockquote>
            </div>
            <div className="m-3 p-2 border border-dark align-content-center">
              <ThoughtForm />
            </div>
            <div>
              {/* Had to add thoughts={thought} to retrieve the thought data from ThoughtList */}
              <ThoughtList thoughts={thought} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;
