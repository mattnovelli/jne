import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import ProjectIntro from "../components/ProjectIntro";
import {
  ProjectContent,
  ProjectParagraph,
  ProjectImage,
} from "../components/ProjectContent";

export default function PocketBringhurst() {
  return (
    <ProjectLayout>
      <ProjectIntro
        title="Pocket Bringhurst"
        skills={["book design", "cover design"]}
        timeline="February 2023 - May 2023"
        theme="theme-pocket-bringhurst"
      />

      <ProjectContent>
        <ProjectParagraph
          title="overview"
          content="a book design project in my advanced typography course. students were tasked with creating a pocket-sized edition of robert bringhurst's 'the elements of typographic style' - a comprehensive guide to typography and book design. the challenge was to make this dense, technical content accessible and visually appealing in a compact format."
        />

        <ProjectImage
          src="/images/work/pocketbringhurst/pb_cover.webp"
          alt="Pocket Bringhurst book cover"
        />

        <ProjectParagraph
          title="design approach"
          content="my approach focused on creating a clean, readable design that would honor bringhurst's own typographic principles. i selected a classic serif typeface for body text and used a complementary sans-serif for headings and captions. the layout emphasizes hierarchy and readability while making efficient use of the limited space."
        />

        <ProjectImage
          src="/images/work/pocketbringhurst/spread_pb.webp"
          alt="Pocket Bringhurst interior spread"
        />

        <ProjectParagraph
          title="typography and layout"
          content="working within the constraints of a pocket format required careful consideration of type size, line spacing, and margin proportions. i paid special attention to the grid system, ensuring consistent spacing and alignment throughout the book while maintaining optimal readability at a small scale."
        />

        <ProjectImage
          src="/images/work/pocketbringhurst/chapter4_spread.webp"
          alt="Pocket Bringhurst chapter spread"
        />

        <ProjectImage
          src="/images/work/pocketbringhurst/proofs_pb.webp"
          alt="Pocket Bringhurst printing proofs"
        />
      </ProjectContent>
    </ProjectLayout>
  );
}
