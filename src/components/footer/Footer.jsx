import React from "react";
import "./Footer.css";
import "./FooterTab.css";
import "./FooterMobile.css";

import GithubLogo from "../../assets/svg/github-logo.svg";
import LinkedInLogo from "../../assets/svg/linkedin.svg";
import MediumLogo from "../../assets/svg/medium.svg";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__left">
          <span className="footer__logo">
            <span>J</span>
            <span>&nbsp;</span>
            <span>D</span>
          </span>
          <span className="footer__note">
            Learning &#38; growing one day at a time
          </span>
          <div className="footer__icons">
            <a
              href="https://github.com/john9384"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GithubLogo} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInLogo} alt="" />
            </a>
            <a
              href="https://medium.com/@john_damilola"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={MediumLogo} alt="" />
            </a>
          </div>
        </div>
        <div className="footer__right">
          <ul className="footer__list">
            <li className="footer__item">
              <a
                href="https://github.com/john9384"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://drive.google.com/file/d/1j0EkPjV6ze3vHRsT7-P1uu5AMQedGBwu/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://medium.com/@john_damilola"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://replit.com/@JohnOgungbure"
                target="_blank"
                rel="noopener noreferrer"
              >
                Replit
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__copyright">
          <span>Designed by me &#169; 2020</span>
        </div>
      </div>
    </div>
  );
}
