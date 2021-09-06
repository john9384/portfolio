import React from "react";
import "./Portfolio.css";
import TestImg from "../../assets/images/article-img.jpeg";
export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <div className="portfolio__list">
          <div className="portfolio__card">
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
          </div>
          <div className="portfolio__card">
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
          </div>
          <div className="portfolio__card">
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
          </div>
          <div className="portfolio__card">
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
          </div>
          <div className="portfolio__card">
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
          </div>
          <div className="portfolio__card">
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
          </div>
        </div>
      </div>
    </div>
  );
}
