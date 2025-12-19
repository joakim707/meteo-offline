import { useState } from "react";

export default function CitySearch({ cities, selectedCity, onSelectCity }) {
  const [query, setQuery] = useState("");

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="city-search">
      <input
        type="text"
        placeholder="Rechercher une ville..."
        className="city-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="city-buttons">
        {filteredCities.length === 0 && (
          <span style={{ opacity: 0.6 }}>Aucune ville trouvée</span>
        )}

        {filteredCities.map((city) => (
          <button
            key={city}
            className={`city-button ${selectedCity === city ? "active" : ""}`}
            onClick={() => onSelectCity(city)}
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
