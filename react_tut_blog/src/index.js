import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// this is what mounts project to div in index.html and puts it on the dom
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);