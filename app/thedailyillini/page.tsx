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
        <ProjectParagraph
          title="brief"
          content="As Senior Art Director at The Daily Illini, I was responsible for the complete visual identity and design direction of the University of Illinois' student newspaper. The role required developing brand standards, designing engaging layouts, creating special issue concepts, and managing a team of designers while maintaining consistency across all print and digital touchpoints."
        />
        <ProjectImage
          src="/images/work/thedailyillini/covers_mockup.webp"
          alt="Daily Illini newspaper covers"
        />
        <ProjectParagraph
          title="result"
          content="I modernized the newspaper's visual identity through comprehensive style guides, dynamic page layouts, and innovative design solutions. My work included redesigning the masthead, creating modular layout systems, developing color-coded section identities, and producing award-winning special issues. I successfully balanced editorial needs with visual impact, ensuring readability while creating engaging designs that increased reader engagement and maintained the publication's reputation as the university's premier news source."
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
          src="/images/work/thedailyillini/newsbox.webp"
          alt="Daily Illini newsbox design"
        />

        <ProjectImage
          src="/images/work/thedailyillini/bestCU.webp"
          alt="Daily Illini Best of Champaign-Urbana issue"
        />
      </ProjectContent>
    </ProjectLayout>
  );
}
