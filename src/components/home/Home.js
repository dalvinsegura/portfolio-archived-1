import NavBar from "../navbar/NavBar";
import ParticleBackground from "../ParticleBackground";
import "./home.scss";
import logo from "../../images/logo.png";
// import ParticleBackground from "./ParticleBackground";

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="home-container">
        <div className="home-text-content">
          <h2>
            Hi, <br /> I'm{" "}
            <div
              className="name-text"
              id="name-text-animation"
              onMouseOver={() => {
                document
                  .getElementById("name-text-animation")
                  .classList.add("name-text-animation");
                setTimeout(() => {
                  document
                    .getElementById("name-text-animation")
                    .classList.remove("name-text-animation");
                }, 350);
              }}
            >
              Dalvin Segura,{" "}
            </div>
            <br /> Web Developer and passionate about science
          </h2>
          <p>ReactJS Developer / Entrepreneur / Avid Learner</p>

          <button type="button">
            <a
              href="https://www.linkedin.com/in/dalvin-segura-fern%C3%A1ndez-5030711b2/"
              alt="Linkedin Link"
            >
              LinkedIn
            </a>
          </button>
        </div>

        <div className="big-logo-home">
          <img
            id="big-logo-home"
            src={logo}
            alt="Big logo"
            onLoad={() => {
              document
                .getElementById("big-logo-home")
                .classList.add("big-logo-home-animation");
            }}
          />
        </div>
      </div>
      <ParticleBackground />
    </div>
  );
}
