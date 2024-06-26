import React from 'react';
import Header from '../components/header';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import LoginFrom from '../components/login-form';

function Login() {
    return (
        <div className="App">
            <Header />
            <LoginFrom />
            <Footer />
        </div>
    );
}

export default Login;