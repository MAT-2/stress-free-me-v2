import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Card from "react-bootstrap/Card";

import StressJourney from '../components/ChartCards/StressJourney';
import SurveyDoughnut from '../components/ChartCards/SurveyDoughnut';

import { QUERY_USER, QUERY_ME } from '../utils/queries'

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  // });

  // const user = data?.me || data?.user || {};
  // // navigate to personal profile page if username is matched
  // if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Navigate to="/profile/:username" />;
  // }

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (!user?.username) {
  //   return (
  //     <h4>
  //       You need to be logged in to view your profile and survey results. Use the navigation links above to
  //       sign up or log in!
  //     </h4>
  //   );
  // }

  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 bg-dark text-light p-3 mb-5">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        <div className="">
            <button className="btn btn-block btn-primary " style={{ cursor: 'pointer' }} type="submit">
                Start Survey
            </button>
        </div>

        <div className="d-flex col-12 mb-5">
          <Card className="col-6 m-4 p-3">
            <p>Survey Doughnut Appears Here</p>
            <SurveyDoughnut />
          </Card>
          <Card className="col-6 m-4 p-3">
            <p>Stress Journey Appears Here</p>
            <StressJourney />
          </Card>
        </div>

      </div>

    </div>
  );
};

export default Profile;