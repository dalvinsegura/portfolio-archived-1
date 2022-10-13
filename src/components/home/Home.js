import NavBar from "../navbar/NavBar";
import ParticleBackground from "../ParticleBackground";
import "./home.scss";
import logo from "../../images/logo.png";
import drFlag from "../../images/dr-flag.png";
// import ParticleBackground from "./ParticleBackground";

export default function Home() {
  const ButtonCT = (props) => {
    return (
      <button type="button" className={props.fillBtn ? "fill-btn" : ""}>
        <a
          href={props.hrefLink}
          style={props.fillBtn ? { color: "#eee" } : {}}
          alt={`Link to ${props.value}`}
        >
          {props.value}
        </a>
      </button>
    );
  };

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
            <br /> Web Developer and passionate about science{" "}
            <img
              className="dr-flag-icon"
              src={drFlag}
              alt="Dominican Republic flag"
            />
          </h2>
          <p>ReactJS Developer / Entrepreneur / Avid Learner</p>

          <div className="btn-container">
            <ButtonCT
              hrefLink="https://www.linkedin.com/in/dalvin-segura-fern%C3%A1ndez-5030711b2/"
              value="LinkedIn"
              fillBtn={false}
            />

            <ButtonCT
              hrefLink="https://www.dropbox.com/s/d7k254h10x3tzkq/Dalvin%20Segura%20CV%20Tech.pdf?dl=0"
              value="Download CV"
              fillBtn={true}
            />
          </div>
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
