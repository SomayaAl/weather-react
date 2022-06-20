import React from "react";
import "./App.css";
import ReactAnimatedWeather from "react-animated-weather";


export default function Weather() {
  return (
    <div className="container">
      <div className="current">
        <ReactAnimatedWeather
          icon="CLEAR_NIGHT"
          color="gray"
          size={50}
          animate={true}
        />
        <span className="current-weather">73°F</span>
      </div>
      <div className="row">
        <div className="col-6">
          <h1 id="city">New York</h1>
          <ul>
            <li id="date">
              <h3>Monday May 30</h3>
            </li>
            <li id="time">
              {" "}
              <h4>11:00pm</h4>
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
    </div>
  );
}
