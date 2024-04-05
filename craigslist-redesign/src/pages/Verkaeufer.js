import React from 'react';
import Header from '../components/header';
import ProductSlider2 from '../components/verkaeufer-product-slider';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import SearchBar from '../components/search-bar';

function Verkaeufer() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <ProductSlider2 />
            <Footer />
        </div>
    );
}

export default Verkaeufer;