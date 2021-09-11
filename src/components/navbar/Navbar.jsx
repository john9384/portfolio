import React from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar() {
  const handleScroll = () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 1) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    if (window.scrollY > 500) {
      navbar.classList.add("navbar-bg");
    } else {
      navbar.classList.remove("navbar-bg");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className="navbar">
      <div className="container">
        <h1 className="navbar__logo">
          <span>J</span>
          <span>&nbsp;</span>
          <span>D</span>
        </h1>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                activeClass="active"
                to="section-home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="section-about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
              >
                About Me
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="section-portfolio"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="section-article"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
              >
                Article
              </Link>
            </li>
            <li className="nav__item">
              <Link
                activeClass="active"
                to="section-contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
