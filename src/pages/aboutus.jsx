// pages/about.js
import { StickyNavbar } from "@/components/StickyNavbar";
import React from "react";
import Image from "next/image";
import Inner from "@/components/About/Inner";
import Difference from "@/components/About/Difference";

export default function About() {
  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      <StickyNavbar />
      <Inner />
      <Difference />
    
          
       
    </div>
  );
}