require('file-loader?name=[name].[ext]!./template/index.html')
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/app.jsx'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);