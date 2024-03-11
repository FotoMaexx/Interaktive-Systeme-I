import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Categories from './components/categories';
import ProductSlider from './components/homepage-product-slider';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Hero />
      <Categories />
      <ProductSlider />
    </div>
  );
}

export default App;