import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Categories from './components/categories';
import ProductSlider from './components/homepage-product-slider';
import { FooterWithSocialLinks as Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Hero />
      <Categories />
      <ProductSlider />
      <Footer />
    </div>
  );
}

export default App;