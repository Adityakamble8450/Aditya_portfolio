import React, { useEffect } from "react";
import { ProjectData } from "../../lib/ProjectData";
// import ProjectsCard from "./ProjectsCard";
import ThreeDCardDemo from "./ProjectsCard";
import { Link } from "react-router-dom";
import { buttonVariants } from "../Button";
const Projects = () => {
  useEffect(() => {
    Shery.makeMagnet(".magnet-target", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }, []);

  useEffect(() => {
    Shery.textAnimate(".text-target" /* Element to target.*/, {
      //Parameters are optional.
      style: 2,
      y: 10,
      delay: 0.1,
      duration: 2,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      multiplier: 0.1,
    });

    
  }, [])


  

  return (
    <div className="p-5">
      <section className="flex flex-col  text-left justify-between pt-8 relative ">
        <div id="learnmore" className=" scroll-m-24">
          <div className="overflow-x-hidden w-full pt-5">
            <h2 className="landingSectionTitle max-w-sm md:max-w-max mx-auto md:mx-0 text-center md:text-left relative text-target text-3xl font-bold   mb-10 text-white pt-4 md:pt-0 md:w-max">
              Here are a few of my favorite projects.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-9 md:gap-5 md:grid-cols-3 items-start">
          {ProjectData.slice(0, 3).map((Project, idx) => (
            <ThreeDCardDemo key={idx} Project={Project} />
          ))}
        </div>
        <div className="relative w-full mt-12 flex mb-5  justify-center items-center">
          <Link
            className={buttonVariants({
              variant: "outline",
              rounded: "full",
              class: "w-[70%]  ",
            })}
            to={"/projects"}
          >
            {" "}
            View All{" "}
          </Link>
        </div>
      </section>
    </div>
  );
};
export default Projects;
