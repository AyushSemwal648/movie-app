// components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbmovieid} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;