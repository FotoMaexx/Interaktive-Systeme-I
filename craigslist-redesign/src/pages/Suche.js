import React from 'react';
import Header from '../components/header';
import FilterPage from '../components/filterpage';
import { FooterWithSocialLinks as Footer } from '../components/footer';

function Home() {
  return (
    <div className="App">
      <Header />
      <FilterPage />
      <Footer />
    </div>
  );
}

export default Home;