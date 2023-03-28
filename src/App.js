import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/global.scss";
import "./assets/css/style.scss";
import "./assets/css/responsive.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Topheader from "./components/Topheader";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blogpage from "./pages/Blog";
import Singleblog from "./pages/Singleblog";
import Product from "./pages/Product";
import Singleproduct from "./pages/Singleproduct";
import Privacy from "./pages/Privacy";
import Return from "./pages/Return";
import Terms from "./pages/Terms";
import Features from "./pages/Features";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Topheader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/single-blog" element={<Singleblog />} />
          <Route path="/single-product" element={<Singleproduct />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/return-policy" element={<Return />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/features" element={<Features />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
