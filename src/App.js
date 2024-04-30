import React, { useState, useEffect } from 'react';
import MovieList from './components/Movielist'
import FilterBar from './components/FilterBar';
import movieData from './movies';
import SearchBar from './components/searchBar';

const App = () => {
  const [filteredMovies, setFilteredMovies] = useState(movieData);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Filter movies based on search term and apply other filters
    const filtered = movieData.filter(movie => {
      // Check if the movie title contains the search term
      const titleMatch = movie.movietitle.toLowerCase().includes(searchTerm.toLowerCase());
      // Check if the movie matches other filters if they are applied
      const languageMatch = searchTerm === '' || movie.movielanguages.includes(searchTerm);
      const countryMatch = searchTerm === '' || movie.moviecountries.includes(searchTerm);
      const genreMatch = searchTerm === '' || movie.moviegenres.includes(searchTerm);
      
      // Return true if any of the conditions match
      return titleMatch || languageMatch || countryMatch || genreMatch;
    });
    
    setFilteredMovies(filtered);
  }, [searchTerm]);

  const handleLanguageFilter = (language) => {
    setSearchTerm(language);
  };

  const handleCountryFilter = (country) => {
    setSearchTerm(country);
  };

  const handleGenreFilter = (genre) => {
    setSearchTerm(genre);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className=" mx-auto py-8 bg-gray-800 text-white">
      <div className='container flex mx-auto justify-around items-center'>
      <SearchBar onSearch={handleSearch} />
      <FilterBar
        onLanguageFilter={handleLanguageFilter}
        onCountryFilter={handleCountryFilter}
        onGenreFilter={handleGenreFilter}
      />
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
