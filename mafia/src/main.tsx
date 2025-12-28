import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";

// containers
import Header from "./containers/Header";
import Hero from "./containers/Hero";
import Sale from "./containers/Sale";
import Man from "./containers/Man";
import Shoes from "./containers/Shoes";
import Colab from "./containers/Colab";
import Acessory from "./containers/Acessory";
import Footer from "./containers/Footer";
import Email from "./containers/Email";

// pages
import User from "./containers/User";


const root = document.getElementById("root")!;

createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Sale />
                  <Man />
                  <Shoes />
                  <Colab />
                  <Acessory />
                  <Email />
                </>
              }
            />

            <Route path="/user" element={<User />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
