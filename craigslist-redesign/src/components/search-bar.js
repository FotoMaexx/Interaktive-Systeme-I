import React, { useState, useRef, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Example() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const searchRef = useRef(null); // Referenz für den übergeordneten Container
  const navigate = useNavigate();
  const locationHook = useLocation();

  useEffect(() => {
    // Zustandsdaten aus der Navigation auslesen
    const state = locationHook.state;
    if (state) {
      setSearchTerm(state.searchTerm || '');
      setLocation(state.location || '');
    }
  }, [locationHook]);

  const handleSearchClick = () => {
    navigate('/suche', { state: { searchTerm, location } });
  };

  const handleFocus = () => {
    searchRef.current.classList.add('ring-2', 'ring-indigo-500', 'border-transparent');
  };

  const handleBlur = () => {
    searchRef.current.classList.remove('ring-2', 'ring-indigo-500', 'border-transparent');
  };

  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 justify-center mx-auto mt-2">
      <div 
        ref={searchRef}
        className="relative rounded-md shadow-sm flex items-center border border-gray-300"
        onFocus={handleFocus}
        onBlur={handleBlur}
        tabIndex="-1"
      >
        <span className="text-gray-500 sm:text-sm pl-3">Was?:</span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-2 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm flex-grow border-none focus:border-none focus:ring-0"
          placeholder="Suchbegriff"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <span className="border-l border-gray-300 h-6"></span>
        <span className="text-gray-500 sm:text-sm px-3">Wo?:</span>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="pl-2 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm flex-grow border-none focus:border-none focus:ring-0"
          placeholder="Ort"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button 
          onClick={handleSearchClick} 
          className="p-2"
          aria-label="Suche">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
        </button>
      </div>
    </div>
  );
}
