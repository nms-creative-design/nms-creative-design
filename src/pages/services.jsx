// pages/services.jsx
import React from "react";
import Inner from "@/components/Inner";// Adjust path if Inner is in a different directory (e.g., '@/components/About/Inner')
import Tabservices from "@/components/Services/Tabservices";
import Project from "@/components/Project";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { StickyNavbar } from "@/components/StickyNavbar";

const Services = () => {
  return (
    <div className="min-h-screen relative">
      <StickyNavbar />
      <Inner
        title="Services"
        description="Transform your digital footprint instantly with NMS Creative Design. Our cutting-edge solutions drive engagement, boost conversions, and propel your brand to the top of search results. Stop disappearing online—start commanding attention today."
        imageSrc="/images/logoinner.png"
        imageAlt="Company Logo"
        showImage={true}
      />
      <Tabservices />
      <Project />
      <Cta />
      <Footer />
    </div>
  );
};

export default Services;