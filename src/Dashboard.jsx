import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Applogo from "../src/Taskifylogo.svg";
import "./Dashboard.css";
import Home from "../src/house-fill.svg";
import People from "../src/people-fill.svg";
import Help from "../src/Vector.svg";
import CreateGroup from "../src/Frame1.svg";
import Blank2 from "../src/Frame 11.svg";
import Blank1 from "../src/Frame 10.png";
import Groups from "../src/Rectangle 22.svg";
import UserImg from '../src/userImg.png';
import Logout from '../src/box-arrow-left.svg';
const Dashboard = () => {
  return (
    <>
      <div className="Container">
        <div className="Vertical-navbar">
          <img className="logo" src={Applogo}></img>
          <img className="home" src={Home}></img>
          <img className="people" src={People}></img>
          <img className="help" src={Help}></img>
        </div>

        <div className="centre">
          <div className="horizontal-navbar">
            <div className="Search row">
            <div className="col-5 pt-2">
            <FontAwesomeIcon
                icon={faMagnifyingGlass}
                size="2xl"
                color="#D8D8D8"
                className="search-icon"
              />
              <input
                type="text"
                name="Search"
                placeholder="Search Activites , messages"
              />
            </div>

            <div className="col-5 mt-4 fw-bold  offset-2" style={{fontSize:'18px'}}>
              <div className="row ">
                <div className="col">Dashboard</div>
                <div className="col">Advance query</div>
                <div className="col">Events</div>
              </div>
            </div>
              
              {/* <div className="small-container">
                <h3 className="dashboard">Dashboard</h3>
                <h3 className="Advance-query">AdvanceQuery</h3>
                <h3 className="events">Events</h3>
              </div> */}
            <div>
              <img className="Create-icon" src={CreateGroup}/>
              <img className="Vertical-icon" src={Blank1}/>
              <img className="Group-icon" src={Groups}/>
              {/* <h3>Group</h3> */}
              <img className="Horizontal-icon" src={Blank2}/>
            </div>  

            </div>
          </div>
        </div>
        <div className="Right-div">
          <div className="Logout-div">
            <img className="userimg" src={UserImg}/>
            <h4>Sidhanth</h4>
            <h5>View Profile</h5>
            <img className="Logout" src={Logout}/>
            <h3>Logout</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
