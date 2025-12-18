import { useState } from "react";
import { weatherData } from "./data/weatherData";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";

export default function App() {
  const [selectedCity, setSelectedCity] = useState(weatherData[0].city);

  const cityObj =
    weatherData.find((c) => c.city === selectedCity) || weatherData[0];

  return (
    <div style={appStyle}>
      <h1>Météo Offline</h1>

      <div style={buttonRow}>
        {weatherData.map((city) => (
          <button
            key={city.city}
            onClick={() => setSelectedCity(city.city)}
            style={{
              ...buttonStyle,
              background:
                selectedCity === city.city ? "#333" : "#eee",
              color:
                selectedCity === city.city ? "#fff" : "#000",
            }}
          >
            {city.city}
          </button>
        ))}
      </div>

      <div style={contentGrid}>
        <WeatherCard cityObj={cityObj} />
        <ForecastList forecast={cityObj.forecast} />
      </div>
    </div>
  );
}

const appStyle = {
  minHeight: "100vh",
  padding: 20,
  fontFamily: "Arial, sans-serif",
  background: "#f4f6f8",
};

const buttonRow = {
  display: "flex",
  gap: 10,
  marginBottom: 20,
  flexWrap: "wrap",
};

const buttonStyle = {
  padding: "8px 14px",
  borderRadius: 20,
  border: "none",
  cursor: "pointer",
};

const contentGrid = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 20,
};
