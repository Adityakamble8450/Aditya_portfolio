import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { buttonVariants } from "./Button";
import resunme from "../../public/RESUME-Aditya.pdf";
// import NavLink from "./NavLink";
import NavLink from "./NavLink";
import AudioToggel from "./AoudioToggel";
// import ThemeSwitch from "./ThemeSwich";
// import { routes } from "@/lib/Data";
import { AiOutlineDownload } from "react-icons/ai";

const MobileMenu = () => {
  const [opened, setopen] = useState(false);
  return (
    <>
      <div onClick={() => setopen(true)}>
        <HiMenuAlt3 color="white" size={30} />
      </div>

      <div
        className={` w-full h-[100dvh] px-5 py-5 flex flex-col fixed bg-[#030712] ease-out transition-all  duration-500 left-0 top-0 z-50 ${
          opened ? "unmasked" : "masked"
        }`}
      >
        <div className=" ml-auto" onClick={() => setopen(false)}>
          {" "}
          <AiOutlineClose color="white" size={20} />{" "}
        </div>
        <div className="mt-9 h-full flex-col flex justify-between">
          <ul className=" w-full grow ">
            <li
              className={`list-none  mt-4  w-full flex  justify-center text-gray-500`}
            >
              <NavLink
                className=" hover:text-foreground text-white text-2xl nav-link relative py-1"
                activeClassName="text-white"
                to={"/"}
                onClick={() => {
                  setopen(false);
                }}
              >
                Home
              </NavLink>
            </li>

            <li
              className={`list-none  mt-4  w-full flex  justify-center text-gray-500`}
            >
              <NavLink
                className=" hover:text-foreground text-white text-2xl nav-link relative py-1"
                activeClassName=" text-foreground"
                to={"/projects"}
                onClick={() => {
                  setopen(false);
                }}
              >
                Projects
              </NavLink>
            </li>
            <li
              className={`list-none  mt-4  w-full flex  justify-center text-gray-500`}
            >
              <NavLink
                className=" hover:text-foreground text-white text-2xl nav-link relative py-1"
                activeClassName=" text-foreground"
                to={"/about"}
                onClick={() => {
                  setopen(false);
                }}
              >
                About me
              </NavLink>
            </li>
            <li
              className={`list-none  mt-4  w-full flex  justify-center text-gray-500`}
            >
              <a
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  class: "w-[130px] magnet-target  gap-2",
                  rounded: "full",
                })}
                target="_blank"
                href={resunme}
                // onClick={() => {
                //   setopen(false);
                // }}
              >
                CV
                <AiOutlineDownload size={16} />
              </a>
            </li>
          </ul>
          <ul className=" pb-5">
            <li className=" flex items-center gap-2">
              <AudioToggel />
              {/* <ThemeSwitch /> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
