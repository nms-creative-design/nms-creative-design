// pages/about.js
import { StickyNavbar } from "@/components/StickyNavbar";
import React from "react";
import Image from "next/image";
import Inner from "@/components/About/Inner";
import Difference from "@/components/About/Difference";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { Tabs } from "@material-tailwind/react";
import TabsAbout from "@/components/About/TabsAbout";
import Values from "@/components/About/Values";
import Team from "@/components/About/Team";

export default function About() {
  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      <StickyNavbar />
      <Inner />
      <Difference />
      <TabsAbout />
      <Values />
      <Team />
      <Cta />
      <Footer />
       
    </div>
  );
}