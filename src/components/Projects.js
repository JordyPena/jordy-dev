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
    if(this.state.summary1) {
      return this.setState({
        summary1: false,
      })
    }
    this.setState({
      summary1: true,
    });
  };



  handleShow2 = () => {
    if(this.state.summary2) {
      return this.setState({
        summary2: false,
      })
    }
    this.setState({
      summary2: true,
    });
  };



  handleShow3 = () => {
    if(this.state.summary3) {
      return this.setState({
        summary3: false,
      })
    }
    this.setState({
      summary3: true,
    });
  };



  handleShow4 = () => {
    if(this.state.summary4) {
      return this.setState({
        summary4: false,
      })
    }
    this.setState({
      summary4: true,
    });
  };



  render() {
    const display1 = (
      <div className="sum-txt">
        Pokemon Climate allows kids to explore their interest in meteorology by
        looking for different climates in the world, using pokemon to make it
        fun.In the search bar type in the zipcode of a city for the US or
        include the country code to search for a city outside the US, you will
        get the current weather of that city along with a pokemon sprite to
        demonstrate pokemon that could be found in that environment. You must
        create an account before you can use Pokemon Climate. I built this app
        for kids so they can have fun learning climate patterns around the world
        by searching for pokemon.
      </div>
    );

    const display2 = (
      <div className="sum-txt">
        FindMyLang allows you to find T-mobile store's in Dallas, TX that have
        representatives that speak the language you selected. Once a language is
        selected you can see your current location compared to the stores that
        match your request on a map. Click on the markers on the map for store
        details and a link to get directions from your current location. You can
        create an account to be able to add stores to your favorites. I
        built this app for individuals who are looking for representatives that
        speak a certain language at a T-mobile store.
      </div>
    );

    const display3 = (
      <div className="sum-txt">
        Quick-Fit allows the user to select the desired body part they want to
        exercise and an amount of desired workouts for that body part. Quick-Fit 
        returns the amount of desired workouts for the body part selected
        and five random YouTube videos based on the body part selected. I
        built this app for people that want to get fit. If people are strapped
        for time I wanted to build an app so they can get new and fun workouts
        with no need to plan a routine.
      </div>
    );

    const display4 = (
      <div className="sum-txt">
        The user has to answer fun trivia questions about French Bulldogs, you are presented with multiple-choice questions. If you select a correct
        answer an image will render displaying a happy dog if incorrect an image
        of a sad dog will render. This app was built for the French Bulldog
        community, I built this app so the community could test their knowledge
        on one of the most popular breeds in the US today.
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
              
              <a href="https://pokemonclimate-client.vercel.app/login" target="_blank">

              <div className="pokeclimate-image"></div>
              </a>
              <div className="test">
                
                <p className="project-items">
                  Tech Stack
                </p>
                
                  <p className="project-items">Fullstack app using React.js, Node.js</p>
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
                  <a
                    className="summary-item"
                    onClick={() => this.handleShow1()}
                  >
                    Summary
                  </a>
                 
                  
                </div>
                {this.state.summary1 ? display1 : ""}
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

              <div className="findmy-image"></div>
              </a>
              <div className="test">
               
              <p className="project-items">
                  Tech Stack
                </p>
              
                  <p className="project-items">Fullstack app using React.js, Node.js</p>
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
                  <a
                    className="summary-item"
                    onClick={() => this.handleShow2()}
                  >
                    Summary
                  </a>
            
                </div>
                {this.state.summary2 ? display2 : ""}
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
                 <h1 className="project-items">Quick Fit</h1>
                </a>
            
              <a href="https://jordypena.github.io/Workout-App/" target="_blank">

              <div className="quickfit-image"></div>
              </a>
              <div className="test">
               
                <p className="project-items">
                  Tech Stack
                </p>
                
                  <p className="project-items">JavaScript and jQuery, API</p>
                  <p className="project-items"> HTML/CSS, VSCode</p>
                  <p className="project-items"> git, github</p>
                
                <a
                  href="https://github.com/JordyPena/Workout-App"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>
               
                <div className="summary-toggle">
                  <a
                    className="summary-item"
                    onClick={() => this.handleShow3()}
                  >
                    Summary
                  </a>
                
                </div>
                {this.state.summary3 ? display3 : ""}
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

              <div className="frenchquiz-image"></div>
              </a>
              <div className="test">
              
              <p className="project-items">
                  Tech Stack
                </p>
             
                  <p className="project-items">JavaScript and jQuery, API</p>
                  <p className="project-items"> HTML/CSS, VSCode</p>
                  <p className="project-items"> git, github</p>
                
                <a
                  href="https://github.com/JordyPena/Quiz-app"
                  target="_blank"
                  className="project-items"
                >
                  View Code
                </a>
               
                <div className="summary-toggle">
                  <a
                    className="summary-item"
                    onClick={() => this.handleShow4()}
                  >
                    Summary
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
