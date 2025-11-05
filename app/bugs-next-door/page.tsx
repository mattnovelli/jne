import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import ProjectIntro from "../components/ProjectIntro";
import {
  ProjectContent,
  ProjectParagraph,
  ProjectImage,
  ProjectGrid,
} from "../components/ProjectContent";

export default function BugsNextDoor() {
  return (
    <ProjectLayout>
      <ProjectIntro
        title="Bugs Next Door"
        skills={["UI/UX", "Brand Identity", "Illustration"]}
        tools={["Illustrator", "Photoshop", "Figma"]}
        theme="bugs-next-door"
      />

      <ProjectContent>
        <ProjectParagraph
          title="brief"
          content="As a bug lover, I know that not everyone shares the same sentiments as I do. Bugs Next Door is a mobile app designed to help users overcome their fear of bugs through education and playful interaction. Bugs play a vital role in our ecosystem, though many people don't know much about them. The goal is to help users feel more comfortable with the bugs they encounter daily, and maybe even come to appreciate them!"
        />
        <ProjectImage
          src="/images/work/bugsnextdoor/final exhibition posters-02.png"
          alt="Bugs Next Door exhibition poster featuring clay bug sculptures"
        />
        <ProjectParagraph
          title="result"
          content="I designed an educational app with a simple, intuitive interface suitable for users of all ages. Lessons are concise and interactive, guiding users as they learn about each bug’s role in our ecosystem. All featured bugs were sculpted from clay to make them feel more approachable and less intimidating, and playful language and copywriting create a friendly, welcoming experience. The result is an educational tool that inspires curiosity, encourages exploration, and helps users rethink their relationship with bugs."
        />

        <video
          controls
          className="w-full max-w-4xl rounded-4xl"
          poster="/images/work/bugsnextdoor/bnd_thumbnail.webp"
        >
          <source
            src="/images/work/bugsnextdoor/bnd_prototype.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        <ProjectGrid>
          <ProjectImage
            src="/images/work/bugsnextdoor/final bugs/bee.png"
            alt="Clay bee sculpture"
          />

          <ProjectImage
            src="/images/work/bugsnextdoor/final bugs/butterfly.png"
            alt="Clay butterfly sculpture"
          />
          <ProjectImage
            src="/images/work/bugsnextdoor/final bugs/dragonfly.png"
            alt="Clay dragonfly sculpture"
          />
          <ProjectImage
            src="/images/work/bugsnextdoor/final exhibition posters-03.png"
            alt="Bugs Next Door exhibition poster"
          />
          <ProjectImage
            src="/images/work/bugsnextdoor/final bugs/grass.png"
            alt="Clay grass decoration element"
          />
          <ProjectImage
            src="/images/work/bugsnextdoor/final bugs/sun.png"
            alt="Clay sun decoration element"
          />
        </ProjectGrid>
      </ProjectContent>
    </ProjectLayout>
  );
}
