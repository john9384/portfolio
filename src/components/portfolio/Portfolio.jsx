import React from "react";
import "./Portfolio.css";
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
            delay={200}
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
            delay={300}
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
