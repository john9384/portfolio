import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <h1 className="navbar__logo">
          <span>J</span>
          <span>&nbsp;</span>
          <span>D</span>
        </h1>
        <h2 className="footer__note">
          Learning &#38; growing one day at a time
        </h2>
        <div className="footer__link">
          <ul className="link-list link-list__one">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
          <ul className="link-list link-list__one">
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
            <li>Link</li>
          </ul>
        </div>
        <span>Designed by me &#169; 2020</span>
      </div>
    </div>
  );
}
