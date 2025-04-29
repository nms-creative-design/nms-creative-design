import { StickyNavbar } from "@/components/StickyNavbar";
import React from "react";
import Inner from "@/components/Inner";
import Difference from "@/components/About/Difference";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import DynamicTabs from "@/components/DynamicTabs";
import Team from "@/components/About/Team";
import { DynamicCardSection } from "@/components/DynamicCardSection";

// Array of icons with their image URLs
const iconsData = [
  {
    name: "creativity",
    src: "/images/icons/vi5.svg",
    alt: "Creativity icon",
  },
  {
    name: "collaboration",
    src: "/images/icons/vi1.svg",
    alt: "Collaboration icon",
  },
  {
    name: "satisfaction",
    src: "/images/icons/vi2.svg",
    alt: "Satisfaction icon",
  },
  {
    name: "versatility",
    src: "/images/icons/vi3.svg",
    alt: "Versatility icon",
  },
  {
    name: "customized",
    src: "/images/icons/vi4.svg",
    alt: "Customized solutions icon",
  },
];

// Single array to store all content for the page
const contentData = [
  {
    section: "inner",
    data: {
      title: "About Us",
      description:
        "Transform your digital footprint instantly with NMS Creative Design. Our cutting-edge solutions drive engagement, boost conversions, and propel your brand to the top of search results. Stop disappearing online—start commanding attention today.",
      imageSrc: "/images/logoinner.png",
      imageAlt: "Company Logo",
      showImage: true,
    },
  },
  {
    section: "difference",
    data: {
      title: "Our Difference",
      description: "Learn what makes us unique in the creative industry.",
    },
  },
  {
    section: "dynamicTabs",
    data: {
      heading: "What sets us apart",
      items: [
        {
          id: 1,
          title: "Unparalleled Creativity",
          description:
            "Our team is driven by a relentless passion for creativity. We go above and beyond to deliver unique and innovative solutions that set your brand apart from the competition.",
          icon: "creativity",
        },
        {
          id: 2,
          title: "Collaboration and Partnership",
          description:
            "We believe in fostering strong relationships with our clients. We value your input and actively involve you in the creative process. We see ourselves as your partners, working closely with you to understand your vision, goals, and preferences, ensuring that the end result exceeds your expectations.",
          icon: "collaboration",
        },
        {
          id: 3,
          title: "Dedication to Customer Satisfaction",
          description:
            "Your satisfaction is our top priority. We are dedicated to ensuring that you are delighted with the final outcome. Throughout the process, we maintain open lines of communication, listen to your feedback, and make necessary adjustments to guarantee your satisfaction.",
          icon: "satisfaction",
        },
        {
          id: 4,
          title: "Versatility and Range",
          description:
            "Our creative studio offers a wide range of services, catering to various industries and sectors. Whether you need branding, web design, graphic design, or other creative solutions, we have the expertise and versatility to deliver outstanding results across different mediums.",
          icon: "versatility",
        },
        {
          id: 5,
          title: "Customized Solutions",
          description:
            "We understand that every client and project is unique. That's why we tailor our services to your specific needs. Our team takes the time to understand your objectives, target audience, and brand identity, creating customized solutions that align perfectly with your goals.",
          icon: "customized",
        },
      ],
      imageSrc: "/images/content.png",
      imageAlt: "Creative studio workspace",
      showImage: true,
    },
  },
  {
    section: "values",
    data: {
      title: "Our Core Values",
      description:
        "These team values serve as the foundation of our creative studio, shaping our culture, guiding our work, and driving our success in delivering exceptional creative experiences.",
      cardData: [
        {
          title: "Creativity",
          description:
            "We embrace and celebrate creativity in all its forms. We believe in pushing boundaries, thinking outside the box, and finding innovative solutions to every challenge.",
          imageSrc: "/images/icons/vi5.svg",
        },
        {
          title: "Collaboration",
          description:
            "We thrive on collaboration and believe that great ideas come from diverse perspectives. We foster a supportive and inclusive environment where everyone's voice is heard and valued.",
          imageSrc: "/images/icons/vi1.svg",
        },
        {
          title: "Excellence",
          description:
            "We have a relentless pursuit of excellence in everything we do. We are dedicated to delivering high-quality work that exceeds expectations and leaves a lasting impression.",
          imageSrc: "/images/icons/vi2.svg",
        },
        {
          title: "Passion",
          description:
            "We are passionate about our craft and genuinely care about the work we produce. Our enthusiasm fuels our creativity and drives us to constantly improve and evolve.",
          imageSrc: "/images/icons/vi3.svg",
        },
        {
          title: "Integrity",
          description:
            "We operate with integrity and maintain the highest ethical standards. We value honesty, transparency, and treating everyone with respect and fairness.",
          imageSrc: "/images/icons/vi4.svg",
        },
      ],
    },
  },
  {
    section: "team",
    data: {
      title: "Meet Our Team",
      description: "Get to know the talented individuals behind our creative solutions.",
    },
  },
  {
    section: "cta",
    data: {
      title: "Ready to Get Started?",
      description: "Contact us today to transform your brand with our creative expertise.",
      buttonText: "Get in Touch",
      buttonLink: "/contact",
    },
  },
];

// Extract content for each section
const innerContent = contentData.find((item) => item.section === "inner")?.data || {};
const differenceContent = contentData.find((item) => item.section === "difference")?.data || {};
const dynamicTabsContent = contentData.find((item) => item.section === "dynamicTabs")?.data || {};
const valuesContent = contentData.find((item) => item.section === "values")?.data || {};
const teamContent = contentData.find((item) => item.section === "team")?.data || {};
const ctaContent = contentData.find((item) => item.section === "cta")?.data || {};

export default function About() {
  return (
    <div className="min-h-screen relative">
      {/* Navbar */}
      <StickyNavbar />
      <Inner
        title={innerContent.title}
        description={innerContent.description}
        imageSrc={innerContent.imageSrc}
        imageAlt={innerContent.imageAlt}
        showImage={innerContent.showImage}
      />
      <Difference {...differenceContent} />
      <DynamicTabs
        heading={dynamicTabsContent.heading}
        items={dynamicTabsContent.items}
        imageSrc={dynamicTabsContent.imageSrc}
        imageAlt={dynamicTabsContent.imageAlt}
        showImage={dynamicTabsContent.showImage}
        iconsData={iconsData}
      />
      <DynamicCardSection
        sectionTitle={valuesContent.title}
        description={valuesContent.description}
        cardData={valuesContent.cardData}
        titleGradientClasses="from-gray-500 via-white to-gray-200"
        sectionClassName="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-12 pb-12"
        containerClassName="container mx-auto px-6 py-12 max-w-6xl z-10"
      />
      <Team {...teamContent} />
      <Cta {...ctaContent} />
      <Footer />
    </div>
  );
}