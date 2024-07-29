import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
// import About from './pages/About';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dev"
        element={
          <React.StrictMode>
            <App />
          </React.StrictMode>
        }
      />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
  </Router>
);
