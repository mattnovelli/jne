import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import ProjectIntro from "../components/ProjectIntro";
import {
  ProjectContent,
  ProjectParagraph,
  ProjectImage,
} from "../components/ProjectContent";

export default function ThisWebsite() {
  return (
    <ProjectLayout>
      <ProjectIntro
        title="This Website"
        skills={["web design", "coding", "brand identity"]}
        timeline="Ongoing"
        theme="theme-this-website"
      />

      <ProjectContent>
        <ProjectParagraph
          title="overview"
          content="this portfolio website represents my exploration into web design and development. built from scratch using html, css, and javascript, it showcases my work while demonstrating my ability to translate design concepts into functional, interactive web experiences."
        />

        <ProjectImage
          src="/images/work/thiswebsite/heropage.webp"
          alt="Website homepage design"
        />

        <ProjectParagraph
          title="brand development"
          content="i wanted the website to reflect my personality and design aesthetic - playful, colorful, and slightly unconventional. the lizard mascot became a central element, serving both as a brand identifier and an interactive feature that adds personality to the user experience."
        />

        <ProjectImage
          src="/images/work/thiswebsite/logo_sketches.webp"
          alt="Logo and mascot development sketches"
        />

        <ProjectParagraph
          title="design system"
          content="the visual system is built around bright, energetic colors and playful typography. i developed a comprehensive style guide that includes color palettes, typography rules, button styles, and layout principles to ensure consistency across all pages."
        />

        <ProjectImage
          src="/images/work/thiswebsite/je_styleguide.webp"
          alt="Website style guide"
        />

        <ProjectParagraph
          title="interactive elements"
          content="beyond static design, i incorporated interactive elements like the animated lizard mascot, svg filters for text distortion effects, and hover states that enhance the user experience. these details add personality and demonstrate technical skills while keeping the focus on the portfolio content."
        />

        <ProjectImage
          src="/images/work/thiswebsite/lizardanatomy.webp"
          alt="Lizard mascot animation anatomy"
        />

        <ProjectImage
          src="/images/work/thiswebsite/internal_screens.webp"
          alt="Internal website page designs"
        />

        <ProjectImage
          src="/images/work/thiswebsite/laptop_mockup.webp"
          alt="Website displayed on laptop mockup"
        />

        <ProjectImage
          src="/images/work/thiswebsite/codesnippet.webp"
          alt="Code snippet from website development"
        />
      </ProjectContent>
    </ProjectLayout>
  );
}
