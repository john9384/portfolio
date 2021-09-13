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
            Exercitation minim quis reprehenderit voluptate sunt commodo magna
            id enim eu dolor consequat aliqua qui. Occaecat Lorem sunt non
            cupidatat commodo sit ex ea. Est aute deserunt amet eu in. Est anim
            aliqua aliquip occaecat dolor laborum ea veniam minim minim. Veniam
            Lorem ea voluptate sunt incididunt sit occaecat mollit. Exercitation
            minim quis reprehenderit voluptate sunt commodo magna
          </p>
        </div>
      </div>
      <div className="container about__highlights">
        <div className="highlight__card">
          <img src={Plan} alt="plan" />
          <h2 className="highlight__head">Plan</h2>
          <p className="highlight__note">
            Lorem et do magna enim. Ullamco officia ad aliquip do do veniam
            eiusmod proident enim sunt non ut mollit.
          </p>
        </div>
        <div className="highlight__card">
          <img src={CodeIcon} alt="plan" />
          <h2 className="highlight__head">Code</h2>
          <p className="highlight__note">
            Aliqua in sit ullamco cupidatat veniam consectetur irure nostrud
            proident officia amet velit culpa.
          </p>
        </div>
        <div className="highlight__card">
          <img src={Deploy} alt="plan" />
          <h2 className="highlight__head">Deploy</h2>
          <p className="highlight__note">
            Aliquip Lorem fugiat tempor nostrud magna ipsum consectetur quis
            proident velit non ad officia.
          </p>
        </div>
      </div>
      <a href="/" className="about__cta">
        Resume
      </a>
    </>
  );
}

export default About;
