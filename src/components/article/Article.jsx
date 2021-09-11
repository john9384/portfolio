import React from "react";
import "./Article.css";
import HeadImg from "../../assets/images/article-img.jpeg";

export default function Article() {
  return (
    <div className="article" id="section-article">
      <h2 className="article__head">Article</h2>
      <div className="container">
        <div className="article__img">
          <img src={HeadImg} alt="Code.jgp by Ilya Pavlov" />
        </div>
        <div className="article__sum">
          <h2 className="article__sum--title">
            Learning a programming language
          </h2>
          <p className="article__sum--para">
            Computers only understand binary in series of 0’s and 1’s arranged
            in groups of eight digits, called bytes, so writing programs in a
            binary language is enough to drive one insane. Programming languages
            help us write codes that can be translated into binary expressions
            by compilers, eliminating the complexity. Also, making it possible
            for almost anyone to create or modify computer programs. ...
          </p>
          <a href="/" className="article__sum--cta">
            Read Full Article <span>&#8594;</span>
          </a>
        </div>
      </div>
      <a href="/" className="article__cta">
        View Medium Profile
      </a>
    </div>
  );
}
