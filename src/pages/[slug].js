import React from "react";
import { StickyNavbar } from "@/components/StickyNavbar";
import OtherHeroSection from "@/components/OtherHeroSection";
import FooterSection from "@/components/FooterSection";
import { projectsData } from "@/data/projectsData";
import { useRouter } from "next/router";
import AppPreviewSection from "@/components/AppPreviewSection";
import ProjectDetails from "@/components/ProjectDetails";

// Static Paths
export async function getStaticPaths() {
  const slugs = projectsData.map((proj) => proj.slug);
  return {
    paths: slugs.map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}

//Project Finder
export async function getStaticProps({ params }) {
  const project = projectsData.find((proj) => proj.slug === params.slug);
  return {
    props: {
      project,
    },
  };
}

// Component
const InnerProject = ({ project }) => {
  return (
    <div className="min-h-screen relative bg-black">
      <StickyNavbar />
      <OtherHeroSection
        content={project}
      />
      <ProjectDetails
        project={project}
      />
      <AppPreviewSection 
        project={project} />
      <FooterSection />
    </div>
  );
};

export default InnerProject;