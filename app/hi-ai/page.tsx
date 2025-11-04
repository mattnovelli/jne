import React from "react";
import ProjectLayout from "../components/ProjectLayout";
import ProjectIntro from "../components/ProjectIntro";
import {
  ProjectContent,
  ProjectParagraph,
  ProjectImage,
} from "../components/ProjectContent";

export default function HiAI() {
  return (
    <ProjectLayout>
      <ProjectIntro
        title="Hi, AI"
        description="Creating a visual identity for a K-12 AI Conference."
        skills={["Brand Identity", "Art Direction", "Event Design"]}
        tools={["Illustrator", "Figma", "Canva"]}
        timeline="2024"
        theme="hi-ai"
      />

      <ProjectContent>
        {" "}
        <ProjectImage
          src="/images/work/hi-ai/Frame 11.svg"
          alt="Hi, AI conference logo design"
        />
        <ProjectParagraph
          title="brief"
          content="I was tasked with developing the brand identity for the Learning Technology Center's new virtual conference, Hi, AI: Human Intelligence Meets Artificial Intelligence. Designed for K–12 educators, administrators, and tech leaders nationwide, the event explores how AI can enhance teaching and learning, from district-level policy discussions to hands-on classroom tools. The identity needed to capture the essence of AI while remaining warm and inviting to educators who may be new or hesitant about the technology. Because AI is constantly evolving, the visual language also needed to feel timeless rather than tied to any single trend."
        />
        <ProjectImage
          src="/images/work/hi-ai/hi ai postcard.png"
          alt="Hi, AI conference promotional postcard"
        />
        <ProjectParagraph
          title="result"
          content="The final identity brings a sense of friendliness and approachability to AI. The logo's speech bubble motif bridges both sides of the conference's theme: the conversational interfaces of AI chatbots, and the human conversations taking place during the event. A playful, handwritten font emphasizes personal connection in the age of AI, while the vibrant purple palette incorporates common AI aesthetics, building on visual cues already recognizable to educators. The result is a brand that feels both innovative and welcoming, inviting educators to confidently say 'hi' to AI."
        />
        {/* <ProjectImage
          src="/images/work/hi-ai/Attendee Email.png"
          alt="Hi, AI conference attendee email design"
        /> */}
        <ProjectImage
          src="/images/work/hi-ai/sticker.png"
          alt="Hi, AI conference branded sticker design"
        />
        <ProjectImage
          src="/images/work/hi-ai/zoom bg.png"
          alt="Hi, AI conference Zoom background"
        />
      </ProjectContent>
    </ProjectLayout>
  );
}
