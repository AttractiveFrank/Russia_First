import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/home"
import Font from "../pages/Font";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import NewPage from "../pages/NewPage";
import Visualization from '../pages/Visualization'

const RouterControl = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visualization" element={<Visualization />} />
        <Route path="/fonts" element={<Font />} />
        <Route path="/buttons" element={<NewPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterControl;
