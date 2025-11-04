import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import ProjectIntro from "../components/ProjectIntro";
import {
  ProjectContent,
  ProjectParagraph,
  ProjectImage,
} from "../components/ProjectContent";

export default function BugsNextDoor() {
  return (
    <ProjectLayout>
      <ProjectIntro
        title="Bugs Next Door"
        skills={["app design", "ui/ux", "3d modeling", "brand identity"]}
        timeline="2024"
        theme="bugs-next-door"
      />

      <ProjectContent>
        <ProjectParagraph
          title="brief"
          content="As a bug lover, I know that not everyone shares the same sentiments as I do. Bugs Next Door is a mobile app designed to help users overcome their fear of bugs through education and playful interaction. Bugs play a vital role in our ecosystem, though many people don't know much about them. The goal is to help users feel more comfortable with the bugs they encounter daily, and maybe even come to appreciate them!"
        />

        <ProjectParagraph
          title="result"
          content="I designed an educational app with a simple, intuitive interface suitable for users of all ages. Lessons are concise and interactive, guiding users as they learn about each bug's role in our ecosystem. All featured bugs were sculpted from clay to make them feel more approachable and less intimidating, and playful language and copywriting create a friendly, welcoming experience. The result is an educational tool that inspires curiosity, encourages exploration, and helps users rethink their relationship with bugs."
        />
      </ProjectContent>
    </ProjectLayout>
  );
}
