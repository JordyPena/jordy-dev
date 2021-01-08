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
        Pokemon Climate allows kids to explore their interest in meteorology by
        looking for different climates in the world and using pokemon to make it
        fun. In the search bar, users can type in a zip code, and get the
        current weather of that city along with a pokemon sprite to demonstrate
        pokemon that could be found in that environment. You must create an
        account before you can use the website.
      </div>
    );

    const display2 = (
      <div className="sum-txt">
        FindMyLang allows users to find T-Mobile stores in Dallas, TX that have
        representatives that speak the language they've selected. Users can
        create an account to add stores to a personalized list of favorites.
      </div>
    );

    const display3 = (
      <div className="sum-txt">
        Quick-Fit allows users to search for several workouts related to a body
        part of their choice. Along with a list of workouts, Quick-Fit also
        provides 5 video workouts via the YouTube API. I built this app for
        people that want to get fit. Quick-Fit is an ideal app for people who
        may be strapped for time and want to find new and fun workouts without
        the need to plan a routine.
      </div>
    );

    const display4 = (
      <div className="sum-txt">
        Frenchie Quiz is a fun trivia game about French Bulldogs. Users are
        presented with multiple-choice questions. If you select the correct
        answer, an image will render displaying a happy dog. If incorrect, an
        image of a sad dog will appear. Frenchie Quiz will test users' knowledge
        of one of the most popular dog breeds in the US today.
      </div>
    );
    return (
      <>
        <div className="project-background">
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
                <p className="project-items">Tech Stack</p>

                <p className="project-items">
                  Fullstack app using React.js, Node.js
                </p>
                <p className="project-items">Express and PostgreSQL</p>
                <p className="project-items">HTML/CSS</p>

                <a
                  href="https://github.com/JordyPena/pokemonClimate"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>

                <div className="summary-toggle">
                  {/* <a
                    className="summary-item"
                    onClick={() => this.handleShow1()}
                  >
                   
                  </a> */}
                  Summary
                </div>
                {display1}
                {/* {this.state.summary1 ? display1 : ""} */}
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
                <p className="project-items">Tech Stack</p>

                <p className="project-items">
                  Fullstack app using React.js, Node.js
                </p>
                <p className="project-items">Express and PostgreSQL</p>
                <p className="project-items">HTML/CSS</p>

                <a
                  href="https://github.com/JordyPena/FindMyLang-app"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>

                <div className="summary-toggle">
                  {/* <a
                    className="summary-item"
                    onClick={() => this.handleShow2()}
                  >
                  </a> */}
                  Summary
                </div>
                {display2}
                {/* {this.state.summary2 ? display2 : ""} */}
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
                <p className="project-items">Tech Stack</p>

                <p className="project-items">JavaScript and jQuery, API</p>
                <p className="project-items">HTML/CSS, VSCode</p>
                <p className="project-items">git, Github</p>

                <a
                  href="https://github.com/JordyPena/Workout-App"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>

                <div className="summary-toggle">
                  {/* <a
                    className="summary-item"
                    onClick={() => this.handleShow3()}
                  >
                  </a> */}
                  Summary
                </div>
                {display3}
                {/* {this.state.summary3 ? display3 : ""} */}
              </div>
            </div>
          </div>

          <div className="project">
            <div className="quiz">
              <a
                href="https://jordypena.github.io/Quiz-app/"
                target="_blank"
                className="project-items"
              >
                <h1 className="project-items">Frenchie Quiz</h1>
              </a>

              <a href="https://jordypena.github.io/Quiz-app/" target="_blank">
                <div className="project-img frenchquiz"></div>
              </a>
              <div className="test">
                <p className="project-items">Tech Stack</p>

                <p className="project-items">JavaScript and jQuery, API</p>
                <p className="project-items"> HTML/CSS, VSCode</p>
                <p className="project-items"> git, Github</p>

                <a
                  href="https://github.com/JordyPena/Quiz-app"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>

                <div className="summary-toggle">
                  {/* <a
                    className="summary-item"
                    onClick={() => this.handleShow4()}
                  >
                  </a> */}
                  Summary
                </div>
                {display4}
                {/* {this.state.summary4 ? display4 : ""} */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
