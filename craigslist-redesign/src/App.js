import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Suche from './pages/Suche';
import Product from './pages/Product';
import Verkaeufer from './pages/Verkaeufer';
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';
import ForgotPassword from './pages/Forgot-Password';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verkaeufer" element={<Verkaeufer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/suche" element={<Suche />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
