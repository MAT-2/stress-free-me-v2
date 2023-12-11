import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";
import Auth from '../utils/auth';

const styles = {
  text: {
    color: "white",
  },
};

const Navbar = () => {
  const homePage = useLocation().pathname;
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <div>
    {Auth.loggedIn() ? (
    <>
      <Nav
        className="justify-content-end navbar bg-info shadow justify-content-center"
        activeKey="/home"
      >
        <a className="navbar-brand">
          <img src="/stress-free-me-logo.png" alt="" width="30" height="30" />
        </a>
        
        <Nav.Item>
          <Nav.Link
            href="/Profile"
            className={homePage === "/Profile" ? "nav-link active" : "nav-link"}
            style={styles.text}
          >
           {Auth.getProfile().data.username}'s profile
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/Survey"
            className={homePage === "/Survey" ? "nav-link active" : "nav-link"}
            style={styles.text}
          >
            Survey
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/Results"
            className={homePage === "/Results" ? "nav-link active" : "nav-link"}
            style={styles.text}
          >
            Results
          </Nav.Link>
        </Nav.Item>
        <Nav.Link onClick={logout} style={styles.text}>
                Logout
              </Nav.Link>
        </Nav>
        </>
      ) : (
        <Nav className="justify-content-end navbar bg-info shadow justify-content-center"
        activeKey="/home">
            <a className="navbar-brand">
          <img src="/stress-free-me-logo.png" alt="" width="30" height="30" />
        </a>
          <Nav.Item>
            <Nav.Link
              href="/Login"
              className={homePage === "/Login" ? "nav-link active" : "nav-link"}
              style={styles.text}
            >
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="text-light">
            <Nav.Link
              href="/Signup"
              className={homePage === "/Signup" ? "nav-link active" : "nav-link"}
              style={styles.text}
            >
              Sign Up
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="text-light">
            <Nav.Link
              href="/"
              className={homePage === "/" ? "nav-link active" : "nav-link"}
              style={styles.text}
            >
              Home
            </Nav.Link>
          </Nav.Item>
        </Nav>
      )}
    </div>
  );
};

export default Navbar;
