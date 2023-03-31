import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import "./style/App.css";
import Portfolios from "./pages/portfolios/Portfolios";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolios" element={<Portfolios />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
