import React from 'react';
import Header from '../components/header';
import Verkaeufer1 from '../components/verkaeufer';
import ProductSlider2 from '../components/verkaeufer-product-slider';
import Reviews from '../components/reviews';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import SearchBar from '../components/search-bar';

function Verkaeufer() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <Verkaeufer1 />
            <Reviews />
            <ProductSlider2 />
            <Footer />
        </div>
    );
}

export default Verkaeufer;