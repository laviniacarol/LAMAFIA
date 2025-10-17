import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes } from "react-router-dom";

//PAGES
import Header from "./containers/Header";
import Hero from "./containers/Hero";
import Sale from "./containers/Sale";
import Man from "./containers/Man";
import Shoes from "./containers/Shoes";
import Colab from "./containers/Colab";
import Acessory from "./containers/Acessory";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Hero />
      <Sale />
      <Man />
      <Shoes />
      <Colab />
      <Acessory />
      <Routes>
      </Routes>
    </Router>
  </React.StrictMode>
);
