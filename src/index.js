import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobaStyles from "./GlobaStyles"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobaStyles>
      <h1 id="title">React Markdown</h1>
      <App />
    </GlobaStyles>
  </React.StrictMode>
);
