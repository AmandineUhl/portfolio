import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header/Header";
import Home from "./pages/Home";
import Footer from "./layout/Footer/Footer";
import SkyAnimation from "./components/SkyAnimation/SkyAnimation";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SkyAnimation />
    <Header/>
      <Home />
    <Footer/>
  </React.StrictMode>
);
