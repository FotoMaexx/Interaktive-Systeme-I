import React from 'react';
import Header from '../components/header';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import SearchBar from '../components/search-bar';

function Chat() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <Footer />
        </div>
    );
}

export default Chat;