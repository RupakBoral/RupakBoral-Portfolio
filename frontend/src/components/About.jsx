import React from "react";

const About = () => {
  return (
    <div className="reveal-down bg-gradient-to-b from-zinc-800 my-8 md:py-16 py-8 md:px-12 px-6 rounded-2xl text-lg text-zinc-300 font-medium ">
      <div className="w-3/4 space-y-6 md:text-left text-center md:mx-0 mx-auto">
        <p>
          Welcome! I am a Computer Science and Engineering student with a strong
          passion for crafting intuitive and efficient web applications. Skilled
          in JavaScript, React, Tailwind CSS, and Node.js.
          <span className="md:inline hidden">
            I enjoy solving complex problems, creating clean user interfaces and
            writing maintainable code. I am driven by curiosity, continuous
            learning, and the challenge of turning ideas into impactful digital
            experiences.
          </span>
        </p>
        <p>Its my pleasure to help you!</p>
      </div>
    </div>
  );
};

export default About;
