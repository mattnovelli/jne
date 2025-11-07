import React from "react";
import Link from "next/link";
import Header from "./components/Header";
import TurbulenceFilter from "./components/TurbulenceFilter";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  const projects = [
    {
      href: "/ltc-rebrand",
      imageSrc: "/images/work/ltc-rebrand/Logomark-Dark-Blue.svg",
      imageAlt: "LTC Rebrand project mockup",
      title: "LTC Rebrand",
      skills: ["Brand Identity", "Art Direction"],
      theme: "theme-ltc-rebrand",
    },
    {
      href: "/corporate-relations",
      imageSrc: "/images/home/ocr_cutout.webp",
      imageAlt: "Office of Corporate Relations project mockup",
      title: "Office of Corporate Relations",
      skills: ["Editorial", "Brand Identity"],
      theme: "theme-corporate-relations",
    },
    {
      href: "/hi-ai",
      imageSrc: "/images/work/hi-ai/Frame 12.png",
      imageAlt: "Hi, AI project mockup",
      title: "Hi, AI",
      skills: ["Brand Identity", "Art Direction", "Event Design"],
      theme: "theme-hi-ai",
    },
    {
      href: "/bugs-next-door",
      imageSrc: "/images/work/bugsnextdoor/final bugs/butterfly.png",
      imageAlt: "Bugs Next Door project mockup",
      title: "Bugs Next Door",
      skills: ["UI/UX", "Brand Identity", "Illustration"],
      theme: "theme-bugs-nextdoor",
    },
    {
      href: "/olympics",
      imageSrc: "/images/home/olympics_cutout.webp",
      imageAlt: "LA 2028 Olympics project mockup",
      title: "LA 2028 Olympics",
      skills: ["Brand Identity", "Event Design", "UI/UX"],
      theme: "theme-olympics",
    },
    {
      href: "/thedailyillini",
      imageSrc: "/images/home/di_cutout.webp",
      imageAlt: "The Daily Illini project mockup",
      title: "The Daily Illini",
      skills: ["Art Direction", "Editorial", "Print"],
      theme: "theme-daily-illini",
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
    <div className="flex px-12 flex-col min-h-full grow ">
      <div id="turbulence" className="text-center block md:mb-20! mb-12!   ">
        <h1 className="font-black! leading-tight! text-5xl! sm:text-6xl!">
          julia eversmann
        </h1>
        <h2 className="mb-0 text-3xl! sm:text-4xl!">graphic designer</h2>
      </div>

      <div
        id="my-work"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8  max-w-5xl m-auto! "
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
