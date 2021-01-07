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
            <h1  className="intro-items">Hey, I'm Jordy Peña!</h1>
            <p  className="intro-items">
              I'm a Fullstack developer living in Dallas, Tx. I build backend
              databases and apis for my users and bring it all together with a
              front-end client using React.js. I'm a motivated individual who
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
            <p className="intro-items">
              I enjoy making websites and seeing my code come to life! I'm
              interested in solutions that excite and impress users. I love to
              build quality code that makes me smile when I see it. I code daily
              to constantly grow and be challenged outside of my comfort zone. 
              Big fitness and health enthusiast, I enjoy cooperating ideas and working
              together on projects with friends and peers.
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
              created and deployed mobile-first applications while learning new
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
