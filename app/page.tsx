import React from "react";
import Link from "next/link";
import Header from "./components/Header";
import TurbulenceFilter from "./components/TurbulenceFilter";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  const projects = [
    {
      href: "/olympics",
      imageSrc: "/images/home/olympics_cutout.webp",
      imageAlt: "LA 2028 Olympics project mockup",
      title: "LA 2028 Olympics",
      skills: ["graphic design", "ui / ux", "brand identity"],
      theme: "theme-olympics",
    },
    {
      href: "/thedailyillini",
      imageSrc: "/images/home/di_cutout.webp",
      imageAlt: "The Daily Illini project mockup",
      title: "The Daily Illini",
      skills: [
        // "art direction",
        "graphic design",
        "brand identity",
        "page layout",
      ],
      theme: "theme-daily-illini",
    },
    {
      href: "/hi-ai",
      imageSrc: "/images/work/hi-ai/Frame 12.png",
      imageAlt: "Hi, AI project mockup",
      title: "Hi, AI",
      skills: [
        // "art direction",
        // "graphic design",
        // "brand identity",
        // "page layout",
      ],
      theme: "theme-hi-ai",
    },
    {
      href: "/corporate-relations",
      imageSrc: "/images/home/ocr_cutout.webp",
      imageAlt: "Office of Corporate Relations project mockup",
      title: "Office of Corporate Relations",
      skills: ["book design", "photo editing", "graphic design"],
      theme: "theme-corporate-relations",
    },
    {
      href: "/bugs-next-door",
      imageSrc: "/images/work/bugsnextdoor/final bugs/butterfly.png",
      imageAlt: "Bugs Next Door project mockup",
      title: "Bugs Next Door",
      skills: [
        // "art direction",
        // "graphic design",
        // "brand identity",
        // "page layout",
      ],
      theme: "theme-bugs-nextdoor",
    },
    {
      href: "/ltc-rebrand",
      imageSrc: "/images/work/ltc-rebrand/Logomark-Dark-Blue.svg",
      imageAlt: "LTC Rebrand project mockup",
      title: "LTC Rebrand",
      skills: [
        // "art direction",
        // "graphic design",
        // "brand identity",
        // "page layout",
      ],
      theme: "theme-ltc-rebrand",
    },
    // {
    //   href: "/parent-toolkit",
    //   imageSrc: "/images/home/di_cutout.webp",
    //   imageAlt: "Parent Toolkit project mockup",
    //   title: "Parent Toolkit",
    //   skills: [
    //     // "art direction",
    //     // "graphic design",
    //     // "brand identity",
    //     // "page layout",
    //   ],
    //   theme: "parent-toolkit",
    // },
    // {
    //   href: "/ietc-anniversary",
    //   imageSrc: "/images/home/di_cutout.webp",
    //   imageAlt: "IETC Anniversary project mockup",
    //   title: "IETC Anniversary",
    //   skills: [
    //     // "art direction",
    //     // "graphic design",
    //     // "brand identity",
    //     // "page layout",
    //   ],
    //   theme: "ietc-anniversary",
    // },
  ];

  return (
    <div className=" flex px-12 flex-col">
      <div id="turbulence" className="text-center ">
        <h1 className="mt-0 mb-0 font-black! md:text-8xl! text-base">
          julia eversmann
        </h1>
        <h2 className="mt-[0.5vw] md:mt-[4vw] mb-0">graphic designer</h2>
      </div>

      <div
        id="my-work"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12  max-w-7xl mx-auto! mt-10!"
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <footer className="mt-16">
        {/* Insert walking lizards animation here */}
      </footer>
    </div>
  );
}
