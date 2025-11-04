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
        skills={[
          "art direction",
          "graphic design",
          "brand identity",
          "page layout",
        ]}
        timeline="September 2022 - May 2024"
        theme="theme-daily-illini"
      />

      <ProjectContent>
        <ProjectParagraph
          title="overview"
          content="as senior art director at the daily illini, i was responsible for the visual identity and design direction of the university of illinois' student newspaper. my role included designing covers, managing layout teams, creating style guides, and establishing consistent brand standards across all publications."
        />

        <ProjectImage
          src="/images/work/thedailyillini/covers_mockup.webp"
          alt="Daily Illini newspaper covers"
        />

        <ProjectParagraph
          title="brand development"
          content="i worked to modernize the daily illini's visual identity while respecting its long-standing tradition as the university's primary news source. this involved creating comprehensive design guidelines, establishing typography standards, and developing a cohesive color palette that would work across both print and digital platforms."
        />

        <ProjectImage
          src="/images/work/thedailyillini/designguide.webp"
          alt="Daily Illini design guide"
        />

        <ProjectParagraph
          title="layout design"
          content="one of my primary responsibilities was designing engaging page layouts that would draw readers in while maintaining excellent readability. i focused on creating dynamic spreads that balanced text, images, and white space effectively, ensuring that important stories received the visual prominence they deserved."
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
