export default function ForecastList({ forecast }) {
  return (
    <div style={containerStyle}>
      <h3>Prévisions sur 5 jours</h3>

      {forecast.map((day) => (
        <div key={day.day} style={rowStyle}>
          <span>{day.day}</span>
          <span>{day.condition}</span>
          <strong>{day.temp}°C</strong>
        </div>
      ))}
    </div>
  );
}

const containerStyle = {
  border: "1px solid #ddd",
  borderRadius: 16,
  padding: 16,
  background: "#fff",
};

const rowStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: "6px 0",
};
