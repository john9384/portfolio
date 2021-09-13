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
            <img src={GithubLogo} alt="" />
            <img src={LinkedInLogo} alt="" />
            <img src={MediumLogo} alt="" />
          </div>
        </div>
        <div className="footer__right">
          <ul className="footer__list">
            <li className="footer__item">Github</li>
            <li className="footer__item">LinkedIn</li>
            <li className="footer__item">Download Resume</li>
            <li className="footer__item">Medium</li>
            <li className="footer__item">Replit</li>
          </ul>
        </div>
        <div className="footer__copyright">
          <span>Designed by me &#169; 2020</span>
        </div>
      </div>
    </div>
  );
}
