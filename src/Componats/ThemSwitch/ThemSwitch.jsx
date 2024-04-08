import React, { useState, useEffect } from "react";
// import { MoonIcon, SunIcon } from "react-icons/io5"; // Example, you can use any icon library
import Button from "../Button"; // Example, replace this with your actual Button component
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  if (!mounted) {
    return (
      <Button
        rounded="full"
        className=""
        aria-label="Enable or Disable Dark Mode"
        variant="link"
        disabled
      >
        <FaMoon className="scale-[1.8]" aria-hidden />
        <span className="sr-only">Toggle Dark Mode</span>
      </Button>
    );
  }

  return (
    <Button
      rounded="full"
      className=""
      variant="link"
      aria-label="Enable or Disable Dark Mode"
      onClick={switchTheme}
    >
      <span className="sr-only">Toggle Dark Mode</span>
      {theme === "dark" ? (
        <FaMoon className="scale-[1.8]" />
      ) : (
        <IoSunnySharp className="scale-[1.8]" />
      )}
    </Button>
  );
};

export default ThemeSwitch;
