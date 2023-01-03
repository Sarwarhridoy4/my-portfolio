import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DarkMode = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Link
      onClick={handleThemeSwitch}
      className=' ml-5 block mt-4 lg:inline-block lg:mt-0 text-teal-500 hover:text-teal-500 mr-4'
    >
      Light/Dark
    </Link>
  );
};

export default DarkMode;
