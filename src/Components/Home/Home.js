import React from "react";
import "../../App.css";

const Home = () => {
  return (
    <div className="home">
      <nav>
        <a>
          <div>Lugar</div>
        </a>
        <ul className="nav-items">
          <a>
            <li>home</li>
          </a>
          <a>
            <li>about</li>
          </a>
          <a>
            <li>project</li>
          </a>
          <a>
            <li>contact</li>
          </a>
        </ul>
      </nav>
      <div className="content">
        <div className="home-text">
          A home is
          <br />
          built with love
          <br />
          and dreams
        </div>
      </div>

      <div className="buttons">
        <button className="projects">Our Projects</button>
        <button className="contact">Contact Us</button>
      </div>
    </div>
  );
};

export default Home;
