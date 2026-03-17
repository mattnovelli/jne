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
      imageAlt: "",
      title: "LTC Rebrand",
      skills: ["Brand Identity", "Art Direction"],
      theme: "theme-ltc-rebrand",
    },
    {
      href: "/ietc-anniversary",
      imageSrc: "/images/home/IETC square.png",
      imageAlt: "",
      title: "IETC Anniversary",
      skills: [
        // "art direction",
        // "graphic design",
        // "brand identity",
        // "page layout",
      ],
      theme: "theme-ietc-anniversary",
    },
    {
      href: "/hi-ai",
      imageSrc: "/images/work/hi-ai/Frame 12.png",
      imageAlt: "",
      title: "Hi, AI",
      skills: ["Brand Identity", "Art Direction", "Event Design"],
      theme: "theme-hi-ai",
    },
    {
      href: "/corporate-relations",
      imageSrc: "/images/home/ocr_cutout.webp",
      imageAlt: "",
      title: "Office of Corporate Relations",
      skills: ["Editorial", "Brand Identity"],
      theme: "theme-corporate-relations",
    },

    {
      href: "/thedailyillini",
      imageSrc: "/images/home/di_cutout.webp",
      imageAlt: "",
      title: "The Daily Illini",
      skills: ["Art Direction", "Editorial", "Print"],
      theme: "theme-daily-illini",
    },
    {
      href: "/olympics",
      imageSrc: "/images/home/olympics_cutout.webp",
      imageAlt: "",
      title: "LA 2028 Olympics",
      skills: ["Brand Identity", "Event Design", "UI/UX"],
      theme: "theme-olympics",
    },
    {
      href: "/bugs-next-door",
      imageSrc: "/images/work/bugsnextdoor/final bugs/butterfly.png",
      imageAlt: "",
      title: "Bugs Next Door",
      skills: ["UI/UX", "Brand Identity", "Illustration"],
      theme: "theme-bugs-nextdoor",
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
          <ProjectCard key={index} {...project} priority />
        ))}
        <div className=" bg-amber-500 md:col-span-2 col-span-1 row-span-1 text-white p-6!  rounded-3xl  flex flex-col overflow-hidden duration-200  shadow-lg">
          <p className="font-black mt-auto! text-black">More to Come!</p>
        </div>
      </div>
    </div>
  );
}
