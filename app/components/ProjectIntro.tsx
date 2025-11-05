import React from "react";
import { SkillPill } from "./ProjectCard";

interface ProjectIntroProps {
  title: string;
  description?: string;
  skills: string[];
  tools?: string[];
  timeline?: string;
  theme: string;
}

export default function ProjectIntro({
  title,
  description,
  skills,
  tools,
  timeline,
  theme,
}: ProjectIntroProps) {
  return (
    <div
      style={{ backgroundColor: "var(--background-color)" }}
      className="grid md:grid-cols-3 grid-cols-1 gap-12 grid-rows-1 mb-14! "
    >
      <div className="col-span-2">
        <h1 className="leading-tight! font-black!">{title}</h1>
        <p className="max-w-3/4">{description}</p>
      </div>
      <div className="grid grid-rows-2 grid-cols-1 gap-6 justify-end!">
        <div className="flex flex-col gap-2 ">
          <h3 className="font-extrabold! text-4xl!">Skills</h3>

          <div className="flex flex-row flex-wrap gap-2">
            {skills.map((skill, index) => (
              <SkillPill key={index} skill={skill} />
            ))}
          </div>
        </div>
        {tools && (
          <div className="flex flex-col gap-2 ">
            <h3 className="font-extrabold! text-4xl!">Tools</h3>
            <div>
              <div className="flex flex-row  flex-wrap gap-2 ">
                {tools.map((tool, index) => (
                  <SkillPill key={index} skill={tool} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
