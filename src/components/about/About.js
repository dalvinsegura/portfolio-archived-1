import React from "react";
import NavBar from "../navbar/NavBar";
import "./about.scss";
import ParticleBackground from "../ParticleBackground";

export default function About() {
  return (
    <>
      <div className="about">
        <NavBar />
        <div className="about-container">
          <div className="text-content-about">
            <h1>About</h1>
            <p>
            I am a self-taught person who started learning programming at the age of 14 with HTML and CSS. I identify myself as a person with critical and analytical thinking.
            </p>
            <p>
            I am always constantly learning about technologies that can make my job easier as a web developer or about finance, marketing and business.
            </p>
          </div>

          <div className="programmer-illustration-content">
            <img
              className="floating"
              src={
                require("../../images/about/programmer-illustration.svg")
                  .default
              }
              alt="Programmer Illustration"
            />
          </div>
        </div>
      </div>
      <ParticleBackground />
    </>
  );
}
