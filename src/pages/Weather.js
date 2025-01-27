import React from "react";
import { useState } from "react";
import "../styles/components/pages/weather.css";
import getWeatherData from "../Api/WeatherAPi";

const weatherData = {
  "New York": {
    temperature: 22,
    humidity: 65,
    windSpeed: 12,
    precipitation: 20,
  },
  "Los Angeles": {
    temperature: 28,
    humidity: 55,
    windSpeed: 8,
    precipitation: 5,
  },
  Chicago: {
    temperature: 18,
    humidity: 70,
    windSpeed: 15,
    precipitation: 35,
  },
};

const Weather = () => {
  const [selectedCity, setSelectedCity] = useState("");

  const cities = Object.keys(weatherData);

  return (
    <div className="weather-container">
      <div className="weather-card">
        <h2 className="weather-title">Weather Dashboard</h2>

        <div className="dropdown-container">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="city-dropdown"
          >
            <option value="">Select a City</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {selectedCity && (
          <table className="weather-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(weatherData[selectedCity]).map(([key, value]) => (
                <tr key={key}>
                  <td>{key.replace(/([A-Z])/g, " $1")}</td>
                  <td className="value-cell">
                    {value}
                    {key === "temperature"
                      ? "°C"
                      : key === "windSpeed"
                      ? " km/h"
                      : key === "precipitation"
                      ? "%"
                      : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Weather;
