import Nav from "react-bootstrap/Nav";
import { useLocation } from "react-router-dom";

import xLogo from '../../public/x-logo';
import githubLogo from "../../public/github-logo";
import instagramLogo from "../../public/instagram-logo";
import facebookLogo from "../../public/facebook-logo";

function Footer() {
  const homePage = useLocation().pathname;

  return (
    <Nav className="justify-content-end" activeKey="/home">

        <div>
            <a href="https://github.com/MAT-2/stress-free-me-v2">
                <img src={githubLogo} alt="Github Logo"></img>
            </a>
        </div>
        <div>
            <a href="https://instagram.com">
                <img src={instagramLogo} alt="Instagram Logo"></img>
            </a>
        </div>
        <div>
            <a href="https://twitter.com">
                <img src={xLogo} alt="X Logo"></img>
            </a>
        </div>
        <div>
            <a href="https://facebook.com">
                <img src={facebookLogo} alt="Facebook Logo"></img>
            </a>
        </div>

    </Nav>
  );
};

export default Footer();