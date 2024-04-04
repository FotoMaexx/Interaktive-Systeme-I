import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Suche from './pages/Suche';
import Product from './pages/Product';
import Verkäufer from './pages/Verkäufer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/verkäufer" element={<Verkäufer />} />
        <Route path="/suche" element={<Suche />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;