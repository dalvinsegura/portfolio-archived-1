import NavBar from "./NavBar";
import ParticleBackground from "./ParticleBackground";
import "../styles/home.scss";
import logo from "../images/logo.png";
// import ParticleBackground from "./ParticleBackground";

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      <div className="home-container">
        <div className="home-text-content">
          <h2>Hi, <br/> I'm Dalvin Segura, <br/> Web Developer and passionate about science</h2>
          <p>ReactJS Developer / Entrepreneur / Avid Learner</p>

          <button type="button">
            <a href="https://www.linkedin.com/in/dalvin-segura-fern%C3%A1ndez-5030711b2/" alt="Linkedin Link">
              LinkedIn
            </a>
          </button>
        </div>

        <div className="big-logo-home">
          <img src={logo} alt="Big logo" />
        </div>
      </div>
      <ParticleBackground />
    </div>
  );
}
