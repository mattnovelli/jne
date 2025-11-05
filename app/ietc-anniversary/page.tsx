import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import ProjectIntro from "../components/ProjectIntro";
import {
  ProjectContent,
  ProjectParagraph,
  ProjectImage,
} from "../components/ProjectContent";

export default function IETCAnniversary() {
  return (
    <ProjectLayout>
      <ProjectIntro
        title="IETC Anniversary"
        skills={[
          "brand identity",
          "event design",
          "print production",
          "signage",
        ]}
        timeline="2024"
        theme="ietc-anniversary"
      />

      <ProjectContent>
        <ProjectParagraph
          title="brief"
          content="I led the branding and creative direction for the 30th anniversary of the Illinois Educational Technology Conference. The identity embraces bold, playful 1990s Memphis-style graphics while incorporating neobrutalist elements to keep the design modern, readable, and functional. The challenge was to celebrate the 30th anniversary with a nostalgic theme, while ensuring attendees are reminded that IETC is a forward-thinking edtech conference. The goal was to create a cohesive visual system that could carry across all conference touchpoints, from print to digital."
        />

        <ProjectParagraph
          title="result"
          content="I developed the full visual identity system, including patterns, graphics, and assets, and applied it to a wide range of deliverables: an attendee quick-start booklet, conference app graphics, tall wayfinding towers, interactive maps, signage for rooms and activities, digital displays, and attendee giveaways. I worked directly with vendors to produce print materials, carefully managing specifications, materials, and production processes to ensure quality and consistency. Each element balances bold 90s aesthetics with modern clarity and usability, resulting in a visually engaging, intuitive, and memorable conference experience that celebrates IETC’s 30th anniversary while highlighting modern edtech innovation."
        />
      </ProjectContent>
    </ProjectLayout>
  );
}
