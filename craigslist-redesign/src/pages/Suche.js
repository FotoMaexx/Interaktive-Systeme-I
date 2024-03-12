import React from 'react';
import Header from '../components/header';
import Categories from '../components/categories';
import ProductSlider from '../components/homepage-product-slider';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import Stats from '../components/homepage-stats';

function Home() {
  return (
    <div className="App">
      <Header />
      {/* <Hero /> */}
      <Categories />
      <ProductSlider />
      <Stats />
      <Footer />
    </div>
  );
}

export default Home;