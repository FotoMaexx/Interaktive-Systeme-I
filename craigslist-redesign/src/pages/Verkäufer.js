import React from 'react';
import Header from '../components/header';
import ProductSlider from '../components/homepage-product-slider';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import SearchBar from '../components/search-bar';

function Verkäufer() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <ProductSlider />
            <Footer />
        </div>
    );
}

export default Verkäufer;