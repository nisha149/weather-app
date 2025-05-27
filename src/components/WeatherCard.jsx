import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherCard({ weather }) {
  if (!weather || !weather.main || !weather.weather) return null;

  const {
    name,
    sys: { country },
    main: { temp, temp_min, temp_max, humidity },
    weather: weatherDetails,
    wind: { speed },
  } = weather;

  const condition = weatherDetails[0].main;
  const description = weatherDetails[0].description;

  return (
    <div className="bg-black/10 backdrop-blur-md rounded-2xl shadow-xl px-8 py-6 text-white w-[90%] max-w-md mx-auto mt-12">
      {/* Location and icon */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">{name}, {country}</h2>
        <WeatherIcon condition={condition} />
      </div>

      {/* Description */}
      <h3 className="text-xl font-semibold capitalize">{condition}</h3>
      <p className="text-sm text-white/80 mb-4 capitalize">{description}</p>

      {/* Temperature */}
      <h1 className="text-5xl font-bold mb-6">{Math.round(temp)}°C</h1>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 gap-4 text-sm text-black/90">
        <div>
          <p className="font-semibold">Humidity</p>
          <p>{humidity}%</p>
        </div>
        <div>
          <p className="font-semibold">Wind</p>
          <p>{speed} Km/hr</p>
        </div>
        <div>
          <p className="font-semibold">Max-Temp</p>
          <p>{Math.round(temp_max)}°C</p>
        </div>
        <div>
          <p className="font-semibold">Min-Temp</p>
          <p>{Math.round(temp_min)}°C</p>
        </div>
      </div>

      {/* Footer Credit */}
      <p className="mt-6 text-xs text-black/60 text-center">
        Made by Nisha
      </p>
    </div>
  );
}
