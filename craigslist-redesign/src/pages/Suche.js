// Suche.js
import React , { useState } from 'react';
import Header from '../components/header';
import FilterPage from '../components/filterpage';
import SearchBar from '../components/search-bar';
import { FooterWithSocialLinks as Footer } from '../components/footer';

export default function Suche() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Header />
      <SearchBar setSearchTerm={setSearchTerm} />
      <FilterPage searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}
