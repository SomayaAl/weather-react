import React from "react";
import "./App.css";
import Form from "./Form.js";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrap">
        <div className="weather-app">
          <Form />
          <Weather />
        </div>
      </div>
      <footer>
        <a href="https://github.com/SomayaAl/weather-react">Open-Source</a> by
        Somaya Albadawi
      </footer>
    </div>
  );
}
