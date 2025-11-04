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
      className="grid md:grid-cols-3 grid-cols-1 gap-5 grid-rows-1 md:mx-12!"
    >
      <div className="col-span-2">
        <h1 className="leading-17 font-black">{title}</h1>
        <p>{description}</p>
      </div>
      <div className="grid grid-rows-2 grid-cols-1 gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-black! text-4xl!">Skills</h3>

          <div className="flex flex-row flex-wrap gap-2">
            {skills.map((skill, index) => (
              <SkillPill key={index} skill={skill} />
            ))}
          </div>
        </div>
        {tools && (
          <div className="flex flex-col gap-2">
            <h3 className="font-black! text-4xl!">Tools</h3>
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
