import type { Component } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";

import Home from "./pages/Home";
// import logo from "./logo.svg";
import "./App.css";
import Breakout from "./pages/game/Breakout";

const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/breakout-game" component={Breakout} />
      </Routes>
    </Router>
  );
};

export default App;
