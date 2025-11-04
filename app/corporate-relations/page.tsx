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
        skills={["book design", "photo editing", "graphic design"]}
        timeline="August 2023 - December 2023"
        theme="theme-corporate-relations"
      />

      <ProjectContent>
        <ProjectParagraph
          title="overview"
          content="working with the university of illinois office of corporate relations, i designed various promotional materials and publications to showcase the university's partnerships with major corporations. this project required creating professional, corporate-appropriate designs while maintaining the university's brand identity."
        />

        <ProjectImage
          src="/images/work/corporaterelations/intro_bayer_spreads.webp"
          alt="Bayer partnership introduction spreads"
        />

        <ProjectParagraph
          title="partnership showcases"
          content="each corporate partnership required a unique design approach that would appeal to both university stakeholders and corporate partners. i created layouts that highlighted key achievements, collaborations, and mutual benefits while maintaining a sophisticated, professional aesthetic."
        />

        <ProjectImage
          src="/images/work/corporaterelations/bayer.webp"
          alt="Bayer partnership materials"
        />

        <ProjectImage
          src="/images/work/corporaterelations/capital one.webp"
          alt="Capital One partnership materials"
        />

        <ProjectParagraph
          title="comprehensive materials"
          content="the project encompassed various types of publications, from directory layouts to social media graphics, ensuring consistent branding across all touchpoints. each piece was designed to strengthen relationships between the university and its corporate partners."
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
