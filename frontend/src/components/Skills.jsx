import React from "react";
import ItemsList from "./ItemsList";
import skillItem from "../utils/skillItem";

const Skills = () => {
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
