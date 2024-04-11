import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { Suspense } from 'react'
import Navbar from "./Componats/Navbar";
import Herosection from "./Componats/Herosection";
import Footer from "./Componats/Footer/Footer";
import ProjectPage from "./Componats/Pages/ProjectPage";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  useEffect(() => {
    Shery.mouseFollower({
      //Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
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
        </Routes>
        <Footer />
      </div>
    </div>
  );
};
const FollowingCursorSuspense = () => {
  return (
    <div className="h-[400px] blob aspect-square blur-3xl spin pointer-events-none   dark:opacity-25 opacity-60 bg-white rounded-full fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
  );
};
export default App;
