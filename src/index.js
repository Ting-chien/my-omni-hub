import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import pages
import './index.css';
import Home from './pages/Home';
import Event from './pages/Event';
import Tools from './pages/Tools';

// components
import NavigationBar from './global/components/NavigationBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/event' element={<Event />} />
          <Route path='/tools' element={<Tools />} />
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
