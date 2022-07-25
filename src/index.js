import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const header = ReactDOM.createRoot(document.getElementById('header'));
const footer = ReactDOM.createRoot(document.getElementById('footer'));

header.render(
  <h1>Header</h1>
)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

footer.render(
  <h1>Footer</h1>
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
