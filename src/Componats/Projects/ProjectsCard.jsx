import React, { useEffect } from "react";
import { CardBody, CardContainer, CardItem } from "./ThreeDcard";
import { FiGithub, FiExternalLink } from "react-icons/fi";
// import Link from "next/link";

export default function ThreeDCardDemo({ Project }) {

  
    
 
 
  return (
    <CardContainer className="inter-var ">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  bg-transparent dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          <a rel="noopener" href={Project.LiveLink} target="_blank">
            <h2 className="text-lg text-white font-bold">{Project.titel}</h2>
          </a>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {Project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full  mt-4">
          <a
            href={Project.LiveLink || Project.githibLink || "/"}
            target="_blank"
          >
            <img
              src={Project.imgUrl}
              height="1000"
              width="1000"
              className="h-60 w-full  object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </a>
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <div className="space-x-2 flex text-primary">
              {Project.LiveLink && (
                <a
                  href={Project.LiveLink}
                  className=" hover:text-white"
                  target="_blank"
                >
                  <FiExternalLink size={20} />
                  <span className="text-white sr-only">Visit Website</span>
                </a>
              )}

              {Project.githibLink && (
                <a
                  href={Project.githibLink}
                  className=" hover:text-white"
                  target="_blank"
                >
                  <FiGithub size={20} />
                  <span className=" sr-only">Visit Source Code</span>
                </a>
              )}
            </div>
          </CardItem>
          <CardItem translateZ={20} as="button">
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
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
