import React from "react";
import dev from "../images/dev.jpg";
import developer from "../images/developer.jpeg";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex font-sans pt-[45%] md:pt-[20%] lg:pt-[20%] -space-x-8 md:space-x-0 overflow-x-hidden "
    >
      <div className="flex flex-col gap-8 justify-center">
        <div className="flex items-center gap-4">
          <img
            src={developer}
            className="w-12 h-12 rounded-full reveal-up"
            alt=""
          />
          <p className="text-zinc-400 text-base reveal-down">
            Available for work
          </p>
        </div>
        <h1 className="text-5xl w-3/4 font-semibold text-zinc-100 reveal-up">
          Building Scalable Modern Website for the Future
        </h1>
        <div className="flex justify-between w-3/4 gap-4 reveal-down">
          <a
            href="https://drive.google.com/file/d/18YR87dyRhXbotQdYn5qzDZk5dNGC576n/view?usp=sharing"
            target="blank"
          >
            <button className="flex gap-4 p-3 bg-sky-500 text-blue-950 rounded-xl font-medium text-sans">
              <p>Download Resume</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
            </button>
          </a>
          <a href="#about">
            <button className="flex gap-4 p-3 bg-gray-800 text-sky-500 rounded-xl font-medium text-sans">
              <p>Scroll Down </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#5084C1"
              >
                <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
              </svg>
            </button>
          </a>
        </div>
      </div>
      <img
        className="md:w-96 md:h-96 w-60 h-60 hidden sm:inline rounded-full"
        src={dev}
        alt=""
      />
    </div>
  );
};

export default Hero;
