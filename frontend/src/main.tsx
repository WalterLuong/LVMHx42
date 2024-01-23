import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Navbar from './components/Navbar.tsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/login/Login.tsx';
import Wait from './pages/wait/Wait.tsx';
import Experiences from './pages/Experiences/Experiences.tsx';
import TestPage from './pages/testing/TestPage.jsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wait' element={<Wait />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/test' element={<TestPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
