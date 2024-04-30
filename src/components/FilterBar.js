// components/FilterBar.js
import React from 'react';
import movieData from '../movies';

const FilterBar = ({ onLanguageFilter, onCountryFilter, onGenreFilter }) => {
  const handleLanguageChange = (e) => {
    onLanguageFilter(e.target.value);
  };

  const handleCountryChange = (e) => {
    onCountryFilter(e.target.value);
  };

  const handleGenreChange = (e) => {
    onGenreFilter(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center mb-8">
      <div className="mb-4 md:mb-0 md:mr-4">
        <label htmlFor="language-filter" className="block font-semibold mb-2">
          Filter by Language
        </label>
        <select
          id="language-filter"
          onChange={handleLanguageChange}
          className="block w-full bg-gray-600 border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">All Languages</option>
          {Array.from(
            new Set(movieData.flatMap((movie) => movie.movielanguages))
          ).map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 md:mb-0 md:mr-4">
        <label htmlFor="country-filter" className="block font-semibold mb-2">
          Filter by Country
        </label>
        <select
          id="country-filter"
          onChange={handleCountryChange}
          className="block w-full bg-gray-600 border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">All Countries</option>
          {Array.from(
            new Set(movieData.flatMap((movie) => movie.moviecountries))
          ).map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4 md:mb-0">
        <label htmlFor="genre-filter" className="block font-semibold mb-2">
          Filter by Genre
        </label>
        <select
          id="genre-filter"
          onChange={handleGenreChange}
          className="block w-full bg-gray-600 border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">All Genres</option>
          {Array.from(
            new Set(movieData.flatMap((movie) => movie.moviegenres))
          ).map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;