import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "./routes/routes";

export function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
