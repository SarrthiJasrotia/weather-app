import React from "react";
import "./styles.css";
import weatherData from "./weatherData";
import WeatherForecast from "./components/WeatherForecast";

const WeatherForecastCards = weatherData.map((ele, index) => {
  return <WeatherForecast {...ele} />;
});
export default function App() {
  return (
    <div className="App">
      <h1>My WeatherIcons App</h1>
      <section>{WeatherForecastCards}</section>
    </div>
  );
}
