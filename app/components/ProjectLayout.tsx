import React from "react";
import Header from "./Header";
import TurbulenceFilter from "./TurbulenceFilter";
import Link from "next/link";

interface ProjectLayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <div className="min-h-screen  md:max-w-4xl! mx-auto! mb-30!">
      <TurbulenceFilter />

      {children}
      <div className="flex justify-center mt-8">
        <Link
          href="/"
          className="bg-gray-800 text-white! px-7! py-4! mt-20! text-xl rounded-4xl font-bold shadow-lg hover:bg-gray-700 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
