import React from 'react';
import Header from '../components/header';
import { FooterWithSocialLinks as Footer } from '../components/footer';
import RegisterForm from '../components/register-form';

function Register() {
    return (
        <div className="App">
            <Header />
            <RegisterForm />
            <Footer />
        </div>
    );
}

export default Register;