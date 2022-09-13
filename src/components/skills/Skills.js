import NavBar from "../navbar/NavBar";
import ParticleBackground from "../ParticleBackground";

import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills">
      <NavBar />
      <div className="skills-container">
        <div className="text-content-skills">
          <h1>Skills</h1>
          <p>
          I am currently training as a full stack developer, but foremost my goal is to master ReactJS well.
          </p>
          <p>
          I also could not forget to improve my other skills like the ones I mention here, which is why I have the goal of always keeping practicing them.
          </p>
        </div>

        <div
          onMouseOver={() => {
            const skillIconContent = document.getElementById(
              "skills-icon-content"
            );

            skillIconContent.classList.add("onmouseover");
          }}
          id="skills-icon-content"
          className="skills-icon-content"
        >
          <img
            onMouseOver={() => {
              const skillIcon = document.getElementById("skills-icon");

              skillIcon.classList.add("skills-icon-hover");
              setTimeout(() => {
                skillIcon.classList.remove("skills-icon-hover");
              }, 500);
            }}
            id="skills-icon"
            className="skills-icon"
            src={require("../../images/skills/react.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../../images/skills/nodejs.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../../images/skills/express.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../../images/skills/sql.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../../images/skills/npm.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../../images/skills/sass.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../../images/skills/figma.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../../images/skills/git.svg").default}
            alt="figma icon"
          />
        </div>
      </div>
      <ParticleBackground />
    </div>
  );
}
