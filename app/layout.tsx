import type { Metadata } from "next";
import Header from "./components/Header";
import TurbulenceFilter from "./components/TurbulenceFilter";
import "./globals.css";

export const metadata: Metadata = {
  title: "julia eversmann",
  description:
    "julia eversmann is a graphic designer based in the midwestern united states.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/soz6lwi.css" />
      </head>
      <body className="antialiased">
        <TurbulenceFilter />
        <Header />
        {children}
      </body>
    </html>
  );
}
