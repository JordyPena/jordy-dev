import React from "react";
import "../styling/Home.css";
function Home() {
  return (
    <>
      <div className="home-column">
        <div className="home-row">
          <div className="item-left">
            <div className="home-image hello-img"></div>
          </div>

          <div className="item-right">
            <h1 className="intro-items">Hey, I'm Jordy Peña!</h1>
            <p className="intro-items">
              I'm a full-stack developer in Dallas, TX. I specialize in
              engineering front-end client solutions using ReactJS with
              seamlessly integrated custom-built back-end APIs and databases
              using Node.js and Postgres. I also add focus to automated testing
              using Jest and Mocha, Chai, and Supertest to all my projects.
            </p>
          </div>
        </div>
      </div>

      <div className="home-column">
        <div className="home-row">
          <div className="item-left">
            <div className="home-image code-img"></div>
          </div>

          <div className="item-right">
            <h1 className="intro-items">About me</h1>
            <p className="intro-items">
              I'm an avid fitness and health enthusiast. I'm a naturally upbeat
              and social guy, so you don't have to wait until after my morning
              coffee to chat. I'm a full-time Sales Manager, who brings energy
              and motivation to drive results. In my free time I play with my
              french bulldog named Trunks, I keep my brain active by coding
              daily to constantly grow and be challenged outside of my comfort
              zone. I enjoy cooperating ideas and working together with friends
              and peers.
            </p>
          </div>
        </div>
      </div>

      <div className="home-column">
        <div className="home-row">
          <div className="item-left">
            <div className="home-image student-img"></div>
          </div>

          <div className="item-right">
            <h1 className="intro-items">Student</h1>
            <p className="intro-items">
              As a graduate from Thinkful's Full Stack Web Developer Program. I
              created and deployed mobile-first applications while learning new
              languages and frameworks. I specialize in practical software
              development standards with a focus on JavaScript, ReactJS,
              Node.js, jQuery, HTML5, CSS3.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
