import React, { useEffect } from "react";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";

import Home from "./Home";
import Category from "./Category";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";
import Breadcrumb from "../Layouts/Breadcrumb";

import "../Assets/Styles/app.css";

function App() {
  let location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 0);
  }, [location]);

  return (
    <div className="app">
      <Navbar />
      {location.pathname !== "/" && <Breadcrumb location={location} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category" element={<Navigate to="/category/living-room" replace />} />
        <Route path="/category/:roomName" element={<Category />} />
        <Route path="/product/:productName" element={<ProductDetail />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
