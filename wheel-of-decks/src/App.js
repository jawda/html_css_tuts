import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Wheel from './pages/wheel';
import Home from './pages/home';
import './wheel.scss';

function App()  {

      return(
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wheel" element={<Wheel />} />
          </Routes>
        </BrowserRouter>
      
  );
  
  
}

export default App;
