import React from "react";
import "./WorkCardStyles.css";
import pro1 from "../assets/speech to text.png";
import pro2 from "../assets/dashboardTask.png";
import pro3 from "../assets/project11.png";
import pro4 from "../assets/dashboardTask.png";
import pro5 from "../assets/dashboardTask.png";
import pro6 from "../assets/dashboardTask.png";
import { NavLink } from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="pro1" />
          <h2 className="project-title">Speech To Text</h2>
          <div className="pro-details">
            {/* <p> Project</p> */}
            <div className="pro-btns">
              <NavLink
                to="https://snazzy-khapse-0cce97.netlify.app/"
                className="btn"
                target="_blank"
              >
                View
              </NavLink>
              <NavLink
                to="https://github.com/Ajit-Aj/Speech-To-Text"
                className="btn"
                target="_blank"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro2} alt="pro2" />
          <h2 className="project-title">Dash Board</h2>
          <div className="pro-details">
            {/* <p>This is text</p> */}
            <div className="pro-btns">
              <NavLink
                to="https://dashboardui-pi.vercel.app/page1"
                className="btn"
                target="_blank"
              >
                View
              </NavLink>
              <NavLink
                to="https://github.com/Ajit-Aj/DashBoard_Task"
                className="btn"
                target="_blank"
              >
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro3} alt="pro3" />
          <h2 className="project-title">Title</h2>
          <div className="pro-details">
            <p>This is text</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn" target="_blank">
                View
              </NavLink>
              <NavLink to="url.com" className="btn" target="_blank">
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro4} alt="pro4" />
          <h2 className="project-title">Title</h2>
          <div className="pro-details">
            <p>This is text</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn" target="_blank">
                View
              </NavLink>
              <NavLink to="url.com" className="btn" target="_blank">
                Source
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro5} alt="=pro5" />
          <h2 className="project-title">Title</h2>
          <div className="pro-details">
            <p>This is text</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn" target="_blank">
                View
              </NavLink>
              <NavLink to="url.com" className="btn" target="_blank">
                Source
              </NavLink>
            </div>
          </div>
        </div>
        <div className="project-card">
          <img src={pro6} alt="pro6" />
          <h2 className="project-title">Title</h2>
          <div className="pro-details">
            <p>This is text</p>
            <div className="pro-btns">
              <NavLink to="url.com" className="btn" target="_blank">
                View
              </NavLink>
              <NavLink to="url.com" className="btn" target="_blank">
                Source
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
