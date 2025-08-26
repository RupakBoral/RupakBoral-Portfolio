import React from "react";
import logo from "../images/logo.png";
import Navbar from "./headerComponents/Navbar";
import { useState } from "react";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <header className="reveal-down fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 md:px-16 py-2">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* logo */}
        <h1>
          <a href="/">
            <img
              className="aspect-square object-contain"
              width={40}
              height={40}
              src={logo}
              alt="Rupak Boral"
            />
          </a>
        </h1>

        {/* nav items */}
        <div className="relative md:justify-self-center">
          {/*<button className="menu-btn md:hidden" onClick={null}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>*/}

          <Navbar />
        </div>

        {/* contact-me */}

        <a
          href="#contact"
          className="btn-secondary max-md:hidden md:justify-self-end bg-zinc-200 text-zinc-800 text-lg p-2 font-medium rounded-xl"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
