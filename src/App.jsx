import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Loading from "./components/Loading";
import { fetchWeather } from "./services/weatherService";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (searchCity) => {
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const data = await fetchWeather(searchCity);
      setWeather(data);
    } catch (err) {
      setError("City not found or API error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center px-4 py-10">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-md rounded-3xl shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center text-white drop-shadow-md mb-6">
          🌤 WeatherNow
        </h1>

        <SearchBar onSearch={handleSearch} />

        {loading && <Loading />}
        {error && (
          <p className="text-red-300 bg-white/20 rounded-lg text-center py-2 mt-4 shadow-md">
            {error}
          </p>
        )}
        {weather && <WeatherCard weather={weather} />}
      </div>
    </div>
  );
}

