const API_KEY = "b2f1c3adcbf02559da48784cf535fb7b"; // Use your actual API key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

/**
 * Fetch weather data for a given city from OpenWeatherMap API.
 * @param {string} city - City name to fetch weather for.
 * @returns {Promise<Object>} - Weather data JSON object.
 */
export async function fetchWeather(city) {
  const url = `${BASE_URL}?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Weather data fetch failed");
  }

  const data = await response.json();
  return data;
}

