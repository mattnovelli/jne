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
        title="IETC 30th Anniversary"
        description="Creating a bold, nostalgic visual identity for a K12 edtech conference"
        skills={["Brand Identity", "Art Direction"]}
        tools={["Illustrator", "InDesign", "Figma", "Canva"]}
        timeline="2024"
        theme="ietc-anniversary"
      />

      <ProjectContent>
        <ProjectImage
          src="/images/work/ietc-anniversary/IETC Anniversary Graphic.png"
          alt=""
        />
        <ProjectParagraph
          title="Brief"
          content="I led the branding and creative direction for the 30th anniversary of the Illinois Educational Technology Conference. The identity embraces bold, playful 1990s Memphis-style graphics while incorporating neobrutalist elements to keep the design modern, readable, and functional. The challenge was to celebrate the 30th anniversary with a nostalgic theme, while ensuring attendees are reminded that IETC is a forward-thinking edtech conference. The goal was to create a cohesive visual system that could carry across all conference touchpoints, from print to digital."
        />
        <ProjectImage
          src="/images/work/ietc-anniversary/IETC Tower 1.png"
          alt=""
        />
        <ProjectParagraph
          title="Result"
          content="I developed the full visual identity system, including patterns, graphics, and assets, and applied it to a wide range of deliverables: an attendee quick-start booklet, conference app graphics, tall wayfinding towers, interactive maps, signage for rooms and activities, digital displays, and attendee giveaways. I worked directly with vendors to produce print materials, carefully managing specifications, materials, and production processes to ensure quality and consistency. Each element balances bold 90s aesthetics with modern clarity and usability, resulting in a visually engaging, intuitive, and memorable conference experience that celebrates IETC’s 30th anniversary while highlighting modern edtech innovation."
        />
        <div className="grid grid-cols-5 grid-rows-2 md:gap-10 gap-4">
          <ProjectImage
            src="/images/work/ietc-anniversary/IETC Tower 2.png"
            alt=""
            className="col-span-2 object-cover! h-full! w-full!"
          />
          <ProjectImage
            src="/images/work/ietc-anniversary/Quick Start Booklet.png"
            alt=""
            className="col-span-3 object-cover! h-full! w-full!"
          />
          <ProjectImage
            src="/images/work/ietc-anniversary/Attendee Swag.png"
            alt=""
            className="col-span-3 object-cover! h-full! w-full!"
          />
          <ProjectImage
            src="/images/work/ietc-anniversary/IETC Slides.gif"
            alt=""
            className="col-span-2 object-cover! h-full! w-full!"
          />
        </div>
      </ProjectContent>
    </ProjectLayout>
  );
}
