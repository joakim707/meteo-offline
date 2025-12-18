export default function ForecastList({ forecast }) {
  return (
    <div className="card forecast-card">
      <h3>Prévisions sur 5 jours</h3>
      {forecast.map((day) => (
        <div key={day.day} className="forecast-row">
          <span>{day.day}</span>
          <span className="forecast-condition">{day.condition}</span>
          <strong>{day.temp}°C</strong>
        </div>
      ))}
    </div>
  );
}
