// src/App.js
import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Follow from "./components/follow/Follow";

function App() {
  return (
    <Router>
      <Navbar />
      <Follow />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
