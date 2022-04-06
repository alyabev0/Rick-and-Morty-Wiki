import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Title from "./components/Title/Title"

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
