import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import TurbulenceFilter from "./components/TurbulenceFilter";
import { BsFillEnvelopeFill } from "react-icons/bs";

export default function ContactButtons() {
  return (
    <div className="flex flex-row gap-4 items-center" id="turbulence">
      <ContactButton
        href="mailto:jneversmann@gmail.com"
        imageAlt="Email contact"
        reactIcon={<BsFillEnvelopeFill />}
      />

      <ContactButton
        href="https://www.linkedin.com/in/julia-eversmann-684298293/"
        imageSrc="/images/site/contact_linkedin.svg"
        imageAlt="LinkedIn profile"
      />
    </div>
  );
}

interface ContactButtonProps {
  href: string;
  imageSrc: string;
  imageAlt?: string;
  reactIcon?: React.ReactNode;
}

function ContactButton({
  href,
  imageSrc,
  imageAlt,
  reactIcon,
}: ContactButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center justify-center hover:brightness-80 transition-all duration-200"
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-8 h-8 object-contain rounded-lg"
        />
      )}
      {reactIcon && <span className="ml-2 text-2xl">{reactIcon}</span>}
    </Link>
  );
}
