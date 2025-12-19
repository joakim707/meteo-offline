import { formatTemp } from "../utils/weatherUtils";

export default function ForecastList({ forecast, unit }) {
  return (
    <div className="card forecast-card">
      <h3>Prévisions sur 5 jours</h3>

      {forecast.map((day) => (
        <div key={day.day} className="forecast-row">
          <span>{day.day}</span>
          <span className="forecast-condition">{day.condition}</span>
          <strong>
            {formatTemp(day.temp, unit)}°{unit}
          </strong>
        </div>
      ))}
    </div>
  );
}
