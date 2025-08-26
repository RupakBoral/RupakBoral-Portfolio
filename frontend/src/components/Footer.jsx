import React from "react";
import FooterLinks from "./FooterLinks";
import socials from "../utils/socials";
import sitemap from "../utils/siteMap";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between mb-28">
      <div className="reveal-down flex flex-col gap-8 w-1/2">
        <h1 className="text-zinc-100 md:text-4xl text-xl font-semibold">
          Let's work together today!
        </h1>
        <a
          href="#contact"
          className="p-3 bg-sky-600 font-semibold text-sm md:text-lg w-fit text-sky-950 rounded-xl box-content"
        >
          Start <span className="md:inline hidden">Project</span>
        </a>
      </div>
      <div className="reveal-up flex flex-col gap-4">
        {sitemap.map((item, index) => (
          <FooterLinks label={item.label} href={item.href} key={index} />
        ))}
      </div>
      <div className="reveal-down flex flex-col gap-4">
        {socials.map((item, index) => (
          <FooterLinks label={item.label} href={item.href} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
