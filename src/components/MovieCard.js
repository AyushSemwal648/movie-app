// components/MovieCard.js
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-600 rounded-lg shadow-md overflow-hidden">
      <img
        src={movie.moviemainphotos[0]}
        alt={movie.movietitle}
        className="w-full h-64 object-fill"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2 text-white">{movie.movietitle}</h2>
        <p className="mb-2">
          <span className="font-semibold text-white">Languages:</span>{' '}
          {movie.movielanguages.join(', ')}
        </p>
        <p className="mb-2">
          <span className="font-semibold text-white">Countries:</span>{' '}
          {movie.moviecountries.join(', ')}
        </p>
        <p>
          <span className="font-semibold text-white">Genres:</span>{' '}
          {movie.moviegenres.join(', ')}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;