import React from "react";
import Header from "./Header";
import TurbulenceFilter from "./TurbulenceFilter";

interface ProjectLayoutProps {
  children: React.ReactNode;
}

export default function ProjectLayout({ children }: ProjectLayoutProps) {
  return (
    <div className="min-h-screen md:max-w-7xl mx-auto!">
      <TurbulenceFilter />

      {children}
    </div>
  );
}
