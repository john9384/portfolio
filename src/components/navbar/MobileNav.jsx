import React from "react";
import { Link } from "react-scroll";

const Mobilenav = () => {
  return (
    <>
      <ul className="mobile-nav__list">
        <li className="mobile-nav__item">
          <Link
            to="section-home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
          >
            Home
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link
            to="section-about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            About Me
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link
            to="section-portfolio"
            spy={true}
            smooth={true}
            offset={-30}
            duration={1000}
          >
            Portfolio
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link
            to="section-article"
            spy={true}
            smooth={true}
            offset={-50}
            duration={1000}
          >
            Article
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link
            to="section-contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={1000}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Mobilenav;
