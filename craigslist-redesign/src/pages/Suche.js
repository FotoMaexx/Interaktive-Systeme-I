import React from 'react';
import Header from '../components/header';
import FilterPage from '../components/filterpage';
import { FooterWithSocialLinks as Footer } from '../components/footer';

function Suche() {
  return (
    <div className="App">
      <Header />
      <FilterPage />
      <Footer />
    </div>
  );
}
export default Suche;