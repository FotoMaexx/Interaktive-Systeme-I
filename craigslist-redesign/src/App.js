import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Suche from './pages/Suche';
import Product from './pages/Product';
import Verkaeufer from './pages/Verkaeufer';
import Login from './pages/Login';
import Register from './pages/Register';
import Chat from './pages/Chat';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/verkaeufer" element={<Verkaeufer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/suche" element={<Suche />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;