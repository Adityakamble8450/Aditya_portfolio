import React, { useEffect } from "react";
import Button from "./Button"; // Import Button component from ui/button.js
import findLinkByName from "../lib/Data"; // Import findLinkByName function from Data.js
import resunme from '/RESUME-Aditya.pdf'
import { Link } from "react-router-dom";
// import Three from "./Three";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineDownload,
} from "react-icons/ai";
import MouseIcon from "./MouseIcon";
import { buttonVariants } from "./Button";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Eyes from "./Eyes";
// import './HeroSection.css'; // Import CSS file for styling

const HeroSection = () => {

   useEffect(() => {
    Shery.makeMagnet(".magnet-target", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
   }, [])
   

  return (
    <>
  
    <div className="w-full  min-h-screen ">
    <section className="flex justify-center relative w-full m-auto flex-col text-center items-center h-[calc(100vh-80px)] pt-20 pb-40">

      <h1 className="text-xl  text-white mb-5">Hey, I'm Aditya.</h1>
      <p className="inline-block  text-[white] max-w-2xl lg:max-w-4xl w-auto relative text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-10 font-bold">
        Turning <span className="text-primary">Ideas</span> into seamless web{" "}
        <span className="text-primary">realities</span>.
      </p>
      <div className="flex gap-5">
        <a href="#contact">
        <Button
          variant="outline"
          size="lg"
          className="w-[190px] magnet-target"
          rounded="full"
        //   href="#contact"
        >
          Contact Me
        </Button>
        </a>
        <a
          className={buttonVariants({
            variant: "outline",
            size: "lg",
            class: "w-[130px] magnet-target max-md:hidden gap-2",
            rounded: "full",
          })}
          target="_blank"
          href={resunme}
        >
          CV
          <AiOutlineDownload size={16} />
        </a>
      </div>
      <div className="fixed right-6 bottom-6 max-md:hidden justify-center items-center flex flex-col gap-2">
        <a
          title="Github"
          className="hover:text-primary text-white cursor-pointer"
          target="_blank"
          href={findLinkByName("GitHub")}
        >
          <AiFillGithub size={25} />
        </a>
        <a
          title="Linkedin"
          className="hover:text-primary text-white cursor-pointer"
          target="_blank"
          href={findLinkByName("LinkedIn")}
        >
          <AiFillLinkedin size={25} />
        </a>
        <a
          title="Twitter"
          className="hover:text-primary text-white cursor-pointer"
          target="_blank"
          href={findLinkByName("Twitter")}
        >
          <AiFillTwitterSquare size={25} />
        </a>
        <div className="h-20 w-1 bg-primary"></div>
      </div>
      <a
        href="#learnmore"
        className="absolute group animate-float duration-1000 hover:animation-pause transition-all cursor-pointer flex flex-col justify-center border-input bottom-12 rounded-full "
      >
        <MouseIcon style={{ scale: 0.7 }}  />
      </a>
    </section>
    <Projects/>
    <Skills/>
    <Contact/>
    <Eyes/>




    </div>
    </>


  );
};

export default HeroSection;