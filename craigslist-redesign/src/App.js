import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Suche from './pages/Suche';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/suche" element={<Suche />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;