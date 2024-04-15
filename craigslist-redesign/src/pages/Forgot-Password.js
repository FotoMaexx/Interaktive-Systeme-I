import React from 'react';
import Header from '../components/header';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import ForgotForm from '../components/forgot-form';

function Login() {
    return (
        <div className="App">
            <Header />
            <ForgotForm />
            <Footer />
        </div>
    );
}

export default Login;