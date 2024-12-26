import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import EloStats from "./components/EloStats";
import LiveStreams from "./components/LiveStreams.js";
import Riot from "./components/Riot.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/elo" element={<EloStats />} />
        <Route path="/live" element={<LiveStreams/>} />
      </Routes>
    </Router>
  );
}

export default App;
