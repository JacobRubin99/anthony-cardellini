import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer class="footer-container">
        <div class="social-container">
          <a
            href="https://twitter.com/a_cardellini?lang=en"
            aria-label="Anthony Cardellini twitter"
            className="icons social"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/anthonycardellini/?hl=en"
            aria-label="Anthony Cardellini instagram"
            className="icons social"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href={`mailto:example@gmail.com`}
            aria-label="Anthony Cardellini email"
            className="icons social"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
        </div>
        <h4>Copyright &copy; 2022 by Jacob "Deez" Rubin</h4>
      </footer>
    );
  }
}
