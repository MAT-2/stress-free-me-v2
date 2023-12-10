import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import StressJourney from "../components/ChartCards/StressJourney";
import SurveyDoughnut from "../components/ChartCards/SurveyDoughnut";

import { QUERY_USER, QUERY_ME } from "../utils/queries";

import Auth from "../utils/auth";

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || {};
  // navigate to personal profile page if username is matched
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile/:username" />;
  }

  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to view your profile and survey results. Use
        the navigation links above to sign up or log in!
      </h4>
    );
  }

  // const { data } = useQuery(QUERY_ME)

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="bg-dark text-light text-center p-3 mb-4 mt-4">
          Welcome to {userParam ? `${user.username}'s` : "your"} stress
          management profile!
        </h2>

        <div className="text-center">
          <Link to="/Survey">
            <button
              className="btn btn-block btn-primary "
              style={{ cursor: "pointer" }}
              type="submit"
            >
              Start Survey!
            </button>
          </Link>
        </div>

        <div className="d-flex col-12 mb-5">
          <Card className="col-6 col mt-4 mb-5 me-3 p-3">
            {/* <p>Survey Doughnut Appears Here</p> */}
            {/* Changed user.surveys[0] to user.surveys[user.surveys.length-1] because [0] is always static. Using the newest statement updates to the latest data in the array. */}
            <SurveyDoughnut
              surveyData={user.surveys[user.surveys.length - 1]}
            />
          </Card>
          <Card className="col-6 mt-4 mb-5 p-3">
            {/* <p>Stress Journey Appears Here</p> */}
            <StressJourney surveys={user.surveys} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;

// query me @ profile page
// query correct info for chart results
