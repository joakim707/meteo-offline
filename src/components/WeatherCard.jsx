import { getWeatherIcon } from "../utils/weatherIcons";
import wind from "../assets/vent.png";
import heart from "../assets/coeur.png";
import heart_fill from "../assets/coeur_fill.png";

export default function WeatherCard({ cityObj, isFavorite, onToggleFavorite }) {
  const { city, current } = cityObj;

  return (
    <div className="card weather-card">
      <button
        className="favorite-btn"
        onClick={() => onToggleFavorite(city)}
      >
        {
          isFavorite ? 
          <img
            src={heart_fill}
            alt={current.condition}
            style={{ width: 32, height: 32, marginTop: 2}}
          /> : 
          <img
            src={heart}
            alt={current.condition}
            style={{ width: 32, height: 32, marginTop: 2}}
          />
        }
      </button>

      <h2>{city}</h2>
      <div className="temperature">{current.temp}°C</div>
      <img
        src={getWeatherIcon(current.condition)}
        alt={current.condition}
        style={{ width: 32, height: 32, marginLeft: 8, marginTop: 2}}
      /> 

      <div className="info-row">
        <span>Vent 
          <img
            src={wind}
            alt={current.condition}
            style={{ width: 15, height: 15, marginLeft: 8, marginRight: 8, marginTop: 2}}
          />
          {current.wind} km/h
        </span>
        <span>Humidité 💧 {current.humidity}%</span>
      </div>
    </div>
  );
}
