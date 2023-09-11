import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import Cardapio from './pages/Cardapio';
import Inicio from 'pages/Inicio';

ReactDOM.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>,
  document.getElementById('root')
);
