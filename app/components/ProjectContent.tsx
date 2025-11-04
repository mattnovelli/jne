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

interface ProjectGridProps {
  children: React.ReactNode;
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

export function ProjectGrid({ children }: ProjectGridProps) {
  const childArray = React.Children.toArray(children);

  return (
    <div className="w-full space-y-6">
      {/* First row: 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {childArray.slice(0, 3)}
      </div>

      {/* Second row: 1 column */}
      <div className="grid grid-cols-1">{childArray.slice(3, 4)}</div>

      {/* Third row: 2 even columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {childArray.slice(4, 6)}
      </div>

      {/* Additional rows: 2 columns each for any remaining items */}
      {childArray.length > 6 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {childArray.slice(6)}
        </div>
      )}
    </div>
  );
}
