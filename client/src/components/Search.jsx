import React, { useState, useEffect } from 'react';
import { IoIosClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import debounce from 'lodash.debounce';
import axios from 'axios';

function Search({ setTicker }) {
  const [input, setInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const debouncedFetch = debounce(async () => {
      if (input.length > 2) {
        setIsLoading(true);
        try {
          const response = await axios.get(`/search?q=${input}`);
          const data = response.data;
          setIsLoading(false);
          if (Array.isArray(data.quotes)) {
            setSearchResults(data.quotes);
          } else {
            console.error('Unexpected data structure:', data);
            setSearchResults([]);
          }
        } catch (error) {
          setIsLoading(false);
          console.error('Failed to fetch search results:', error);
          setSearchResults([]);
        }
      } else {
        setSearchResults([]);
      }
    }, 300);

    debouncedFetch();
    return () => debouncedFetch.cancel();
  }, [input]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setInput('');
        setSearchResults([]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleInputChange = (event) => setInput(event.target.value);

  const handleCompanySelect = (company) => {
    setTicker(company.symbol);
    setInput('');
    setSearchResults([]);
  };

  const clearInput = () => {
    setInput('');
    setSearchResults([]);
  };

  return (
    <div className='relative w-96' style={{ zIndex: 1000 }}>
      <div className='flex items-center border-2 rounded-md bg-white border-neutral-200'>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder='Search Stock...'
          className='w-full px-4 focus:outline-none rounded-md'
          aria-label="Search stocks"
        />
        {input && (
          <button onClick={clearInput} aria-label="Clear search" className="p-2">
            <IoIosClose className="h-5 w-5 text-gray-500" />
          </button>
        )}
        {!input && (
          <button aria-label="Search" className="p-2">
            <FaSearch />
          </button>
        )}
      </div>
      {isLoading && <div className='absolute w-full mt-1 bg-white border border-neutral-200'>Loading...</div>}
      {searchResults.length > 0 && (
        <ul className='absolute w-full mt-1 bg-white border border-neutral-200'>
          {searchResults.map((company) => (
            <li key={company.symbol} onClick={() => handleCompanySelect(company)} className='flex justify-between px-4 py-2 hover:bg-gray-100'>
              <span className="font-semibold">{company.longname || company.shortname}</span>
              <span className="font-normal text-gray-500">{company.symbol}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
