import type { Metadata } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TurbulenceFilter from "./components/TurbulenceFilter";
import "./globals.css";

export const metadata: Metadata = {
  title: "julia eversmann",
  description:
    "julia eversmann is a graphic designer based in champaign-urbana.",
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
        {/* <link rel="stylesheet" href="https://use.typekit.net/soz6lwi.css" /> */}
        <link rel="stylesheet" href="https://use.typekit.net/zus0xeg.css" />
        <link rel="icon" href="images/site/favicon_lizard.svg" />
      </head>
      <body className="antialiased md:p-0 p-3.5! min-h-screen flex flex-col">
        <TurbulenceFilter />
        <Header />
        <main className="grow flex">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
