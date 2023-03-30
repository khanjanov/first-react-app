import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/about/About";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
