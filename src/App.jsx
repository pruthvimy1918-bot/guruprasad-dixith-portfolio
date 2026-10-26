import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import { NAME } from "./data/config";

const TITLES = { "/services": "Our Services", "/about": "About", "/gallery": "Gallery", "/contact": "Book a Pooja" };

function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${TITLES[pathname] ? TITLES[pathname] + " | " : ""}${NAME}`;
  }, [pathname]);
  return (
    <>
      <Navbar />
      <main className={pathname === "/" ? "" : "sub"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return <HashRouter><Layout /></HashRouter>;
}
