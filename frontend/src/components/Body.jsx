import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import PortfolioHighlights from "./PortfolioHighlights";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

const Body = () => {
  return (
    <div className="md:w-3/5 w-5/6 mx-auto flex flex-col gap-12 md:gap-20">
      <Hero />
      <hr id="about" className="border-transparent" />
      <About />
      <hr id="skills" className="border-zinc-600 w-3/4 mx-auto" />
      <Skills />
      <hr id="work" className="border-zinc-600 w-3/4 mx-auto" />
      <PortfolioHighlights />
      <hr id="contact" className="border-zinc-600 w-3/4 mx-auto" />
      <ContactMe />
      <hr className="border-zinc-600 w-3/4 mx-auto" />
      <Footer />
    </div>
  );
};

export default Body;
