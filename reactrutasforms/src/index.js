import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './components/Router';
import MenuRutas from './components/MenuRutas';
import FormSimple from './components/FormSimple';
import Collatz from './components/Collatz';
import TablaMultiplicar from './components/TablaMultiplicar';
import MultiplicarSelect from './components/MultiplicarSelect';
import SeleccionMultiple from './components/SeleccionMultiple';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>Pagina Principal</h1>
    <hr/>
    <SeleccionMultiple />
    <hr/>
    <MultiplicarSelect/>
    <hr/>
    <TablaMultiplicar/>
    <hr/>
    <Collatz/>
    <hr/>
    <FormSimple/>
    <hr/>
    <MenuRutas/>
    <hr/>
      <Router/>
    <hr/>
    <h2>Pie de Pagina</h2>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
