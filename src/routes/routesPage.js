import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/portfolio" element={<Portfolio />} />
  </Routes>
</BrowserRouter>;
