import React, { useState } from "react";

export default function SearchBar({ onSearch, weatherCondition }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input.trim());
    setInput("");
  };

  const gradientClasses = {
    Clear: "bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500",
    Clouds: "bg-gradient-to-r from-gray-500 via-gray-700 to-gray-900",
    Rain: "bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-900",
    Drizzle: "bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800",
    Thunderstorm: "bg-gradient-to-r from-purple-900 via-black to-gray-900",
    Snow: "bg-gradient-to-r from-gray-100 via-blue-100 to-gray-300 text-black",
    Mist: "bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800",
    Haze: "bg-gradient-to-r from-yellow-700 via-yellow-900 to-gray-900",
    default: "bg-gradient-to-r from-black via-gray-800 to-gray-900",
  };

  const buttonClass = gradientClasses[weatherCondition] || gradientClasses.default;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md mx-auto mb-6 shadow-md rounded-md overflow-hidden"
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 px-4 py-2 text-base border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 text-black"
      />
      <button
        type="submit"
        className={`${buttonClass} text-white px-4 py-2 flex items-center justify-center transition-colors duration-300`}
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1111.5 4.5a7.5 7.5 0 015.15 12.15z"
          />
        </svg>
      </button>
    </form>
  );
}




