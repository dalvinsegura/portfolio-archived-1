import NavBar from "../navbar/NavBar";
import ParticleBackground from "../ParticleBackground";
import "./portfolio.scss";

// IMPORT AN IMAGE FOR EACH PROJECT HERE:
import DalvinPortfolioPreviewImg from "../../images/portfolio/preview/dalvin-portfolio.jpg";
import QuotablePreviewImg from "../../images/portfolio/preview/Quotable-preview.jpg";
import PernStackPreviewImg from "../../images/portfolio/preview/pern-stack-website.jpg";
import SimpleSignUpPreviewImg from "../../images/portfolio/preview/simple-sign-up.jpg";
import CountriesSearcherPreviewImg from "../../images/portfolio/preview/countries-searcher.png";
import InstareciboPreviewImg from "../../images/portfolio/preview/instarecibo.jpg";


const ProjectCard = (props) => {
  return (
    <div className="project-card">
      <img
        id="img-project"
        src={props.urlImage}
        alt="Preview of the project"
        onMouseOver={() => {
          document
            .getElementById("img-project")
            .classList.add("zoom-img-hover");
        }}
        onMouseOut={() => {
          document
            .getElementById("img-project")
            .classList.remove("zoom-img-hover");
        }}
      />
      <h3>{props.title}</h3>

      <div className="tech-used-content">
        <p>{props.techUsed}</p>
      </div>

      <div
        className="btn-container"
        style={{
          justifyContent:
            props.previeAvailability === true ? "space-between" : "center",
        }}
      >
        <a
          href={props.codeGithubUrl}
          rel="noreferrer"
          target="_blank"
          alt="Link to project code"
        >
          <i class="fa-brands fa-github github-icon"></i>
          <span className="text-github">Code</span>
        </a>
        <a
          style={{
            display: props.previeAvailability === true ? "block" : "none",
          }}
          rel="noreferrer"
          href={props.previewbUrl}
          target="_blank"
        >
          <i class="fa-solid fa-eye preview-icon"></i>
          <span className="text-preview">Preview</span>
        </a>
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <>
      <div className="portfolio">
        <NavBar className="navbar-fixed" />
        <div className="portfolio-container">
          <h1>Portfolio</h1>
          <div className="projects-container">
            <ProjectCard
              urlImage={QuotablePreviewImg}
              title="Quotable Website (Quote Poster)"
              techUsed="HTML | CSS | JavaScript"
              codeGithubUrl="https://github.com/dalvinsegura/quotable"
              previewbUrl="https://dalvinsegura.github.io/quotable/"
              previeAvailability={true}
            />

            <ProjectCard
              urlImage={PernStackPreviewImg}
              title="To-do List Web App "
              techUsed="PERN Stack ( PostgreSQL, ExpressJS, ReactJS, NodeJS)"
              codeGithubUrl="https://github.com/dalvinsegura/todo-list"
              previewbUrl=""
              previeAvailability={false}
            />

            <ProjectCard
              urlImage={SimpleSignUpPreviewImg}
              title="Simple Sign Up "
              techUsed="HTML | CSS | JavaScript"
              codeGithubUrl="https://github.com/dalvinsegura/simple-sign-up"
              previewbUrl="https://dalvinsegura.github.io/simple-sign-up/"
              previeAvailability={true}
            />

            <ProjectCard
              urlImage={DalvinPortfolioPreviewImg}
              title="Dalvin Portfolio"
              techUsed="ReactJS | SASS | Tsparticles"
              codeGithubUrl="https://github.com/dalvinsegura/portfolio"
              previewbUrl="https://dalvinsegura.herokuapp.com/"
              previeAvailability={false}
            />

            <ProjectCard
              urlImage={CountriesSearcherPreviewImg}
              title="Countries Searcher"
              techUsed="ReactJS | SASS | API Services"
              codeGithubUrl="https://github.com/dalvinsegura/countries-searcher"
              previewbUrl="https://countries-searcher-dalvin.netlify.app/"
              previeAvailability={true}
            />

            <ProjectCard
              urlImage={InstareciboPreviewImg}
              title="Instarecibo (Coming Soon)"
              techUsed="PERN Stack"
              codeGithubUrl="https://github.com/dalvinsegura/countries-searcher"
              previewbUrl="https://countries-searcher-dalvin.netlify.app/"
              previeAvailability={true}
            />
          </div>
        </div>
      </div>
      <ParticleBackground />
    </>
  );
}
