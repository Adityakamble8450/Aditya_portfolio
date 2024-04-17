import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { Suspense } from 'react'
import Navbar from "./Componats/Navbar";
import Herosection from "./Componats/Herosection";
import Footer from "./Componats/Footer/Footer";
import ProjectPage from "./Componats/Pages/ProjectPage";
import LocomotiveScroll from "locomotive-scroll";
import AboutUs from "./Componats/Pages/About";

const App = () => {
  useEffect(() => {
    const isDesktop = window.innerWidth > 768; // Check if it's desktop view
    if (isDesktop) {
      Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    }
  }, []);
  

  const scroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-[#030712]">
      <div className="hidden md:block border-b-2  bg-primary z-[10000] w-full top-0 h-full right-0  fixed animate"></div>

      <div className="z-[5]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Herosection />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
};

export default App;
