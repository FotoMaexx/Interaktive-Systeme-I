import React from 'react';
import Header from '../components/header';
import ProductSlider2 from '../components/verkäufer-product-slider';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import SearchBar from '../components/search-bar';

function Verkäufer() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <ProductSlider2 />
            <Footer />
        </div>
    );
}

export default Verkäufer;