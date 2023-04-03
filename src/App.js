import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import "./style/App.css";
import Portfolios from "./pages/portfolios/Portfolios";
import Blog from "./pages/blog/Blog";
import Journey from "./pages/journey/Journey";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
