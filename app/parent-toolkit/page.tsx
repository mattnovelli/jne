import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import ProjectIntro from "../components/ProjectIntro";
import {
  ProjectContent,
  ProjectParagraph,
  ProjectImage,
} from "../components/ProjectContent";

export default function ParentToolkit() {
  return (
    <ProjectLayout>
      <ProjectIntro
        title="Parent Toolkit"
        skills={[
          "art direction",
          "illustration",
          "publication design",
          "typography",
        ]}
        timeline="2024"
        theme="parent-toolkit"
      />

      <ProjectContent>
        <ProjectParagraph
          title="Brief"
          content="Working with Holly Kelly, a human centered design and SEL expert, I had the opportunity to create an extremely impactful piece: a digital toolkit to help parents and their children build healthy tech habits. As the subject matter could feel intimidating, the toolkit needed to be visually engaging, clearly structured, and easy to navigate. It had to guide readers through each chapter, making complex concepts and strategies approachable for families."
        />

        <ProjectParagraph
          title="Result"
          content="I led the art direction for toolkit in its entirety, creating its visual identity and designing, typesetting, and illustrating every page. The final product is an interactive PDF that is both engaging and highly usable. It was typeset with readability and accessibility in mind, while playful illustrations and icons provide visual cues to guide readers through each step of the chapters. The finished product has been shared statewide across Illinois. It was gratifying to work on such an impactful project that grapples with very real challenges modern families are facing today."
        />
      </ProjectContent>
    </ProjectLayout>
  );
}
