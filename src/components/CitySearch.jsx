export default function CitySearch({ cities, selectedCity, onSelectCity }) {
  return (
    <div className="city-search">
      <input
        type="text"
        placeholder="Rechercher une ville..."
        className="city-input"
        onChange={(e) => onSelectCity(e.target.value)}
        value={selectedCity}
      />
      <div className="city-buttons">
        {cities.map((city) => (
          <button
            key={city}
            onClick={() => onSelectCity(city)}
            className={`city-button ${selectedCity === city ? "active" : ""}`}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
