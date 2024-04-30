// SearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit}
    className='flex flex-row gap-2'
    >
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={handleChange}
        className=' w-full h-1/3 bg-gray-600 border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
      />
      <button type="submit" className='h-1/3 bg-gray-600 border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>Search</button>
    </form>
  );
}

export default SearchBar;
