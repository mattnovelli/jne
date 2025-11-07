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
        description="A mobile app to help you appreciate the amazing world of bugs"
      />

      <ProjectContent>
        <ProjectImage
          src="/images/work/bugsnextdoor/final exhibition posters-04.png"
          alt="Bugs Next Door exhibition poster featuring clay bug sculptures"
        />
        <ProjectParagraph
          title="Brief"
          content="As a bug lover, I know that not everyone shares the same sentiments as I do. Bugs Next Door is a mobile app designed to help users overcome their fear of bugs through education and playful interaction. Bugs play a vital role in our ecosystem, though many people don't know much about them. The goal is to help users feel more comfortable with the bugs they encounter daily, and maybe even come to appreciate them!"
        />
        <video
          controls
          className="w-full max-w-4xl rounded-3xl"
          poster="/images/work/bugsnextdoor/bnd_thumbnail.webp"
          autoPlay={true}
          loop={true}
          muted={true}
        >
          <source
            src="/images/work/bugsnextdoor/bnd_prototype.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <ProjectParagraph
          title="Result"
          content="I designed an educational app with a simple, intuitive interface suitable for users of all ages. Lessons are concise and interactive, guiding users as they learn about each bug’s role in our ecosystem. All featured bugs were sculpted from clay to make them feel more approachable and less intimidating, and playful language and copywriting create a friendly, welcoming experience. The result is an educational tool that inspires curiosity, encourages exploration, and helps users rethink their relationship with bugs."
        />
        <div className="grid grid-cols-3 md:gap-10 gap-4">
          <ProjectImage
            src="/images/work/bugsnextdoor/final bugs/bee.png"
            alt="Clay bee sculpture"
            className="object-fit! h-full! w-full!"
          />

          <ProjectImage
            src="/images/work/bugsnextdoor/final bugs/dragonfly.png"
            alt="Clay butterfly sculpture"
            className="object-fit! h-full! w-full!"
          />
          <ProjectImage
            src="/images/work/bugsnextdoor/final bugs/spotted lantern fly.png"
            alt="Clay dragonfly sculpture"
            className="object-fit! h-full! w-full!"
          />
        </div>
        <div className="grid grid-cols-2 grid-rows-2 md:gap-10 gap-4">
          <ProjectImage
            src="/images/work/bugsnextdoor/final exhibition posters-01.png"
            alt="Bugs Next Door exhibition poster"
            className="row-span-2 m-auto!"
          />
          <ProjectImage
            src="/images/work/bugsnextdoor/final exhibition posters-05.png"
            alt="Clay grass decoration element"
          />
          <ProjectImage
            src="/images/work/bugsnextdoor/final exhibition posters-03.png"
            alt="Clay sun decoration element"
          />
        </div>
        <ProjectImage
          src="/images/work/bugsnextdoor/final bugs/wormy2.png"
          alt="Clay sun decoration element"
        />
      </ProjectContent>
    </ProjectLayout>
  );
}
