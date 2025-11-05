import React from "react";
import Image from "next/image";
import Header from "../components/Header";
import TurbulenceFilter from "../components/TurbulenceFilter";
import ContactButtons from "../ContactButtons";

export default function About() {
  return (
    <div className="grid md:grid-cols-2 md:gap-12 gap-4  px-12 py-24 md:max-w-7xl mx-auto! ">
      <div className="flex flex-col gap-8">
        <img
          src="/images/about/headshot.png"
          alt="Photo of Julia Eversmann"
          className="rounded-3xl"
        />
        {/* <img
          src="/images/about/donut_cutout.webp"
          alt="Enzo the rat terrier wearing a donut costume"
          className="rounded-3xl w-sm md:block! hidden!"
        /> */}
      </div>

      <div className="">
        <h1 id="turbulence ">about me</h1>
        <p className="mt-8! text-2xl!">
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
    </div>
  );
}
