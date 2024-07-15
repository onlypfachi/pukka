import { useState } from "react";
// import github from "../assets/github.svg";
// import linkedin from "../assets/linkedin.svg";
// import light from "../assets/light.svg";
// import dark from "../assets/dark.svg";
// import modes from "../assets/mode.svg";

import {
  MoonIcon,
  LinkedInLogoIcon,
  SunIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";
import { Switch } from "@/components/ui/switch";

const NavBar = () => {
  const [mode, setMode] = useState(false);

  const handleModeChange = (isChecked: boolean) => {
    console.log(mode);
    setMode(isChecked);
    localStorage.theme = isChecked ? "dark" : "light";
    window.location.reload();
  };

  return (
    <nav
      className={`sticky top-0 border-solid ${
        localStorage.getItem("theme") === "dark"
          ? "border-white bg-black"
          : "border-black bg-white"
      } h-12  px-4`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 h-full">
        <div className="flex items-center space-x-3 rtl:space-x-reverse z-50 h-full">
          <SunIcon
            className={`h-full ${
              localStorage.getItem("theme") === "dark"
                ? "text-white"
                : "text-black"
            }`}
          />
          <Switch
            onCheckedChange={handleModeChange}
            value={localStorage.theme}
            checked={localStorage.theme === "dark"}
          />
          <MoonIcon
            className={`h-full ${
              localStorage.getItem("theme") === "dark"
                ? "text-white"
                : "text-black"
            }`}
          />
          <a href="https://www.linkedin.com/in/tadiwapfachi/">
            <LinkedInLogoIcon
              className={`h-full ${
                localStorage.getItem("theme") === "dark"
                  ? "text-white"
                  : "text-black"
              }`}
            />
          </a>
          <a href="https://github.com/onlypfachi">
            <GitHubLogoIcon
              className={`h-full ${
                localStorage.getItem("theme") === "dark"
                  ? "text-white"
                  : "text-black"
              }`}
            />
          </a>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 border ${
              localStorage.getItem("theme") === "dark"
                ? "text-white bg-black"
                : "text-black bg-white border-black md:bg-white"
            } rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   `}
          >
            <li>
              <a
                href="#reset"
                className={`block px-3 bg-transparent rounded   ${
                  localStorage.getItem("theme") === "dark"
                    ? "md:bg-transparent  md:p-0 text-white hover:"
                    : " md:bg-transparent text-black md:text-white"
                }`}
                aria-current="page"
              >
                Reset
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className={`block py-2 px-3 ${
                  localStorage.getItem("theme") === "dark"
                    ? "text-white md:hover:text-gray-100 hover:bg-gray-100 hover:text-white md:hover:bg-transparent"
                    : "text-black"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0  `}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#resume"
                className={`block py-2 px-3 ${
                  localStorage.getItem("theme") === "dark"
                    ? "text-white md:hover:text-gray-100 hover:bg-gray-100 hover:text-white md:hover:bg-transparent"
                    : "text-black"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0  `}>
                Resume
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`block py-2 px-3 ${
                  localStorage.getItem("theme") === "dark"
                    ? "text-white md:hover:text-gray-100 hover:bg-gray-100 hover:text-white md:hover:bg-transparent"
                    : "text-black"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0  `}>
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact-me"
                className={`block py-2 px-3 ${
                  localStorage.getItem("theme") === "dark"
                    ? "text-white md:hover:text-gray-100 hover:bg-gray-100 hover:text-white md:hover:bg-transparent"
                    : "text-black"
                } rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-100 md:p-0  `}  >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
