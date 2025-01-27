import React, { useState, useEffect } from "react";
import "../styles/components/pages/weather.css";
import getWeatherData from "../Api/WeatherAPi";

const Weather = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  // const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const cities = ["New York", "Los Angeles", "Chicago"];

  useEffect(() => {
    if (selectedCity) {
      setError(null);
      getWeatherData(selectedCity)
        .then((data) => {
          setWeatherInfo(data);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  }, [selectedCity]);

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

        {error && <p className="error-message">Error: {error}</p>}

        {weatherInfo ? (
          <table className="weather-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Temperature</td>
                <td>{weatherInfo.main.temp}°C</td>
              </tr>
              <tr>
                <td>Humidity</td>
                <td>{weatherInfo.main.humidity}%</td>
              </tr>
              <tr>
                <td>Wind Speed</td>
                <td>{weatherInfo.wind.speed} km/h</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <text>Get weather reports in anywhere & everywhere</text>
        )}
      </div>
    </div>
  );
};

export default Weather;
