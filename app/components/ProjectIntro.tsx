import React from "react";
import { SkillPill } from "./ProjectCard";

interface ProjectIntroProps {
  title: string;
  description?: string;
  skills: string[];
  tools?: string[];
  timeline: string;
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
      className="grid grid-cols-3 grid-rows-1"
    >
      <div className="col-span-2">
        <h1 className="leading-15 font-black">{title}</h1>
        <p>{description}</p>
        <p>{timeline}</p>
      </div>
      <div className="grid grid-rows-2 grid-cols-1">
        <div>
          <h3>Skills</h3>

          <div className="flex flex-row gap-2">
            {skills.map((skill, index) => (
              <SkillPill key={index} skill={skill} />
            ))}
          </div>
        </div>
        {tools && (
          <div>
            <h3>Tools</h3>
            <div>
              <div className="flex flex-row gap-2 ">
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
