import React from 'react';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import './App.css';
import Wheel from './pages/wheel';
import Home from './pages/home';
import WinTrack from './pages/wintrack';
import Navbar from './components/NavBar';
import DeckDetails from './components/DeckDetails';
import NotFound from './components/NotFound';
import useFetch from './hooks/useFetch';
import './wheel.scss';

function App()  {

      return(
      
        <BrowserRouter>
          <div className='App'>
            <Navbar />
            <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wintrack" element={<WinTrack />} />
              <Route path="/wheel" element={<Wheel />} />
              {/* <Route path="/decklogs:id">
                <DeckDetails/>
              </Route> */}
              {/* <Route>
                <NotFound path="*"/>
              </Route> */}
          </Routes>
            </div>
          </div>
          
        </BrowserRouter>
      
  );
  
  
}

export default App;
