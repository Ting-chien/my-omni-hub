import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import pages
import './index.css';
import MyLayout from './global/components/MyLayout';
import Home from './pages/Home';
import Event from './pages/Event';
import Tools from './pages/Tools';
import Internationalization from './pages/Tools/Internationalization';

// components
import NavigationBar from './global/components/NavigationBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <NavigationBar />
        <MyLayout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/event' element={<Event />} />
            <Route path='/tools' element={<Tools />} />
            <Route path='/tools/internationalization' element={<Internationalization />} />
          </Routes>
        </MyLayout>
    </BrowserRouter>
  </React.StrictMode>
);
