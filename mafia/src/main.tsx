import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastProvider } from "./contexts/ToastContext";

// components
import Toast from "./components/Toast";

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
import NotFound from "./pages/NotFound";


const root = document.getElementById("root")!;

createRoot(root).render(
  <React.StrictMode>
    <AuthProvider>
      <CartProvider>
        <ToastProvider>
          <BrowserRouter>
            <Toast />
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
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
          </BrowserRouter>
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  </React.StrictMode>
);
