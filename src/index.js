import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Global CSS styling
import App from './App'; // Main App component
import reportWebVitals from './reportWebVitals'; // Performance measuring tool

// Create root element for the React app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component within React's StrictMode for highlighting potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Start measuring performance in the app. Useful for tracking metrics or debugging performance bottlenecks.
reportWebVitals();
