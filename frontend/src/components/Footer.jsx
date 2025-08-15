import React from "react";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const sitemap = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Project",
      href: "#work",
    },
    {
      label: "Contact me",
      href: "#contact",
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://www.github.com/RupakBoral",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rupak-boral-169435249/",
    },
    {
      label: "Leetcode",
      href: "https://leetcode.com/u/RupakBoral/",
    },
    {
      label: "Email",
      href: "mailto:boralrupak@gmail.com",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row justify-between mb-28">
      <div className="reveal-down flex flex-col gap-8 w-1/2">
        <h1 className="text-zinc-100 text-4xl font-semibold">
          Let's work together today!
        </h1>
        <a
          href="#contact"
          className="p-3 bg-sky-600 font-semibold text-lg text-sky-950 w-2/5 rounded-xl box-content"
        >
          Start Project{" "}
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
