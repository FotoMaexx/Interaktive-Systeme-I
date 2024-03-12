import React from 'react';
import Hero from '../components/hero';
import Categories from '../components/categories';
import ProductSlider from '../components/homepage-product-slider';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import Stats from '../components/homepage-stats';

function Home() {
  return (
    <div className="App">
      <Hero />
      <Categories />
      <ProductSlider />
      <Stats />
      <Footer />
    </div>
  );
}

export default Home;