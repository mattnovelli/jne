import React from "react";
import ContactButtons from "../ContactButtons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col md:mx-12! items-center justify-center py-6! gap-4">
      <p className="text-sm! opacity-80!">© {currentYear} Julia Eversmann</p>
    </footer>
  );
}
