import React from 'react';
// import ReactDOM from 'react-dom'; No lo toma
import './index.css';
// import Reactrouterdom from "react-router-dom";
import{BrowserRouter as Router, Routes,Route} from "react-router-dom";

import Inicio from './Paginas/Inicio/inicio.js';
import Contacto from './Paginas/Contacto/contacto.js';
import Productos from './Paginas/Productos/productos.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/Productos' element={<Productos/>}/>
          <Route path='/Contacto' element={<Contacto/>}/>
        </Routes>
      </Router>
  </React.StrictMode>
);
