"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import ContactButtons from "../ContactButtons";

export default function Header() {
  const [showTongue, setShowTongue] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleLizardClick = () => {
    // Show tongue
    setShowTongue(true);

    // Play random sound
    if (audioRef.current) {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      audioRef.current.src = `/sounds/boink_${randomNumber}.mp3`;
      audioRef.current.play();
    }

    // Hide tongue after 200ms
    setTimeout(() => {
      setShowTongue(false);
    }, 200);
  };

  return (
    <>
      <header className="flex flex-col  py-8!  md:mx-12! ">
        <div className="flex justify-between  items-center">
          <div id="turbulence" className="relative">
            <Image
              src="/images/site/lizard_1.svg"
              alt="Lizard mascot"
              width={100}
              height={100}
              className=" md:h-[8vw] cursor-pointer"
              style={{
                opacity: showTongue ? 0 : 1,
                pointerEvents: showTongue ? "none" : "auto",
              }}
              onMouseDown={handleLizardClick}
            />
            <Image
              src="/images/site/lizard_2.svg"
              alt="Lizard with tongue"
              width={100}
              height={100}
              className=" absolute top-0 left-0 cursor-pointer"
              style={{
                opacity: showTongue ? 1 : 0,
                pointerEvents: showTongue ? "none" : "auto",
              }}
              onMouseDown={handleLizardClick}
            />
          </div>

          <nav
            id="turbulence"
            className="flex gap-8 flex-wrap items-center font-bold text-4xl"
          >
            <Link href="/" className="text-black no-underline">
              home
            </Link>
            <Link href="/about" className="text-black no-underline">
              about
            </Link>
            <div className="hidden sm:block">
              <ContactButtons />
            </div>
          </nav>
        </div>
      </header>

      {/* Audio element for lizard sounds */}
      <audio ref={audioRef} />
    </>
  );
}
