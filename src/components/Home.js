import React from "react";
import "../styling/Home.css";
function Home() {
  return (
    <>
      <div className="home-column">
        <div className="home-row">
          <div className="item-left">
            <div className="hello-img"></div>
          </div>

          <div className="item-right">
            <h1 className="item-right-style">Hey, I'm Jordy Peña!</h1>
            <p className="item-right-style">
              I'm a Fullstack developer living in Dallas, Tx. I build backend
              databases and apis for my users and bring it all together with a
              frontend client using React.js. I'm a motivated individual who
              consistently exceeds corporate expectations. I am a lifelong
              learner dedicated to going the extra mile to succeed in this
              industry.
            </p>
          </div>
        </div>
      </div>

      <div className="home-column">
        <div className="home-row">
          <div className="item-left">
            <div className="code-img"></div>
          </div>

          <div className="item-right">
            <h1 className="intro-items">About me</h1>
            <p className="intro-items"></p>

            <p className="intro-items">
              I enjoy making my own websites and seeing my code come to life!
              I'm interested in solutions that excite and impress users. I love
              to build quality code that makes me smile when I see it. I code
              daily to constantly grow an be challenged outside of my comfort
              zone. I enjoy fitness and competition.
            </p>
          </div>
        </div>
      </div>

      <div className="home-column">
        <div className="home-row">
          <div className="item-left">
            <div className="student-img"></div>
          </div>

          <div className="item-right">
            <h1 className="intro-items">Student</h1>
            <p className="intro-items">
              As a graduate from THINKFUL's Full Stack Web Developer Program. I
              Created and deployed mobile-first applications while learning new
              languages and frameworks. I specialize in practical software
              development standards with a focus on JavaScript, React.js,
              Node.js, jQuery, HTML5, CSS3, algorithms and data structures.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
