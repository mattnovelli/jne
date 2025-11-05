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
        skills={["Brand Identity", "Event Design", "UI/UX"]}
        tools={["Illustrator", "Photoshop", "InDesign"]}
        theme="theme-olympics"
      />

      <ProjectContent>
        <ProjectImage
          src="/images/work/olympics/cover idea.png"
          alt="Olympics email newsletter mockups"
        />
        <ProjectParagraph
          title="Brief"
          content="In 2028, the Olympics will be held in Los Angeles. This is my take on a visual identity system for the event. The Olympics present a unique challenge: you are not only designing for the host city, you are designing for the entire world. The identity needed to capture the city’s unique character while appealing to a global audience of visitors. My goal was to create a bold, bright, and welcoming visual system that reflects both the energy of Los Angeles and the spirit of the Olympic Games."
        />

        <ProjectImage
          src="/images/work/olympics/FINAL LOGO-04.png"
          alt="Olympics logo design process"
        />
        <ProjectParagraph
          title="Result"
          content="The final logo is inspired by the geographical shape of LA, incorporates abstractions of the letters 'L' and 'A,' and forms the image of a person waving, welcoming international visitors to the olympics and conveying motion and energy. The color palette is bright and playful, keeping the visual system inviting and summery while also paying homage to the color palette of the LA Olympics in 1984. I developed photo treatments that combine bold sports photography with iconic Los Angeles imagery, such as palm trees and cityscapes. I applied the visual system to user-focused products like wayfinding, maps, schedules, tickets, and email newsletters.This ensured the Olympic experience would be intuitive for international visitors. The resulting identity is vibrant, energetic, and inclusive, capturing the dynamic spirit of Los Angeles while making the city accessible and welcoming to the world."
        />
        <div className="grid grid-cols-5 gap-10">
          <ProjectImage
            src="/images/work/olympics/wayfinding_mockup.webp"
            alt="Olympics style guide"
            className="col-span-2 object-cover! h-full! w-full!"
          />

          <ProjectImage
            src="/images/work/olympics/emails_mockup.webp"
            alt="Olympics poster design"
            className="col-span-3 object-cover! h-full! w-full!"
          />

          <ProjectImage
            src="/images/work/olympics/poster_mockup.webp"
            alt="Olympics wayfinding system"
            className="col-span-5 object-cover! h-full! w-full!"
          />

          <ProjectImage
            src="/images/work/olympics/brochure_mockup.webp"
            alt="Olympics brochure design"
            className="col-span-3 object-cover! h-full! w-full!"
          />

          <ProjectImage
            src="/images/work/olympics/ticket_ mockup.webp"
            alt="Olympics email newsletter mockups"
            className="col-span-2 object-cover! h-full! w-full!"
          />
        </div>
      </ProjectContent>
    </ProjectLayout>
  );
}
