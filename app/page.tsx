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
      href: "/pocketbringhurst",
      imageSrc: "/images/home/bringhurst_cutout.webp",
      imageAlt: "Pocket Bringhurst project mockup",
      title: "Pocket Bringhurst",
      skills: ["book design", "cover design"],
      theme: "theme-pocket-bringhurst",
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
      href: "/this-website",
      imageSrc: "/images/home/mysite_cutout.webp",
      imageAlt: "This website project mockup",
      title: "This Website",
      skills: ["web design", "coding", "brand identity"],
      theme: "theme-this-website",
    },
    {
      href: "/class-creature",
      imageSrc: "/images/home/cc_cutout.webp",
      imageAlt: "Class Creature project mockup",
      title: "Class Creature",
      skills: ["user research", "user experience", "brand identity"],
      theme: "theme-class-creature",
    },
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
