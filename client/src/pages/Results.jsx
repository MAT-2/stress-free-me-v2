import { useQuery } from "@apollo/client";
import ThoughtList from "../components/ThoughtList";
import ThoughtForm from "../components/ThoughtForm";
// import ThoughtDelete from "../components/ThoughtDelete";

// Changed to QUERY_THOUGHTS and not QUERY_SINGLE_THOUGHTS, since we want all of the thought data.
import { QUERY_ME } from "../utils/queries"; //Using query me so it only pulls out the logged in user thoughts


const styles = {
  body: {
    margin: "5px",
  },
  card: {
    width: "50rem",
    padding: 20,
  },
};

const Results = () => {

  // QUERY_ME to get the logged-in user's data
  const { data } = useQuery(QUERY_ME);

  if (!data || !data.me) {
    // User not logged in or data not available yet
    return <p>Loading...</p>;
  }

  // Extract the thoughts from the user's data
  const { thoughts } = data.me;

  return (
    <>
      <div style={styles.body}>
        <div className="m-5 d-flex justify-content-center">
          <div>
            <div className="card shadow-lg" style={styles.card}>
              <div className="card-body">
                <h1>How are you feeling today? Log your thoughts to keep track.</h1>
                
              </div>
              <div className="m-3 p-2 border border-dark align-content-center">
                <ThoughtForm />
              </div>
              <div>
                <ThoughtList thoughts={thoughts} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;