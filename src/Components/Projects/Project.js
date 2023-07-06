import React from "react";
import "./Project.css";
import Arrow from "./Arrow";
import img1 from "./img1.png";

const data = [
  {
    name: "penthouse",
    location: "chennai, college road",
  },
  {
    name: "Vintage villa",
    location: "chennai, college road",
  },
  {
    name: "Tonga house",
    location: "chennai, college road",
  },
];

const Project = () => {
  return (
    <div className="project_main">
      <div>
        <div className="project_main1">Ongoing Projects</div>

        <div className="flex_between">
          <div className="project_submenu">
            Turpis facilisis tempor pulvinar in lobortis ornare magna.
          </div>
          <Arrow />
        </div>
      </div>

      <div>
        <div className="image_container">
          {data.map((i, ind) => (
            <div key={ind} className="imageWrapper">
              <img src={img1} alt="image1" />
              <div className="card_wrapper">
                <div className="card">
                  <div className="title">{i.name}</div>
                  <div className="location">{i.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
