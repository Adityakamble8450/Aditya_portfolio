import React from "react";
import { Route, Routes } from "react-router-dom";
// import { Suspense } from 'react'
import Background from "./Componats/backgroud/Backgorund";
import { Suspense } from "react";
import Navbar from "./Componats/Navbar";
import Herosection from "./Componats/Herosection";
import Footer from "./Componats/Footer/Footer";
import ProjectPage from "./Componats/Pages/ProjectPage";
import FollowingCursor from "./Componats/FollowingCur";
import LocomotiveScroll from "locomotive-scroll";
const App = () => {
  const scroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-[#030712]">
      <div className="hidden md:block border-b-2  bg-primary z-[10000] w-full top-0 h-full right-0  fixed animate"></div>

      <div className=" absolute left-0 top-0 w-full h-screen pointer-events-none ">
        <Background />
      </div>
      <div className="z-[5]">
        <Suspense fallback={<FollowingCursorSuspense />}>
          <FollowingCursor />
        </Suspense>
        <Navbar/>
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
