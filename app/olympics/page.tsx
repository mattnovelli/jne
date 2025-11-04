import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import ProjectIntro from "../components/ProjectIntro";
import {
  ProjectContent,
  ProjectParagraph,
  ProjectImage,
} from "../components/ProjectContent";

export default function Olympics() {
  return (
    <ProjectLayout>
      <ProjectIntro
        title="Los Angeles 2028 Olympics"
        skills={["graphic design", "ui / ux", "brand identity"]}
        timeline="January 2023 - May 2023"
        theme="theme-olympics"
      />

      <ProjectContent>
        <ProjectParagraph
          title="brief"
          content="I was commissioned to design a poster celebrating the upcoming Olympics in Paris. The brief asked for a poster that would capture the excitement and global spirit of the games while incorporating French cultural elements."
        />

        <ProjectParagraph
          title="result"
          content="My design features bold, dynamic typography with Olympic rings integrated into the letterforms. The color palette draws from the French flag, while maintaining the vibrant energy associated with Olympic competition. The composition balances celebration with sophisticated European design sensibilities."
        />

        <ProjectImage
          src="/images/work/olympics/emails_mockup.webp"
          alt="Olympics email newsletter mockups"
        />

        <ProjectImage
          src="/images/work/olympics/logo_process_mockup.webp"
          alt="Olympics logo design process"
        />

        <ProjectImage
          src="/images/work/olympics/olympics_stylesheet.webp"
          alt="Olympics style guide"
        />

        <ProjectImage
          src="/images/work/olympics/poster_mockup.webp"
          alt="Olympics poster design"
        />

        <ProjectImage
          src="/images/work/olympics/wayfinding_mockup.webp"
          alt="Olympics wayfinding system"
        />

        <ProjectImage
          src="/images/work/olympics/ticket_mockup.webp"
          alt="Olympics ticket design"
        />

        <ProjectImage
          src="/images/work/olympics/brochure_mockup.webp"
          alt="Olympics brochure design"
        />

        <ProjectImage
          src="/images/work/olympics/emails_mockup.webp"
          alt="Olympics email newsletter mockups"
        />
      </ProjectContent>
    </ProjectLayout>
  );
}
