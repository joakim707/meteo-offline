import { useState, useEffect } from "react";
import { weatherData } from "./data/weatherData";
import WeatherCard from "./components/WeatherCard";
import ForecastList from "./components/ForecastList";
import CitySearch from "./components/CitySearch";
import sun from "./assets/soleil_1.png";
import heart_fill from "./assets/coeur_fill.png";

export default function App() {
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem("city") || weatherData[0].city
  );

  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    } catch {
      return [];
    }
  });

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const [unit, setUnit] = useState(
    localStorage.getItem("unit") || "C"
  );

  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("unit", unit);
  }, [unit]);

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

  const handleSelectCity = (city) => {
    setSelectedCity(city);
    localStorage.setItem("city", city);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleUnit = () => {
    setUnit(unit === "C" ? "F" : "C");
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>
          Météo
          <img src={sun} alt="Soleil" style={{ width: 40, height: 40 }} />
        </h1>

        <div>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            className="theme-toggle"
            onClick={toggleUnit}
            title="Changer l’unité"
          >
            🌡️ °{unit}
          </button>
        </div>
      </header>

      {favorites.length > 0 && (
        <div className="favorites-bar">
          {favorites.map((city) => (
            <button
              key={city}
              onClick={() => handleSelectCity(city)}
              className="city-button active"
            >
              <img
                src={heart_fill}
                alt="Favori"
                style={{ width: 14, height: 14, marginRight: 5 }}
              />
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
          unit={unit}
        />

        <ForecastList
          forecast={cityObj.forecast}
          unit={unit}
        />
      </div>

      <p style={{ fontSize: 12, opacity: 0.6, marginTop: 16 }}>
        Dernière mise à jour : {new Date().toLocaleTimeString()}
      </p>
    </div>
  );
}
