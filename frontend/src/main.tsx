import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/login/Login.tsx";
import Wait from "./pages/wait/Wait.tsx";
import Experiences from "./pages/Experiences/Experiences.tsx";
import TestPage from "./pages/testing/TestPage.jsx";
import Dior from "./pages/Experiences/Dior.tsx";
import TopNav from "./components/TopNav.tsx";
import Join from "./pages/Join/Join.tsx";
import Explorez from "./pages/Explorez/Explorez.tsx";
import MyLV from "./pages/MyLV/MyLV.tsx";
import MyQueue from "./pages/MyQueue/MyQueue.tsx";
import Map from "./pages/Map/Map.tsx";
import Tutorial from "./pages/Tutorial/Tutorial.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <TopNav />
      <Navbar />
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/login' element={<Login />} />
        <Route path='/wait' element={<Wait />} />
        <Route path='/experiences' element={<Experiences />} />
        <Route path='/test' element={<TestPage />} />
        <Route path='/dior' element={<Dior />} />
        <Route path='/explore' element={<Explorez />} />
        <Route path='/mylv' element={<MyLV />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/join' element={<Join />} />
        <Route path='myqueue' element={<MyQueue />} />
        <Route path='map' element={<Map />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
