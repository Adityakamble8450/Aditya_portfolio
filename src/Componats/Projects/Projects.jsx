import React from "react";
import { ProjectData } from "../../lib/ProjectData";
import ProjectsCard from "./ProjectsCard";
import { Link } from "react-router-dom";
import { buttonVariants } from "../Button";
const Projects = () => {
  return (
    <div className="p-5">
      <section className="flex flex-col text-left justify-between pt-8 relative my-14">
        <div id="learnmore" className=" scroll-m-24">
          <div className="overflow-x-hidden w-full pt-5">
            <h2 className="landingSectionTitle max-w-sm md:max-w-max mx-auto md:mx-0 text-center md:text-left relative text-3xl font-bold mb-10 text-white pt-4 md:pt-0 md:w-max">
              Here are a few of my favorite projects.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-12 md:gap-5 md:grid-cols-3 items-start">
          {ProjectData.slice(0, 3).map((Project, idx) => (
            <ProjectsCard key={idx} Project={Project} />
          ))}
        </div>
        <div className="relative w-full mt-12 flex  justify-center items-center">
          <Link 
            className={buttonVariants({
              variant: "outline",
              rounded: "full",
              class: "w-[70%]",
              
            }) }
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
