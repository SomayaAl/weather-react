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
          <div className="col-2" key="index">
            <div className="forecast-day"> Tuesday </div>
            <div className="forecast-icon">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="gray"
                size={50}
                animate={true}
              />
            </div>
            <div className="forecast-temp"> 75°F </div>
          </div>
          <div className="col-2" key="index">
            <div className="day"> Wednesday </div>
            <div className="forecast-icon">
              <ReactAnimatedWeather
                icon="RAIN"
                color="gray"
                size={50}
                animate={true}
              />
            </div>
            <div className="forecast-temp"> 80°F </div>
          </div>
          <div className="col-2" key="index">
            <div className="day"> Thursday </div>
            <div className="forecast-icon">
              <ReactAnimatedWeather
                icon="CLOUDY"
                color="gray"
                size={50}
                animate={true}
              />
            </div>
            <div className="forecast-temp"> 77°F </div>
          </div>
          <div className="col-2" key="index">
            <div className="day"> Friday </div>
            <div className="forecast-icon">
              <ReactAnimatedWeather
                icon="WIND"
                color="gray"
                size={50}
                animate={true}
              />
            </div>
            <div className="forecast-temp"> 84°F </div>
          </div>
          <div className="col-2" key={index}>
            <div className="day"> Saturday </div>
            <div className="forecast-icon">
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="gray"
                size={50}
                animate={true}
              />
            </div>
            <div className="forecast-temp"> 79°F </div>
          </div>
        </div>
      </div>
    </div>
  );
}
