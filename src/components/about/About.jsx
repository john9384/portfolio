import React from "react";
import "./About.css";
import "./AboutTab.css";
import "./AboutMobile.css";
import Plan from "../../assets/svg/planning.svg";
import CodeIcon from "../../assets/svg/code.svg";
import Deploy from "../../assets/svg/cloud-computing.svg";
function About() {
  return (
    <>
      <div className="about" id="section-about">
        <div className="container">
          <h1 className="about__head">About Me</h1>
          <p className="about__para">
            Software engineer and tech enthusiast, with over three years of
            intense experience and training in JavaScript, Python and its
            ecosystem. I have worked with teams, building enterprise solutions
            including marketplace, escrow trading platform, and chat system, to
            mention a few.
          </p>
        </div>
      </div>
      <div className="container about__highlights">
        <div className="highlight__card">
          <img src={Plan} alt="plan" />
          <h2 className="highlight__head">Plan</h2>
          <p className="highlight__note">
            Plan the process from the start to the end, keeping to scheduled
            time in order to deliver an set time.
          </p>
        </div>
        <div className="highlight__card">
          <img src={CodeIcon} alt="plan" />
          <h2 className="highlight__head">Code</h2>
          <p className="highlight__note">
            Translate design to code, Adhering accessibility standards and best
            practizing.
          </p>
        </div>
        <div className="highlight__card">
          <img src={Deploy} alt="plan" />
          <h2 className="highlight__head">Deploy</h2>
          <p className="highlight__note">
            Deploy to different cloud services including Microsoft Azure, Google
            Cloud Platform, Amazon Web Service
          </p>
        </div>
      </div>
      <a
        href="https://drive.google.com/file/d/1j0EkPjV6ze3vHRsT7-P1uu5AMQedGBwu/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="about__cta"
      >
        Resume
      </a>
    </>
  );
}

export default About;
