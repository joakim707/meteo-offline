import { useState, useEffect } from "react";
import { weatherData } from "./data/weatherData";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import CitySearch from "./components/CitySearch";
import sun from './assets/soleil_1.png';
import heart_fill from "./assets/coeur_fill.png";

export default function App() {
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem("city") || weatherData[0].city
  );

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
  }, [theme]);

  const cities = weatherData.map((c) => c.city);

  const cityObj =
    weatherData.find((c) => c.city === selectedCity) || weatherData[0];

  const toggleFavorite = (city) => {
    const updated = favorites.includes(city)
      ? favorites.filter((c) => c !== city)
      : [...favorites, city];

    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
  };

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    localStorage.setItem("city", city);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          Météo 
          <img src={sun} alt="Soleil" style={{ width: 40, height: 40 }} />
        </h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </header>

      {favorites.length > 0 && (
        <div className="favorites-bar">
          {favorites.map((city) => (
            <button
              key={city}
              onClick={() => handleSelectCity(city)}
              className="city-button active"
            >
              <img src={heart_fill} alt="Soleil" style={{ width: 14, height: 13, marginRight: 5 }} /> 
              {city}
            </button>
          ))}
        </div>
      )}

      <CitySearch
        cities={cities}
        selectedCity={selectedCity}
        onSelectCity={handleSelectCity}
      />

      <div className="content-grid">
        <WeatherCard
          cityObj={cityObj}
          isFavorite={favorites.includes(cityObj.city)}
          onToggleFavorite={toggleFavorite}
        />
        <ForecastList forecast={cityObj.forecast} />
      </div>
    </div>
  );
}
