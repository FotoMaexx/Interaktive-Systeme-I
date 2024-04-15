import React from 'react';
import Header from '../components/header';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import SearchBar from '../components/search-bar';
import ChatWindow from '../components/chat';

function Chat() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <ChatWindow />
            <Footer />
        </div>
    );
}

export default Chat;