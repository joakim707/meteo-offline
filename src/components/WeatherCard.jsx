import { getWeatherIcon } from "../utils/weatherIcons";
import { formatTemp, getWeatherMood } from "../utils/weatherUtils";
import wind from "../assets/vent.png";
import heart from "../assets/coeur.png";
import heart_fill from "../assets/coeur_fill.png";

export default function WeatherCard({
  cityObj,
  isFavorite,
  onToggleFavorite,
  unit,
}) {
  const { city, current } = cityObj;
  const mood = getWeatherMood(current);

  return (
    <div className="card weather-card">
      <button
        className="favorite-btn"
        onClick={() => onToggleFavorite(city)}
      >
        <img
          src={isFavorite ? heart_fill : heart}
          alt="Favori"
          style={{ width: 32, height: 32 }}
        />
      </button>

      <h2>{city}</h2>

      <div className="temperature">
        {formatTemp(current.temp, unit)}°{unit}
      </div>

      <img
        src={getWeatherIcon(current.condition)}
        alt={current.condition}
        style={{ width: 36, height: 36, marginBottom: 6 }}
      />

      <span
        style={{
          display: "inline-block",
          padding: "6px 12px",
          borderRadius: 999,
          background: mood.color,
          color: "white",
          fontSize: 13,
          marginBottom: 10,
        }}
      >
         {mood.label}
      </span>

      <div className="info-row">
        <span>
          Vent
          <img
            src={wind}
            alt="Vent"
            style={{ width: 14, height: 14, margin: "0 6px" }}
          />
          {current.wind} km/h
        </span>
        <span>Humidité 💧 {current.humidity}%</span>
      </div>
    </div>
  );
}
