export function formatTemp(temp, unit) {
  if (unit === "F") {
    return Math.round((temp * 9) / 5 + 32);
  }
  return temp;
}

export function getWeatherMood(current) {
  const c = current.condition.toLowerCase();

  if (c.includes("pluie") || c.includes("orage") || c.includes("tempête")) {
    return { label: "Défavorable", color: "#ef4444" };
  }

  if (c.includes("soleil") && current.temp >= 10) {
    return { label: "Agréable", color: "#22c55e" };
  }

  if (c.includes("vent") || c.includes("nuage")) {
    return { label: "Mitigé", color: "#f59e0b" };
  }

  return { label: "Mitigé", color: "#f59e0b" };
}
