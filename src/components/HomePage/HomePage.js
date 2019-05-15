import React from "react";
import { Link } from "react-router-dom";
// import "./HomePage.css";

export default function HomePage() {
  return (
      <section className="onboarding col-6">
        <h2 id="onboard-title">Welcome to Spades Spanish! </h2>
        <p>
          This app is built to help learn Spanish with spaced repetition 
          learning technique, known for its positive outcomes especially 
          learning a large number of new items, such as vocabulary.
        </p>
        <p>
          ♠Spanish is a fullstack app, optimized with computer science.It 
          implements the spaced repetition technique by using a data structure
          (singly linked list) on the back end. 
        </p>
        <p>
          The app requires a user to register for an account. Afterwards, 
          when you sign up, you can accesses the dashboard where a list of 
          words appear. You can see your progress by skimming the dashboard
          quickly. When you to start practicing, the app would simply provide 
          whereever you left off with your practice.
        </p>
        <Link to="/login">
          <button id="onboard-button">Begin</button>
        </Link> 
      <p id="about-us">
        Created with love by:<br />
        <a href='https://github.com/secilreel' target='_blank' rel='noopener noreferrer'>Irem Seçil Reel Sen</a>
        <br />
        <a href='https://github.com/RobinKhiv' target='_blank' rel='noopener noreferrer'>Robin Khiv</a>
      </p>
      </section>
  );
}
