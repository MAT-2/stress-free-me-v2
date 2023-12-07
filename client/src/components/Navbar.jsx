// import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";

function Navbar() {
  const homePage = useLocation().pathname;

  return (
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link
          href="/"
          className={homePage === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/Login"
          className={homePage === "/Login" ? "nav-link active" : "nav-link"}
        >
          Login
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="invisible">
        <Nav.Link
          href="/Login"
          className={homePage === "/Login" ? "nav-link active" : "nav-link"}
        >
          Logout
        </Nav.Link>
      </Nav.Item>
      <Nav.Item></Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/Profile"
          className={homePage === "/Profile" ? "nav-link active" : "nav-link"}
        >
          Profile
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/Survey"
          className={homePage === "/Survey" ? "nav-link active" : "nav-link"}
        >
          Survey
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/Results"
          className={homePage === "/Results" ? "nav-link active" : "nav-link"}
        >
          Results
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
