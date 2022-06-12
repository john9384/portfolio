import React from "react";
import "./Portfolio.css";
import "./PortfolioTab.css";
import "./PortfolioMobile.css";

import KampusKago from "../../assets/images/kampuskago.jpg";
import Prolink from "../../assets/images/prolinkup.PNG";
import MuseMonitor from "../../assets/images/muse_monitor.jpg";

import TestImg from "../../assets/images/article-img.jpeg";
import ScrollAnimation from "react-animate-on-scroll";
export default function Portfolio() {
  return (
    <div className="portfolio" id="section-portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio__list">
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            delay={100}
            className="portfolio__card"
          >
            <img src={Prolink} alt="" />
            <div className="portfolio__card-overlay"></div>
            <div className="portfolio__card-top">
              <h2>Prolinkup</h2>
              <p>
                A social web app written with JavaScript. Implemented JWT
                authentication, CRUD, and File uploads
              </p>
              <p>Tech stack: ReactJs, Redux, NodeJS, MongoDB.</p>
              <a href="/">View Site</a>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            delay={200}
            className="portfolio__card"
          >
            <img src={KampusKago} alt="" />
            <div className="portfolio__card-overlay"></div>
            <div className="portfolio__card-top">
              <h2>KampusKago</h2>
              <p>
                An e-commerce platform that helps connect buyers to sellers.
                Implmented user authentication, CRUD, File uploads etc.
              </p>
              <p>Tech stack: PHP, Html, CSS, SCSS, JavaScript, MySql.</p>
              <a href="/">View Site</a>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            delay={300}
            className="portfolio__card"
          >
            <img src={MuseMonitor} alt="" />
            <div className="portfolio__card-overlay"></div>
            <div className="portfolio__card-top">
              <h2>Motion Intent Detector</h2>
              <p>
                A machine learning program that predicts motion from brainwave
                signals.
              </p>
              <p>
                Tech stack: Python, OSC server, Jupyter, Scikit-learn, numpy,
                pandas, pygame.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            delay={400}
            className="portfolio__card"
          >
            <img src={TestImg} alt="" />
            <div className="portfolio__card-overlay"></div>
            <div className="portfolio__card-top">
              <p>
                Fugiat est fugiat pariatur in irure consequat culpa nulla minim
                fugiat Lorem ipsum non laboris. Quis voluptate dolor consectetur
                consectetur quis occaecat qui quis pariatur quis sunt aut
              </p>
              <a href="/">View Site</a>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            delay={500}
            className="portfolio__card"
          >
            <img src={TestImg} alt="" />
            <div className="portfolio__card-overlay"></div>
            <div className="portfolio__card-top">
              <p>
                Fugiat est fugiat pariatur in irure consequat culpa nulla minim
                fugiat Lorem ipsum non laboris. Quis voluptate dolor consectetur
                consectetur quis occaecat qui quis pariatur quis sunt aut
              </p>
              <a href="/">View Site</a>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="fadeIn"
            animateOut="fadeOut"
            delay={600}
            className="portfolio__card"
          >
            <img src={TestImg} alt="" />
            <div className="portfolio__card-overlay"></div>
            <div className="portfolio__card-top">
              <p>
                Fugiat est fugiat pariatur in irure consequat culpa nulla minim
                fugiat Lorem ipsum non laboris. Quis voluptate dolor consectetur
                consectetur quis occaecat qui quis pariatur quis sunt aut
              </p>
              <a href="/">View Site</a>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
}
