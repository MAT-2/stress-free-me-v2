import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import Auth from '../utils/auth';

const Header = () => {
  const homePage = useLocation().pathname;
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link  className="btn btn-lg btn-info m-2" to="/Profile">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/Survey">
          Survey
        </Link>
              <Link className="btn btn-lg btn-info m-2" to="/Results">
          Results
        </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/Login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/">
                Home
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
