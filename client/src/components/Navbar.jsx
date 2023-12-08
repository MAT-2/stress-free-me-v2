// import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";

const styles = {
  text: {
    color: "white",
  },
};

function Navbar() {
  const homePage = useLocation().pathname;

  return (
    <>
      <Nav
        className="justify-content-end navbar bg-info shadow justify-content-center"
        activeKey="/home"
      >
        <a className="navbar-brand" href="/">
          <img src="/stress-free-me-logo.png" alt="" width="30" height="30" />
        </a>
        <Nav.Item className="text-light">
          <Nav.Link
            href="/"
            className={homePage === "/" ? "nav-link active" : "nav-link"}
            style={styles.text}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/Login"
            className={homePage === "/Login" ? "nav-link active" : "nav-link"}
            style={styles.text}
          >
            Login
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="d-none">
          <Nav.Link
            href="/Login"
            className={homePage === "/Login" ? "nav-link active" : "nav-link"}
            style={styles.text}
          >
            Logout
          </Nav.Link>
        </Nav.Item>
        <Nav.Item></Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/Profile"
            className={homePage === "/Profile" ? "nav-link active" : "nav-link"}
            style={styles.text}
          >
            Profile
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
      </Nav>
    </>
  );
}

export default Navbar;
