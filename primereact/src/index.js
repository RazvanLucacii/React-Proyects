import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Saludo from './components/saludo';
import Metodos from './components/metodos';
import DobleNumero from './components/DobleNumero';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Metodos/>
    <Saludo nombre="Lucia" edad="19"/>
    <Saludo nombre="Carlos" edad="41"/>
    <DobleNumero/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
