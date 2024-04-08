import React from "react";
// import { Tilt } from 'react-tilt'
import Tilt from "react-parallax-tilt";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectsCard = ({ Project }) => {
  const NotFound = "/projects/NotFound.jpeg";

  return (
    <Tilt scale={1.02}>
      <div className="max-w-sm group mx-auto flex flex-col projects-center md:projects-start md:justify-center">
        <a
          href={Project.LiveLink || Project.githibLink || "/"}
          target="_blank"
          className=" relative  h-[231.91px] text-white  rounded-xl border-secondary border p-2 transition group-hover:-translate-y-2 group-hover:opacity-75 group-hover:border-primary will-change-projectCard"
        >
          <img
            className="w-full h-full object-cover rounded-md"
            alt="IMAGE"
            onError={(e) => (e.currentTarget.src = NotFound)}
            width={150}
            height={150}
            loading="lazy"
            src={Project.imgUrl}
          ></img>
        </a>
        <div className="w-full mt-5">
          <div className="flex projects-center justify-between">
            <a rel="noopener" href={Project.LiveLink} target="_blank">
              <h2 className="text-lg text-white font-bold">{Project.titel}</h2>
            </a>
            <div className="space-x-2 flex text-primary">
              {Project.LiveLink && (
                <a
                  href={Project.LiveLink}
                  className=" hover:text-white"
                  target="_blank"
                >
                  <FiExternalLink />
                  <span className="text-white sr-only">Visit Website</span>
                </a>
              )}

              {Project.githibLink && (
                <a
                  href={Project.githibLink}
                  className=" hover:text-white"
                  target="_blank"
                >
                  <FiGithub />
                  <span className=" sr-only">Visit Source Code</span>
                </a>
              )}
            </div>
          </div>
          <p className="text-fun-gray text-left text-white text-sm">
            {Project.description}
          </p>
          <ul className="flex flex-wrap items-center mt-2 -ml-2 list-none">
            {Project.Skills
              ? Project.Skills?.map((name, i) => (
                  <li key={i}>
                    <div className="m-1 rounded-lg text-sm bg-secondary py-1 px-2 cursor-pointer hover:opacity-75 ">
                      {name}
                    </div>
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </div>
    </Tilt>
  );
};

export default ProjectsCard;
