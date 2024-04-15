import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './tailwind.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './contexts/AuthContext';

const container = document.getElementById('root');
const root = createRoot(container); // Erstellen eines Root-Knotens für die React-Anwendung

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);