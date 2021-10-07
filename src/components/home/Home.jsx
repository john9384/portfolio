import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Home.css";
import "./HomeTab.css";
import "./HomeMobile.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../navbar/Navbar";
import { Link } from "react-scroll";

function Home() {
  return (
    <>
      <header className="header" id="section-home">
        <Navbar />

        <div className="container header__welcome">
          <h1 className="header__name">John Damilola Ogungbure</h1>
          <h2 className="header__title">Software Engineer</h2>
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            offset={-60}
            duration={1000}
            className="header__welcome-btn"
          >
            Read More
          </Link>
        </div>

        <Link
          to="section-portfolio"
          spy={true}
          smooth={true}
          offset={-60}
          duration={1000}
          className="header__cta"
        >
          <span className="header__cta--text">View Portfolio</span>
          <FontAwesomeIcon icon={faChevronDown} className="header__cta--icon" />
        </Link>
      </header>
    </>
  );
}
export default Home;
