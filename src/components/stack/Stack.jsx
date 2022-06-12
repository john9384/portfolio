import React from "react";
import "./Stack.css";
import "./StackTab.css";
import "./StackMobile.css";

import JavaScript from "../../assets/images/javascript-logo.png";
import Typescript from "../../assets/images/typescript-logo.png";
import Python from "../../assets/images/python-logo.png";
import ReactLogo from "../../assets/images/react-logo.svg";
import Angular from "../../assets/images/angular-logo.png";
import Redux from "../../assets/images/redux-logo.png";
import NodeJs from "../../assets/images/nodejs-logo.png";
import Flask from "../../assets/images/flask-logo.png";
import Django from "../../assets/images/django-logo.png";
import Databases from "../../assets/images/databases-logo.png";
import Git from "../../assets/images/git-logo.png";
import Docker from "../../assets/images/docker-logo.png";
import ScrollAnimation from "react-animate-on-scroll";

export default function Stack() {
  return (
    <div className="stack">
      <div className="container">
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={100}
          className="stack__card"
        >
          <img src={JavaScript} alt="" />
          <span>Javasrcipt</span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={100}
          className="stack__card"
        >
          <img src={Typescript} alt="typescript" />
          <span>Typesrcipt</span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={900}
          className="stack__card"
        >
          <img src={Python} alt="python" />
          <span>Python</span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={800}
          className="stack__card"
        >
          <img src={ReactLogo} alt="react" />
          <span>React</span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={700}
          className="stack__card"
        >
          <img src={Angular} alt="angular" />
          <span>Angular</span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={500}
          className="stack__card"
        >
          <img src={Redux} alt="redux" />
          <span>Redux</span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={400}
          className="stack__card"
        >
          <img src={NodeJs} alt="nodejs" />
          <span>NodeJS</span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={600}
          className="stack__card"
        >
          <img src={Flask} alt="flask" />
          <span>Flask</span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={300}
          className="stack__card"
        >
          <img src={Django} alt="django" />
          <span>Django</span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={200}
          className="stack__card"
        >
          <img src={Databases} alt="" />
          <span>Databases</span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={850}
          className="stack__card"
        >
          <img src={Git} alt="git" />
          <span>Git</span>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          delay={150}
          className="stack__card"
        >
          <img src={Docker} alt="docker" />
          <span>Docker</span>
        </ScrollAnimation>
      </div>
    </div>
  );
}
