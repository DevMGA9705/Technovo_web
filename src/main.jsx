import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Importar estilos de Bootstrap y Bootstrap Icons instalados vía npm
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);