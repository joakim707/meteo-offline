export default function WeatherCard({ cityObj }) {
  const { city, current } = cityObj;

  return (
    <div style={cardStyle}>
      <h2 style={{ margin: 0 }}>{city}</h2>

      <div style={{ fontSize: 42, fontWeight: "bold" }}>
        {current.temp}°C
      </div>

      <p>{current.condition}</p>

      <div style={infoRow}>
        <span>💨 Vent : {current.wind} km/h</span>
        <span>💧 Humidité : {current.humidity}%</span>
      </div>
    </div>
  );
}

const cardStyle = {
  border: "1px solid #ddd",
  borderRadius: 16,
  padding: 16,
  background: "#fff",
};

const infoRow = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
};
