import React from "react";
import "./footer.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faGithub,faInstagram,faTwitter,faLinkedin} from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
  return (
    <div className="footer">
      <div className="footerbox">
        <div className="social">
          <ul>
              <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
              <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
              <a href="https://twitter.com/"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
              <a href="https://github.com/"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
              <a href="https://www.linkedin.com/feed/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
             
          </ul>
        </div>
        <div className="copy">
          <p>Copyright2021 @ DeepOcean. All rights reserved</p>
          <p>DeepOcean website related to Madhao Corporation pvt.LTD.</p>
        </div>
      </div>
    </div>
  );
}
