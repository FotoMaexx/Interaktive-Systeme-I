import React from 'react';
import Header from '../components/header';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import ProductOVerview from '../components/product';

function Product() {
    return (
        <div className="App">
            <Header />
            <ProductOVerview />
            <Footer />
        </div>
    );
}

export default Product;