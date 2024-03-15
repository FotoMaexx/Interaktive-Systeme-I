import React from 'react';
import Header from '../components/header';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import ProductOVerview from '../components/product';
import SearchBar from '../components/search-bar';

function Product() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <ProductOVerview />
            <Footer />
        </div>
    );
}

export default Product;