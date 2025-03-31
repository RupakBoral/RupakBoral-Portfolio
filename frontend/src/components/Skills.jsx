import React from "react";
import ItemsList from "./ItemsList";
import reactIcon from "../images/react.jpeg";
import TailwindIcon from "../images/tailwindcss.png";
import reduxIcon from "../images/redux.png";
import expressIcon from "../images/expressjs.png";
import jsIcon from "../images/js.png";
import mongoIcon from "../images/mongoDB.png";
import htmlIcon from "../images/html.png";
import nodejsIcon from "../images/nodejs.jpeg";
import CppIcon from "../images/cpp.png";

const Skills = () => {
  const skillItem = [
    {
      imgSrc: reactIcon,
      label: "React",
      desc: "JS Library",
    },
    {
      imgSrc: TailwindIcon,
      label: "TailwindCSS",
      desc: "User Interface",
    },
    {
      imgSrc: reduxIcon,
      label: "Redux",
      desc: "Design tool",
    },
    {
      imgSrc: mongoIcon,
      label: "Mongo DB",
      desc: "Database Storage",
    },
    {
      imgSrc: jsIcon,
      label: "JavaScript",
      desc: "Interaction",
    },
    {
      imgSrc: htmlIcon,
      label: "HTML",
      desc: "Building Structure",
    },
    {
      imgSrc: nodejsIcon,
      label: "NodeJS",
      desc: "Web Server",
    },
    {
      imgSrc: expressIcon,
      label: "Express Js",
      desc: "Building RESTful API",
    },
    {
      imgSrc: CppIcon,
      label: "CPP",
      desc: "Problem Solving",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold text-zinc-200 md:text-left text-center reveal-down">
        Skills
      </h1>
      <p className="md:w-1/2 w-auto text-zinc-300 md:text-left text-center reveal-down">
        Discover the powerful tools and technologies I use to create exceptional
        websites and applications.
      </p>
      <div className="grid md:grid-cols-3 gap-4 flex-wrap reveal-up">
        {skillItem.map((item, index) => (
          <ItemsList
            icon={item.imgSrc}
            skill={item.label}
            desc={item.desc}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
