import React from 'react';
import Header from '../components/header';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import SearchBar from '../components/search-bar';
import ProductPage from '../components/product';

function Product() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <ProductPage id="1" />
            <Footer />
        </div>
    );
}

export default Product;