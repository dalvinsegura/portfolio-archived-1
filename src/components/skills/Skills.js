import NavBar from "../navbar/NavBar";
import ParticleBackground from "../ParticleBackground";

import "./skills.scss";

import FigmaIcon from "../../images/skills/figma.svg";
import IllustratorIcon from "../../images/skills/adobe-illustrator.svg";
import PhotoshopIcon from "../../images/skills/adobe-photoshop.svg";
import CssIcon from "../../images/skills/css3.svg";
import ExpressIcon from "../../images/skills/express.svg";
import GitIcon from "../../images/skills/git.svg";
import HtmlIcon from "../../images/skills/html.svg";
import JavaScriptIcon from "../../images/skills/javascript.svg";
import NodejsIcon from "../../images/skills/nodejs.svg";
import NpmIcon from "../../images/skills/npm.svg";
import ReactjsIcon from "../../images/skills/react.svg";
import SassIcon from "../../images/skills/sass.svg";
import SqlIcon from "../../images/skills/sql.svg";

const IconSkill = (props) => {
  return (
    <img
      onMouseOver={() => {
        const skillIcon = document.getElementById("skills-icon");

        skillIcon.classList.add("skills-icon-hover");
        setTimeout(() => {
          skillIcon.classList.remove("skills-icon-hover");
        }, 1500);
      }}
      id="skills-icon"
      className="skills-icon"
      src={props.srcUrl}
      alt={props.alt}
    />
  );
};

export default function Skills() {
  return (
    <div className="skills">
      <NavBar />
      <div className="skills-container">
        <div className="text-content-skills">
          <h1>Skills</h1>
          <p>
            I am currently training as a full stack developer, but foremost my
            goal is to master ReactJS well.
          </p>
          <p>
            I also could not forget to improve my other skills like the ones I
            mention here, which is why I have the goal of always keeping
            practicing them.
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
          <IconSkill srcUrl={HtmlIcon} alt="HTML Icon" />
          <IconSkill srcUrl={CssIcon} alt="CSS Icon" />
          <IconSkill srcUrl={SassIcon} alt="SASS Icon" />
          <IconSkill srcUrl={FigmaIcon} alt="Figma Icon" />
          <IconSkill srcUrl={PhotoshopIcon} alt="Photoshop Icon" />
          <IconSkill srcUrl={IllustratorIcon} alt="Illustrator Icon" />
          <IconSkill srcUrl={GitIcon} alt="Git Icon" />
          <IconSkill srcUrl={JavaScriptIcon} alt="JavaScript Icon" />
          <IconSkill srcUrl={NodejsIcon} alt="NodeJS Icon" />
          <IconSkill srcUrl={SqlIcon} alt="SQL Server Icon" />
          <IconSkill srcUrl={ReactjsIcon} alt="ReactJS Icon" />
          <IconSkill srcUrl={ExpressIcon} alt="ExpressJS Icon" />
          <IconSkill srcUrl={NpmIcon} alt="NPM Icon" />
        </div>
      </div>
      <ParticleBackground />
    </div>
  );
}
