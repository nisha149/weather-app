export default function WeatherIcon({ condition }) {
  // Map weather conditions to emojis
  const icons = {
    Clear: "☀️",
    Clouds: "☁️",
    Rain: "🌧️",
    Drizzle: "🌦️",
    Thunderstorm: "⛈️",
    Snow: "❄️",
    Mist: "🌫️",
    Haze: "🌫️",
    Smoke: "🌫️",
    Dust: "🌫️",
    Fog: "🌫️",
    Sand: "🌫️",
    Ash: "🌋",
    Squall: "💨",
    Tornado: "🌪️",
  };

  return (
    <div className="text-6xl mb-7 animate-bounce">
      {icons[condition] || "❓"}
    </div>
  );
}


