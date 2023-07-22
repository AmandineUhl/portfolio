import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./javascript/layout/Header";
import Home from "./javascript/pages/Home.jsx";
import Footer from "./javascript/layout/Footer";
import "./sass/App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header/>
      <Home />
    <Footer/>
  </React.StrictMode>
);
