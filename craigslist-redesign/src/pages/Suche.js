import React from 'react';
import Header from '../components/header';
import FilterPage from '../components/filterpage';
import SearchBar from '../components/search-bar';
import { FooterWithSocialLinks as Footer } from '../components/footer';

function Suche() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <FilterPage />
      <Footer />
    </div>
  );
}
export default Suche;