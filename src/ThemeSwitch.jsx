import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import Button from "./Componats/Button";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        rounded={"full"}
        className=" "
        aria-label="Enable or Disable Dark Mode"
        variant={"link"}
        disabled
      >
        <MoonIcon className="scale-[1.8]" aria-hidden />
        <span className=" sr-only">Toggle Dark Mode</span>
      </Button>
    );
  }

  const SwitchTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Button
      rounded={"full"}
      className=" "
      variant={"link"}
      aria-label="Enable or Disable Dark Mode"
      onClick={SwitchTheme}
    >
      <span className=" sr-only">Toggle Dark Mode</span>
      {theme === "dark" ? (
        <MoonIcon className="scale-[1.8]" />
      ) : (
        <SunIcon className="scale-[1.8]" />
      )}
    </Button>
  );
};

export default ThemeSwitch;
