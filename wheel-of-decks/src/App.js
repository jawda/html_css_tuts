import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Wheel from './pages/wheel';
import Home from './pages/home';
import Navbar from './components/NavBar';
import './wheel.scss';

function App()  {

      return(
      
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wheel" element={<Wheel />} />
          </Routes>
            </div>
          </div>
          
        </BrowserRouter>
      
  );
  
  
}

export default App;
