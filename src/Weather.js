import React from "react";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";


export default function Weather() {
  return (
    <div className="container">
      <span className="emoji" role="img" aria-label="Sunny Emoji">
        {" "}
        ☀️ 73°F
      </span>
      <div className="row">
        <div className="col-6">
          <h1 id="city">New York</h1>
          <ul>
            <li>
              <h3 id="date">Monday May 30</h3>
            </li>
            <li>
              {" "}
              <h4 id="time">11:00pm</h4>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="humidity-wind">
            <li>Humidity: 72%</li>
            <li>Wind: 5mph</li>
          </ul>
        </div>
      </div>
      <div className="forecast">
        <div className="row">
          <div className="col">Tuesday</div>
          <div className="col">Wednesday</div>
          <div className="col">Thursday</div>
          <div className="col">Friday</div>
          <div className="col">Saturday</div>
        </div>
        <div className="row">
          <div className="col">
            <ReactAnimatedWeather
              icon="RAIN"
              color="blue"
              size={50}
              animate={true}
            />
          </div>
          <div className="col">
            <ReactAnimatedWeather
              icon="RAIN"
              color="blue"
              size={50}
              animate={true}
            />
          </div>
          <div className="col">
            <ReactAnimatedWeather
              icon="RAIN"
              color="blue"
              size={50}
              animate={true}
            />
          </div>
          <div className="col">
            <ReactAnimatedWeather
              icon="RAIN"
              color="blue"
              size={50}
              animate={true}
            />
          </div>
          <div className="col">
            <ReactAnimatedWeather
            icon="RAIN"
            color="blue"
            size={50}
            animate={true}
            />
            </div>
        </div>
        <div className="row">
          <div className="col">75°F</div>
          <div className="col">78°F</div>
          <div className="col">83°F</div>
          <div className="col">79°F</div>
          <div className="col">80°F</div>
        </div>
      </div>
    </div>
  );
}
