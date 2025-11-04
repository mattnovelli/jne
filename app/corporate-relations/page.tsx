import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import ProjectIntro from "../components/ProjectIntro";
import {
  ProjectContent,
  ProjectParagraph,
  ProjectImage,
} from "../components/ProjectContent";

export default function CorporateRelations() {
  return (
    <ProjectLayout>
      <ProjectIntro
        title="Office of Corporate Relations"
        skills={["Editorial", "Brand Identity"]}
        tools={["Illustrator", "Photoshop", "InDesign", "Canva"]}
        theme="theme-corporate-relations"
      />

      <ProjectContent>
        <ProjectImage
          src="/images/work/corporaterelations/intro_bayer_spreads.webp"
          alt="Bayer partnership introduction spreads"
        />
        <ProjectParagraph
          title="brief"
          content="Working with the University of Illinois Office of Corporate Relations, I was tasked with designing professional promotional materials and publications to showcase the university's strategic partnerships with major corporations. The challenge was creating corporate-appropriate designs that would appeal to both university stakeholders and corporate partners while maintaining the university's brand identity and strengthening these important relationships."
        />
        <ProjectImage
          src="/images/work/corporaterelations/bayer.webp"
          alt="Bayer partnership materials"
        />
        <ProjectParagraph
          title="result"
          content="I developed a comprehensive suite of materials including partnership showcase publications, corporate directories, social media graphics, and presentation materials. Each design balanced professional sophistication with university branding, using clean layouts, strategic typography, and compelling visual storytelling to highlight key achievements and collaborative benefits. The final materials successfully strengthened relationships between the university and its corporate partners while establishing a cohesive visual language for all corporate relations communications."
        />
        <ProjectImage
          src="/images/work/corporaterelations/capital one.webp"
          alt="Capital One partnership materials"
        />
        <ProjectImage
          src="/images/work/corporaterelations/directory.webp"
          alt="Corporate relations directory"
        />
        <ProjectImage
          src="/images/work/corporaterelations/compeer.webp"
          alt="Compeer partnership materials"
        />
        <ProjectImage
          src="/images/work/corporaterelations/socials.webp"
          alt="Social media graphics"
        />
      </ProjectContent>
    </ProjectLayout>
  );
}
