import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  skills: string[];
  theme: string;
}

export default function ProjectCard({
  href,
  imageSrc,
  imageAlt,
  title,
  skills,
  theme,
}: ProjectCardProps) {
  return (
    <Link href={href} className="no-underline ">
      <div
        className={`${theme} text-white p-8!  rounded-3xl aspect-square flex flex-col overflow-hidden hover:scale-105 transition-transform duration-200 cursor-pointer shadow-lg`}
      >
        {/* Prominent image taking most of the card */}
        <div className="flex-1 flex items-center justify-center mb-4 p-4">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-contain max-h-48"
          />
        </div>

        {/* Left-aligned title */}
        <h3 className="text-left text-4xl! font-medium mb-3 leading-tight px-2 min-h-18 flex items-end">
          {title}
        </h3>

        {/* Tags at the bottom */}
        <div className="flex justify-start flex-wrap gap-2 px-2">
          {skills.map((skill, index) => (
            <SkillPill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </Link>
  );
}

export function SkillPill({ skill }: { skill: string }) {
  return (
    <span className=" bg-[#00000071] text-white px-2! py-1! rounded text-xs">
      {skill}
    </span>
  );
}
