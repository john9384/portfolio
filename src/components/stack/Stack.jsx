import React from "react";
import "./Stack.css";
import JavaScript from "../../assets/images/javascript-logo.png";
import Typescript from "../../assets/images/typescript-logo.png";
import Python from "../../assets/images/python-logo.png";
import ReactLogo from "../../assets/images/react-logo.svg";
import Angular from "../../assets/images/angular-logo.png";
import Redux from "../../assets/images/redux-logo.jpg";
import NodeJs from "../../assets/images/nodejs-logo.png";
import Flask from "../../assets/images/flask-logo.png";
import Django from "../../assets/images/django-logo.png";
import Databases from "../../assets/images/databases-logo.png";
import Git from "../../assets/images/git-logo.png";
import Docker from "../../assets/images/docker-logo.png";

export default function Stack() {
  return (
    <div className="stack">
      <div className="container">
        <div className="stack__card">
          <img src={JavaScript} alt="" />
          <span>Javasrcipt</span>
        </div>
        <div className="stack__card">
          <img src={Typescript} alt="typescript" />
          <span>Typesrcipt</span>
        </div>
        <div className="stack__card">
          <img src={Python} alt="python" />
          <span>Python</span>
        </div>
        <div className="stack__card">
          <img src={ReactLogo} alt="react" />
          <span>React</span>
        </div>
        <div className="stack__card">
          <img src={Angular} alt="angular" />
          <span>Angular</span>
        </div>
        <div className="stack__card">
          <img src={Redux} alt="redux" />
          <span>Redux</span>
        </div>
        <div className="stack__card">
          <img src={NodeJs} alt="nodejs" />
          <span>NodeJS</span>
        </div>
        <div className="stack__card">
          <img src={Flask} alt="flask" />
          <span>Flask</span>
        </div>
        <div className="stack__card">
          <img src={Django} alt="django" />
          <span>Django</span>
        </div>
        <div className="stack__card">
          <img src={Databases} alt="" />
          <span>Databases</span>
        </div>
        <div className="stack__card">
          <img src={Git} alt="git" />
          <span>Git</span>
        </div>
        <div className="stack__card">
          <img src={Docker} alt="docker" />
          <span>Docker</span>
        </div>
      </div>
    </div>
  );
}
