import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes,useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { useEffect } from "react";
function App() {
  const location = useLocation();
  useEffect(()=> {
    window.scrollTo(0,0);
  },[location.pathname])
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<div style={{ height: `100vh` }} />} />
        <Route path="/contact" element={<div style={{ height: `100vh` }} />} />
      </Routes>
    </Layout>
  );
}

export default App;
