import NavBar from "../navbar/NavBar";
import ParticleBackground from "../ParticleBackground";
import "./portfolio.scss";

// IMPORT AN IMAGE FOR EACH PROJECT HERE:
import macdonaldsPreviewImg from "../../images/portfolio/macdonalds-website.png";

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

      <div className="btn-container">
        <a
          href={props.codeGithubUrl}
          target="_blank"
          alt="Link to project code"
        >
          <i class="fa-brands fa-github github-icon"></i>
          <span className="text-github">Code</span>
        </a>
        <a href={props.previewbUrl} target="_blank">
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
        <NavBar />
        <div className="portfolio-container">
          <h1>Portfolio</h1>
          <div className="projects-container">
            <ProjectCard
              urlImage={macdonaldsPreviewImg}
              title="MacDonald's Website"
              techUsed="ReactJS | SASS | Tsparticles | NodeJS | ExpressJS | SQL Server"
              codeGithubUrl="https://github.com/dalvinsegura/portfolio"
              previewbUrl="https://github.com/dalvinsegura"
            />

<ProjectCard
              urlImage={macdonaldsPreviewImg}
              title="MacDonald's Website"
              techUsed="ReactJS | SASS | Tsparticles | NodeJS | ExpressJS | SQL Server"
              codeGithubUrl="https://github.com/dalvinsegura/portfolio"
              previewbUrl="https://github.com/dalvinsegura"
            />

<ProjectCard
              urlImage={macdonaldsPreviewImg}
              title="MacDonald's Website"
              techUsed="ReactJS | SASS | Tsparticles | NodeJS | ExpressJS | SQL Server"
              codeGithubUrl="https://github.com/dalvinsegura/portfolio"
              previewbUrl="https://github.com/dalvinsegura"
            />

<ProjectCard
              urlImage={macdonaldsPreviewImg}
              title="MacDonald's Website"
              techUsed="ReactJS | SASS | Tsparticles | NodeJS | ExpressJS | SQL Server"
              codeGithubUrl="https://github.com/dalvinsegura/portfolio"
              previewbUrl="https://github.com/dalvinsegura"
            />

<ProjectCard
              urlImage={macdonaldsPreviewImg}
              title="MacDonald's Website"
              techUsed="ReactJS | SASS | Tsparticles | NodeJS | ExpressJS | SQL Server"
              codeGithubUrl="https://github.com/dalvinsegura/portfolio"
              previewbUrl="https://github.com/dalvinsegura"
            />
          </div>
        </div>
      </div>
      <ParticleBackground />
    </>
  );
}
