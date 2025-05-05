import React from 'react';
import { StickyNavbar } from '@/components/StickyNavbar';
import Footer from '@/components/Footer';
import Tabsdesign from '@/components/Tabsdesign';
import Inner from '@/components/Inner';
import { DynamicCardSection } from '@/components/DynamicCardSection';
import Cta from '@/components/Cta';
import DynamicPortfolio from '@/components/DynamicPortfolio';

// Define valuesContent for DynamicCardSection
const valuesContent = {
  title: 'Web Design Services',
  description:
    'Our values shape our culture, guide our work, and drive our success.',
  cardData: [
    {
      title: 'Custom Website Design',
      description:
        'We specialize in creating unique and custom website designs that align with your brand identity and objectives. Our designs are tailored to reflect your vision and create a memorable online presence.',
      imageSrc: '/images/icons/vi5.svg',
    },
    {
      title: 'Responsive Web Design',
      description:
        'In today’s mobile-first world, we ensure that your website is fully responsive, adapting seamlessly to different devices and screen sizes. Your website will provide an optimal user experience, whether viewed on desktop, tablet, or mobile.',
      imageSrc: '/images/icons/vi1.svg',
    },
    {
      title: 'User Interface (UI) Design',
      description:
        'We focus on crafting intuitive and user-friendly interfaces that enhance the overall user experience. Our UI designs are aesthetically pleasing, functional, and ensure easy navigation and interaction.',
      imageSrc: '/images/icons/vi2.svg',
    },
    {
      title: 'User Experience (UX) Design',
      description:
        'We prioritize user-centered design principles to create websites that provide a seamless and delightful user experience.',
      imageSrc: '/images/icons/vi3.svg',
    },
    {
      title: 'Visual Branding and Graphic Design',
      description:
        'We integrate your brand identity seamlessly into the website design, ensuring consistency in colors, typography, and visual elements. Our graphic design expertise enhances the overall aesthetics and enhances brand recognition.',
      imageSrc: '/images/icons/vi4.svg',
    },
    {
      title: 'Wire-framing and Prototyping',
      description:
        'We use wireframing and prototyping techniques to visualize and refine the website structure and functionality before moving into the development phase. This allows us to align our design concepts with your goals and make necessary iterations early in the process.',
      imageSrc: '/images/icons/vi6.svg',
    },
    {
      title: 'Conversion-focused Design',
      description:
        'Our web designs are strategically crafted to drive conversions and achieve your desired goals. We optimize the layout, calls-to-action, and user flow to guide visitors towards taking desired actions, whether it’s making a purchase, submitting a form, or engaging with your content.',
      imageSrc: '/images/icons/vi7.svg',
    },
    {
      title: 'Website Redesign and Revamping',
      description:
        'If you already have an existing website, we can revamp and enhance its design to give it a fresh and modern look. Our redesign services focus on improving user experience, incorporating the latest design trends, and aligning with your evolving brand strategy.',
      imageSrc: '/images/icons/vi8.svg',
    },
  ],
};

const Design = () => {
  return (
    <div className="min-h-screen relative bg-black">
      <StickyNavbar />
      <Inner
        title="Web Design"
        description="Web design services encompass the process of creating and designing visually appealing, functional, and user-friendly websites. It’s focus on crafting the visual and interactive elements of a website to ensure a positive user experience and effective communication of a brand's message."
        imageSrc="/images/logoinner.png"
        imageAlt="Company Logo"
        showImage={true}
      />
      <Tabsdesign />
      <DynamicCardSection
        sectionTitle={valuesContent.title}
        description={valuesContent.description}
        cardData={valuesContent.cardData}
        titleGradientClasses="from-gray-500 via-white to-gray-200"
        sectionClassName="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black pt-12 pb-12"
        containerClassName="container mx-auto px-6 max-w-6xl z-10"
      />
      <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto px-4 mb-20">
        At NMS Creative Designs, we believe that design is not just about making things look good. It's about creating a visual language that communicates your message effectively. Whether you need a logo, website, or marketing material, we are here to help you create designs that make an impact.
      </p>
      <DynamicPortfolio
        heading="Web Design Portfolio"
        categories={["Web Design"]}
      />
      <Cta />
      <Footer />
    </div>
  );
};

export default Design;