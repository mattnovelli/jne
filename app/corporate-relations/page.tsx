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
          title="Brief"
          content="During my internship at the University of Illinois Office of Corporate Relations, I had the opportunity to work across multiple design disciplines, including email newsletters, website design, social media, infographics, and book design. All of our work was aimed at fostering and maintaining strong relationships between the university and various Fortune 100 companies. One of my primary responsibilities was designing stewardship reports: custom publications highlighting a company’s engagement with the university while exploring opportunities for future collaboration. Each report needed to be tailored to the individual company, clearly presenting complex information in an organized and visually engaging way, while remaining consistent with both the university’s and the company’s brand identity. "
        />
        <ProjectImage
          src="/images/work/corporaterelations/bayer spreads.png"
          alt="Bayer partnership materials"
        />
        <ProjectParagraph
          title="Result"
          content="I independently designed over three stewardship reports, taking content from the marketing team and transforming it into interactive, visually engaging PDFs. Each book told a clear story of the company’s connection to the university, with a clear emphasis on readability and maintaining brand guidelines. Through these projects, I strengthened my expertise in visual storytelling, layout design, and translating complex information into accessible, high-impact materials."
        />
        <ProjectImage
          src="/images/work/corporaterelations/capital one.webp"
          alt="Capital One partnership materials"
        />

        <ProjectImage
          src="/images/work/corporaterelations/compeer.webp"
          alt="Compeer partnership materials"
        />
        <div className="grid grid-cols-2 gap-10">
          <ProjectImage
            src="/images/work/corporaterelations/socials.webp"
            alt="Social media graphics"
          />
          <ProjectImage
            src="/images/work/corporaterelations/directory.webp"
            alt="Corporate relations directory"
          />
        </div>
      </ProjectContent>
    </ProjectLayout>
  );
}
