import React, { useEffect } from "react";
import Logo from "./Styles/Logo";
// import { Links } from '/src/lib/Data.jsx'
import { Links } from "../lib/Data";
// import routes from '../lib/Data'

import NavLink from "./NavLink";
import { sourceCodeLink } from "../lib/Data";


import AudioToggel from "./AoudioToggel";
import MobileMenu from "./Mobilemenu";

const Navbar = () => {
    useEffect(() => {
      Shery.makeMagnet(".magnet-target", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    }, []);
  

  return (
    <div>
      <nav className="flex h-[80px] items-center justify-between mx-auto max-w-[1400px] px-5 md:px-14">
        <ul>
          <li className="list-none    font-bold text-lg cursor-pointer">
            <Logo />
          </li>
        </ul>
        <ul className="flex items-center space-x-10 max-md:hidden">
          {Links.map((item, index) => {
            return (
              <li
                key={index}
                className={`list-none magnet-target text-gray-500`}
              >
                <NavLink
                  className=" hover:text-[white] nav-link relative py-1"
                  activeClassName=" text-[white]"
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          <li className=" flex items-center gap-2">
            <AudioToggel />
         
            <a href={sourceCodeLink} target="_blank">
              <img
                className=" text-primary w-[24px] h-[24px] cursor-pointer"
                alt="srccode"
                loading="lazy"
                width={24}
                height={24}
                src="/Icons/github.svg"
              />
              <span className=" sr-only">Source Code</span>
            </a>
          </li>
        </ul>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
