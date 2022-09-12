import NavBar from "./NavBar";
import ParticleBackground from "./ParticleBackground";

import "../styles/skills.scss";

export default function Skills() {
  return (
    <div className="skills">
      <NavBar />
      <div className="skills-container">
        <div className="text-content-skills">
          <h1>Skills</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum eos
            facere, unde eius amet minima laboriosam reprehenderit accusamus
            quisquam quidem nisi voluptatum, ipsam consequatur quia odio beatae
            quas repellat earum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            exercitationem illum consequatur nobis ut temporibus neque ratione
            natus suscipit maiores.
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
            src={require("../images/skills/react.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../images/skills/nodejs.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../images/skills/express.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../images/skills/sql.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../images/skills/npm.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../images/skills/sass.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../images/skills/figma.svg").default}
            alt="figma icon"
          />
          <img
            className="skills-icon"
            src={require("../images/skills/git.svg").default}
            alt="figma icon"
          />
        </div>
      </div>
      <ParticleBackground />
    </div>
  );
}
