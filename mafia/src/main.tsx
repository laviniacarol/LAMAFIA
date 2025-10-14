import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Header from "./containers/Header";
import Hero from "./containers/Hero";
import User from "./containers/User";
import Sale from "./containers/Sale";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/User" element={<User />} />
        <Route path="/sale" element={<Sale />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
