import React, { Component } from "react";
import "../styling/Projects.css";
import Straub from "../images/Straub.png";
import Straub2 from "../images/Straub2.png";
import Tcg from "../images/TCG-iphone.png";
import Tcg2 from "../images/TCG-ipad.png";
import Climate from "../images/Climate-iphone.png";
import Climate2 from "../images/Climate-ipad.png";
import Find from "../images/Find.png";
import Find2 from "../images/Find2.png";
class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      summary1: false,
      summary2: false,
      summary3: false,
      summary4: false,
    };
  }

  handleShow1 = () => {
    if (this.state.summary1) {
      return this.setState({
        summary1: false,
      });
    }
    this.setState({
      summary1: true,
    });
  };

  handleShow2 = () => {
    if (this.state.summary2) {
      return this.setState({
        summary2: false,
      });
    }
    this.setState({
      summary2: true,
    });
  };

  handleShow3 = () => {
    if (this.state.summary3) {
      return this.setState({
        summary3: false,
      });
    }
    this.setState({
      summary3: true,
    });
  };

  handleShow4 = () => {
    if (this.state.summary4) {
      return this.setState({
        summary4: false,
      });
    }
    this.setState({
      summary4: true,
    });
  };

  render() {
    const display1 = (
      <div className="sum-txt">
       
      </div>
    );

    const display2 = (
      <div className="sum-txt">
        Created with responsive web design. Developed dynamic components that
        render constructed barns, or build yourself kits. Created dynamic
        summaries for each kit, and developed pinch and zoom blueprints.
      </div>
    );

    const display3 = (
      <div className="sum-txt">
        Pokémon Climate utilizes a weather API, And allows Pokemon fans to find
        Pokemon in the wild based on weather conditions. Developed dynamic
        components that rendered Pokemon based on weather precipitation and
        cloud coverage.
      </div>
    );

    const display4 = (
      <div className="sum-txt">
        FindMyLang uses a personally created Database and a Google-react Npm
        package. To display T-mobile stores in Dallas, Tx. Developed a Database
        for users to create an account, login, add locations to favorites and
        remove locations from favorites. Developed dynamic endpoints for all
        routes in my RestfulAPI. Developed dynamic markers on a google map along
        with directions from your location.
      </div>
    );
    return (
        <div className="project-background">
          {/* project 1 */}
          <div className="project">
            <div className="pokemon">
              <a
                href="https://tcg.vercel.app/"
                target="_blank"
                className="project-items"
              >
                <h1 className="project-items">TCG GURU CLONE</h1>
              </a>

              <a
                href="https://tcg.vercel.app/"
                target="_blank"
                className="construction-link"
              >
                <div>
                  <img src={Tcg} alt="construction" className="straub-img"></img>
                </div>
                <div>
                  <img src={Tcg2} alt="construction" className="straub-img"></img>
                </div>
              </a>
              <div className="test">
                <a
                  href="https://github.com/JordyPena/tcg"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>

                <p className="project-items">
                  Front end app built with: React.js and HTML/CSS.
                </p>
                {display1}
              </div>
            </div>
          </div>
          {/* project 2 */}
          <div className="project">
            <div className="pokemon">
              <a
                href="https://construction-freelance.vercel.app/"
                target="_blank"
                className="project-items"
              >
                <h1 className="project-items">Freelance Demo</h1>
              </a>

              <a
                href="https://construction-freelance.vercel.app/"
                target="_blank"
                className="construction-link"
              >
                <div>
                  <img src={Straub} alt="construction" className="straub-img"></img>
                </div>
                <div>
                  <img src={Straub2} alt="construction" className="straub-img"></img>
                </div>
              </a>
              <div className="test">
                <a
                  href="https://github.com/JordyPena/construction-freelance"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>

                <p className="project-items">
                  Front end app built with: React.js and HTML/CSS.
                </p>
                {display2}
              </div>
            </div>
          </div>
{/* project 3 */}
<div className="project">
            <div className="pokemon">
              <a
                href="https://pokemonclimate-client.vercel.app/login"
                target="_blank"
                className="project-items"
              >
                <h1 className="project-items">Pokemon Climate</h1>
              </a>

              <a
                href="https://pokemonclimate-client.vercel.app/login"
                target="_blank"
                className="construction-link"
              >
               <div>
                  <img src={Climate} alt="construction" className="straub-img"></img>
                </div>
                <div>
                  <img src={Climate2} alt="construction" className="straub-img"></img>
                </div>
              </a>
              <div className="test">
                <a
                  href="https://github.com/JordyPena/pokemonClimate"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>

                <p className="project-items">
                  Fullstack app built with: React.js, Node.js, Express,
                  PostgreSQL, and HTML/CSS.
                </p>
                {display3}
              </div>
            </div>
          </div>
{/* project 4 */}
<div className="project">
            <div className="find-my">
              <a
                href="https://find-my-lang-app.vercel.app/"
                target="_blank"
                className="project-items"
              >
                <h1 className="project-items">Find My Lang</h1>
              </a>

              <a href="https://find-my-lang-app.vercel.app/" target="_blank"
              className="construction-link">
              <div>
                  <img src={Find} alt="construction" className="straub-img"></img>
                </div>
                <div>
                  <img src={Find2} alt="construction" className="straub-img"></img>
                </div>
              </a>
              <div className="test">
                <a
                  href="https://github.com/JordyPena/FindMyLang-app"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>

                <p className="project-items">
                  Fullstack app built with: React.js, Node.js, Express,
                  PostgreSQL, and HTML/CSS.
                </p>

                {display4}
              </div>
            </div>
          </div>

        </div>
    );
  }
}

export default Projects;
