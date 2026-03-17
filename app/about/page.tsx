import React from "react";
import Image from "next/image";

const thingsYouCanTalkToJuliaAbout = [
  {
    title: "Enzo the Dog",
    imgSrc: "/images/about/enzo donut.png",
    alt: "A photo of enzo, a rat terrier, wearing a giant stuffed pink frosted donut around his head.",
  },
  {
    title: "My ability to spot Fiestaware at the thrift store",
    imgSrc: "/images/about/fiestaware.png",
    alt: "A cutout photo of a fiestaware plate and mug",
  },
  {
    title: "Original Wii Games",
    imgSrc: "/images/about/wii fish.png",
    alt: "A photo of a colorful paper mâché fish.",
  },
];

function shuffleThings<T>(items: T[]): T[] {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function getRandomRotation(maxDegrees: number): number {
  return (Math.random() * 2 - 1) * maxDegrees;
}

export default function About() {
  const shuffledThings = shuffleThings(thingsYouCanTalkToJuliaAbout);

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 md:gap-12 gap-6 h-min  p-12! md:max-w-7xl mx-auto! ">
      <Image
        src="/images/about/julia.png"
        alt="Photo of Julia Eversmann"
        className="rounded-3xl col-span-1"
        width={500}
        height={500}
        priority
      />

      <div className="md:col-span-2 col-span-1">
        <h1 id="turbulence ">about me</h1>
        <p className="mt-8! text-2xl! ">
          Hi, I'm Julia! I'm a graphic designer based in Illinois, specializing
          in solving design problems and creating effective, long-lasting
          solutions. Accessibility and user-experience are the foundation of
          everything I do. I enjoy all design mediums, but I have a special love
          for organizing complex content into intentional, readable typography.
        </p>
        {/* <p className="mt-8!">Aside from design, talk to me about:</p>
        <ul className="list-disc! ml-6! mt-2! mb-8! text-2xl">
          <li>Bugs</li>
          <li>Enzo the dog</li>
          <li>
            My secret ability to track down fiestaware at the thrift store
          </li>
        </ul> */}
        {/* <p>
          hi! i'm julia, a designer based in illinois. i have a passion for
          connecting and collaborating with people, and i genuinely fall in love
          with every project that comes my way. my goal is always to make my
          work accessible, approachable, and fun to experience.
        </p>
        <p>
          i have experience with a variety of design mediums, but i'm always
          looking to learn new things. my current loves are typography, web
          design, and brand identity.
        </p>
        <p className="mb-8!">
          when i'm not designing, i'm typically watching formula 1 or spending
          time with my dog, enzo (yes, named after enzo ferrari). i also love
          listening to MF DOOM, trying to identify random bugs i encounter, and
          saying "windmill!" whenever i see a wind turbine.
        </p> */}
      </div>
      {/* <div className="col-span-3 text-center mx-auto w-full mt-22! "> */}
      <hr className="md:col-span-3 col-span-1" />
      <h2 className="md:text-center text-left font-black! lowercase md:col-span-3! col-span-1 md:text-2xl! ">
        Don’t want to talk about design? Talk to me about:
      </h2>

      {shuffledThings.map((thing) => {
        const rotation = getRandomRotation(15);

        return (
          <div
            key={thing.title}
            className="grid grid-cols-1 grid-rows-[14rem_min-content] md:grid-rows-[18rem_min-content] lowercase col-span-1"
          >
            <div
              className="h-full w-full flex items-center justify-center"
              style={{ transform: `rotate(${rotation.toFixed(2)}deg)` }}
            >
              <Image
                alt={thing.alt}
                src={thing.imgSrc}
                width={400}
                height={400}
                className="max-h-full w-auto max-w-full object-contain"
              />
            </div>
            <p className="text-gray-500 text-xl! font-bold h-min self-start px-8! text-center">
              {thing.title}
            </p>
          </div>
        );
      })}
    </div>
    // </div>
  );
}
