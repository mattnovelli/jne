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
          content="As Senior Art Director at The Daily Illini, I was responsible for the complete visual identity and design direction of the University of Illinois' student newspaper. The role required developing brand standards, designing engaging layouts, creating special issue concepts, and managing a team of designers while maintaining consistency across all print and digital touchpoints."
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
