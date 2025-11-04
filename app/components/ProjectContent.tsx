import React from "react";
import Image from "next/image";

interface ProjectContentProps {
  children: React.ReactNode;
}

interface ProjectParagraphProps {
  title: string;
  content: string;
}

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProjectContent({ children }: ProjectContentProps) {
  return (
    <div className=" flex items-center justify-center flex-col gap-12">
      {children}
    </div>
  );
}

export function ProjectParagraph({ title, content }: ProjectParagraphProps) {
  return (
    <div className="p-15!">
      <h3 className="font-black!">{title}</h3>
      <p className="text-2xl!">{content}</p>
    </div>
  );
}

export function ProjectImage({ src, alt, className = "" }: ProjectImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className={` md:w-full md:h-full md:object-contain  rounded-4xl ${className}`}
    />
  );
}
