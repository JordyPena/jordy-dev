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
    this.setState({
      summary1: true,
    });
  };

  handleHide1 = () => {
    this.setState({
      summary1: false,
    });
  };

  handleShow2 = () => {
    this.setState({
      summary2: true,
    });
  };

  handleHide2 = () => {
    this.setState({
      summary2: false,
    });
  };

  handleShow3 = () => {
    this.setState({
      summary3: true,
    });
  };

  handleHide3 = () => {
    this.setState({
      summary3: false,
    });
  };

  handleShow4 = () => {
    this.setState({
      summary4: true,
    });
  };

  handleHide4 = () => {
    this.setState({
      summary4: false,
    });
  };

  render() {
    const display1 = (
      <>
        Pokemon Climate allows kids to explore their interest in meteorology by
        looking for different climates in the world, using pokemon to make it
        fun.In the search bar type in the zipcode of a city for the US or
        include the country code to search for a city outside the US, you will
        get the current weather of that city along with a pokemon sprite to
        demonstrate pokemon that could be found in that environment. You must
        create an account before you can use Pokemon Climate. I built this app
        for kids so they can have fun learning climate patterns around the world
        by searching for pokemon.
      </>
    );

    const display2 = (
      <>
        FindMyLang allows you to find T-mobile store's in Dallas, TX that have
        representatives that speak the language you selected. Once a language is
        selected you can see your current location compared to the stores that
        match your request on a map. Click on the markers on the map for store
        details and a link to get directions from your current location. You can
        create an account in order to be able to add stores to your favorites. I
        built this app for individuals who are looking for representatives that
        speak a certain language at a T-mobile store.
      </>
    );

    const display3 = (
      <>
        Quick Fit allows the user to select a desired body part they want to
        exercise, and an amount of desired workouts for that body part. Quick
        Fit returns the amount of desired workouts for the body part selected
        and five random YouTube video's based off of the body part selected. I
        built this app for people that want to get fit. If people are strapped
        for time i wanted to build an app so they can get new and fun workouts
        with no need to plan a routine.
      </>
    );

    const display4 = (
      <>
        The user has to answer fun trivia questions about French Bulldogs, you
        are presented with multiple choice questions. If you select a correct
        answer a image will render displaying a happy dog if incorrect an image
        of a sad dog will render. This app was built for the French Bulldog
        community, I built this app so the community could test their knowledge
        on one of the most popular breeds in the US today.
      </>
    );
    return (
      <>
        <div className="project-background">
          <div className="project">
            <div className="pokemon">
              <h1 className="project-items">Pokemon Climate</h1>

              <div className="pokeclimate-image"></div>
              <div className="test">
                <a
                  href="https://pokemonclimate-client.vercel.app/login"
                  target="_blank"
                  className="project-items"
                >
                  Weather Check
                </a>
                <p className="project-items">
                  Tech Stack: Fullstack app using React.js, CSS, Node, Express,
                  and PostgreSQL.
                </p>
                <a
                  href="https://github.com/JordyPena/pokemonClimate"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>
                <h2 className="project-items">Summary</h2>
                <div className="summary-toggle">
                  <a
                    className="summary-item"
                    onClick={() => this.handleShow1()}
                  >
                    Show
                  </a>
                  <a
                    className="summary-item"
                    onClick={() => this.handleHide1()}
                  >
                    Hide
                  </a>
                </div>
                {this.state.summary1 ? display1 : ""}
              </div>
            </div>
          </div>

          <div className="project">
            <div className="find-my">
              <h1 className="project-items">Find My Lang</h1>
              <div className="findmy-image"></div>
              <div className="test">
                <a
                  href="https://find-my-lang-app.vercel.app/"
                  target="_blank"
                  className="project-items"
                >
                  Find Your Language
                </a>
                <p className="project-items">
                  Tech Stack: Fullstack app using React.js, CSS, Node, Express,
                  and PostgreSQL.
                </p>
                <a
                  href="https://github.com/JordyPena/FindMyLang-app"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>
                <p className="project-items">Summary</p>
                <div className="summary-toggle">
                  <a
                    className="summary-item"
                    onClick={() => this.handleShow2()}
                  >
                    Show
                  </a>
                  <a
                    className="summary-item"
                    onClick={() => this.handleHide2()}
                  >
                    Hide
                  </a>
                </div>
                {this.state.summary2 ? display2 : ""}
              </div>
            </div>
          </div>

          <div className="project">
            <div className="quick">
              <h1 className="project-items">Quick Fit</h1>
              <div className="quickfit-image"></div>
              <div className="test">
                <a
                  href="https://jordypena.github.io/Workout-App/"
                  target="_blank"
                  className="project-items"
                >
                  Lets Workout
                </a>
                <p className="project-items">
                  Tech Stack: JavaScript/API, jQuery, HTML/CSS, VSCode,
                  git/github
                </p>
                <a
                  href="https://github.com/JordyPena/Workout-App"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>
                <p className="project-items">Summary</p>
                <div className="summary-toggle">
                  <a
                    className="summary-item"
                    onClick={() => this.handleShow3()}
                  >
                    Show
                  </a>
                  <a
                    className="summary-item"
                    onClick={() => this.handleHide3()}
                  >
                    Hide
                  </a>
                </div>
                {this.state.summary3 ? display3 : ""}
              </div>
            </div>
          </div>

          <div className="project">
            <div className="quiz">
              <h1 className="project-items">Frenchie Quiz</h1>

              <div className="frenchquiz-image"></div>
              <div className="test">
                <a
                  href="https://jordypena.github.io/Quiz-app/"
                  target="_blank"
                  className="project-items"
                >
                  Take The Quiz
                </a>
                <p className="project-items">
                  Tech Stack: JavaScript, jQuery, HTML/CSS, VSCode, git/github
                </p>
                <a
                  href="https://github.com/JordyPena/Quiz-app"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>
                <p className="project-items">Summary</p>
                <div className="summary-toggle">
                  <a
                    className="summary-item"
                    onClick={() => this.handleShow4()}
                  >
                    Show
                  </a>
                  <a
                    className="summary-item"
                    onClick={() => this.handleHide4()}
                  >
                    Hide
                  </a>
                </div>

                {this.state.summary4 ? display4 : ""}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
