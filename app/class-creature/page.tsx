import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import ProjectIntro from "../components/ProjectIntro";
import {
  ProjectContent,
  ProjectParagraph,
  ProjectImage,
} from "../components/ProjectContent";

export default function ClassCreature() {
  return (
    <ProjectLayout>
      <ProjectIntro
        title="Class Creature"
        skills={["user research", "user experience", "brand identity"]}
        timeline="January 2024 - May 2024"
        theme="theme-class-creature"
      />

      <ProjectContent>
        <ProjectParagraph
          title="overview"
          content="class creature is a mobile app concept designed to help college students stay engaged and motivated in their classes through gamification. by turning academic progress into a virtual pet care system, the app makes studying more enjoyable and creates positive reinforcement for consistent learning habits."
        />

        <ProjectImage
          src="/images/work/classcreature/stylesheet.webp"
          alt="Class Creature style guide and branding"
        />

        <ProjectParagraph
          title="user research"
          content="through surveys and interviews with college students, i identified key pain points around motivation, procrastination, and class engagement. students expressed interest in gamification as a motivational tool, but emphasized the need for something that felt genuine rather than childish or gimmicky."
        />

        <ProjectImage
          src="/images/work/classcreature/creature_sketches.webp"
          alt="Creature character design sketches"
        />

        <ProjectParagraph
          title="concept development"
          content="the core concept revolves around virtual creatures that students care for by completing academic tasks. attending classes, finishing assignments, and studying all contribute to the creature's wellbeing. this creates a positive feedback loop where academic success directly impacts something the user cares about."
        />

        <ProjectImage
          src="/images/work/classcreature/cc_logo_sketches.webp"
          alt="Class Creature logo development sketches"
        />

        <ProjectParagraph
          title="interactive prototypes"
          content="i created interactive prototypes to demonstrate key user flows and test the app's core functionality. the prototype includes features like creature feeding, class check-ins, assignment tracking, and progress visualization."
        />

        <ProjectImage
          src="/images/work/classcreature/fidget_mockup.webp"
          alt="Class Creature app interface mockups"
        />

        <ProjectImage
          src="/images/work/classcreature/cards_mockup.webp"
          alt="Class Creature reward cards system"
        />
      </ProjectContent>
    </ProjectLayout>
  );
}
