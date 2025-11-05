import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import ProjectIntro from "../components/ProjectIntro";
import {
  ProjectContent,
  ProjectParagraph,
  ProjectImage,
} from "../components/ProjectContent";

export default function TheDailyIllini() {
  return (
    <ProjectLayout>
      <ProjectIntro
        title="The Daily Illini"
        skills={["Art Direction", "Editorial", "Print"]}
        tools={["InDesign", "InCopy", "InCopy", "Photoshop"]}
        theme="theme-daily-illini"
      />

      <ProjectContent>
        <ProjectImage
          src="/images/work/thedailyillini/covers_mockup.webp"
          alt="Daily Illini newspaper covers"
        />
        <ProjectParagraph
          title="brief"
          content="I worked at The Daily Illini, the independent student newspaper at the University of Illinois, for three years, starting as a designer and eventually serving as Managing Editor for Visuals. I led weekly print production, oversaw a team of photographers and designers, and handled a range of special projects, such as style guides and newsbox wraps. I designed and art-directed the weekly print edition, managing tight deadlines while also editing photos, copy, and layouts. Leading these projects gave me extensive experience in visual storytelling, team management, and print production, and allowed me to develop expertise in maintaining a consistent, high-quality brand across multiple formats."
        />
        <ProjectImage
          src="/images/work/thedailyillini/designguide.webp"
          alt="Daily Illini design guide"
        />
        <ProjectImage
          src="/images/work/thedailyillini/sports_spread.webp"
          alt="Daily Illini sports spread layout"
        />

        <ProjectImage
          src="/images/work/thedailyillini/bestCU.webp"
          alt="Daily Illini Best of Champaign-Urbana issue"
        />
      </ProjectContent>
    </ProjectLayout>
  );
}
