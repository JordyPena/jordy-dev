import React, { Component } from "react";
import "../styling/Projects.css";

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
        Created with responsive web design. Developed dynamic components that render constructed barns, or build yourself kits. Created dynamic summaries
        for each kit, and developed pinch and zoom blueprints.
      </div>
    );

    const display2 = (
      <div className="sum-txt">
        Pokémon Climate utilizes a weather API, And allows Pokemon fans to find
        Pokemon in the wild based on weather conditions. Developed dynamic
        components that rendered Pokemon based on weather precipitation and
        cloud coverage.
      </div>
    );

    const display3 = (
      <div className="sum-txt">
        FindMyLang uses a personally created Database and a Google-react Npm
        package. To display T-mobile stores in Dallas, Tx. Developed a Database
        for users to create an account, login, add locations to favorites and
        remove locations from favorites. Developed dynamic endpoints for all
        routes in my RestfulAPI. Developed dynamic markers on a google map along
        with directions from your location.
      </div>
    );

    const display4 = (
      <div className="sum-txt">
        Quick Fit utilizes Youtube’s API and a workout API. It displays workouts
        based on the number of desired workouts selected and YouTube videos
        based on the body part selected. Developed dynamic workouts and workout
        videos by using the users input.
      </div>
    );
    return (
      <>
        <div className="project-background">
          <div className="project">
            <div className="pokemon">
              <a
                href="https://construction-freelance.vercel.app/"
                target="_blank"
                className="project-items"
              >
                <h1 className="project-items">Straub Construction LLC</h1>
              </a>

              <a
                href="https://construction-freelance.vercel.app/"
                target="_blank"
              >
                <div className="project-img construction"></div>
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
                {display1}
              </div>
            </div>
          </div>
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
              >
                <div className="project-img pokeclimate"></div>
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
                {display2}
              </div>
            </div>
          </div>

          <div className="project">
            <div className="find-my">
              <a
                href="https://find-my-lang-app.vercel.app/"
                target="_blank"
                className="project-items"
              >
                <h1 className="project-items">Find My Lang</h1>
              </a>

              <a href="https://find-my-lang-app.vercel.app/" target="_blank">
                <div className="project-img findmy"></div>
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

                {display3}
              </div>
            </div>
          </div>

          <div className="project">
            <div className="quick">
              <a
                href="https://jordypena.github.io/Workout-App/"
                target="_blank"
                className="project-items"
              >
                <h1 className="project-items">Quick-Fit</h1>
              </a>

              <a
                href="https://jordypena.github.io/Workout-App/"
                target="_blank"
              >
                <div className="project-img quickfit"></div>
              </a>
              <div className="test">
                <a
                  href="https://github.com/JordyPena/Workout-App"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>

                <p className="project-items">
                  Frontend App built with: JavaScript, jQuery, API, HTML/CSS,
                  VSCode, git, Github
                </p>

                {display4}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
