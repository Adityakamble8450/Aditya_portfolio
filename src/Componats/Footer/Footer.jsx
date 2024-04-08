import React from "react";

import { Email, footer, sourceCodeLink } from "../../lib/Data";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col w-full mt-9 px-5 py-10 border-t  z-5 bg-bg">
      <div className="w-full max-w-4xl m-auto grid grid-cols-2 sm:grid-cols-3 justify-between items-start">
        {footer.columns.map((item, index) => {
          return (
            <div key={index} className="text-left mb-5 sm:mb-0">
              <h2 className="uppercase text-fun-gray text-white text-sm font-bold">
                {item.title}
              </h2>
              <div className="text-white">
                {item.links.map((item, index) => {
                  return (
                    <div key={index} className="my-4">
                      {item.leavesWebsite ? (
                        <a
                          href={item.link}
                          target="_blank"
                          className="items-center flex"
                        >
                          {item.icon && (
                            <span className="pr-2 text-white mb-1">
                              <img
                                title="icon"
                                alt={`${item.name} Icon`}
                                src={item.icon}
                                width={20}
                                aria-hidden
                                className="italic"
                                loading="lazy"
                                height={20}
                              />
                            </span>
                          )}
                          {item.name}
                        </a>
                      ) : (
                        <Link to={item.link}>{item.name}</Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-4xl w-full m-auto mt-8 pt-8 sm:mt-4 sm:pt-4 text-center text-fun-gray border-t border-fun-pink-dark text-white">
        <div className="flex flex-col items-center justify-center ">
          <div className="inline-flex items-center uppercase text-xs font-bold tracking-widest">
            Made with{" "}
            <div className="space-x-2 inline-flex items-center -mt-1 ml-3">
              <span>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  width="26"
                  title="React"
                  loading="lazy"
                  alt="React Icon"
                />
                <span className="sr-only text-white">React</span>
              </span>
            </div>
          </div>
          <div className="mt-2 text-xs text-white ">
            Made by{" "}
            <a
              href={`mailto:${Email}`}
              className="text-fun-gray-light font-bold"
            >
              Aditya kamble
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
