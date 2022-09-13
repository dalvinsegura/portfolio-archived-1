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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              exercitationem tempore in quibusdam natus officia quas aperiam
              corporis error perspiciatis mollitia nemo porro ex, amet ratione
              recusandae facilis distinctio cupiditate.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae magnam laborum deleniti.
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
