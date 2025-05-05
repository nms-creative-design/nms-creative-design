import { StickyNavbar } from '@/components/StickyNavbar';
import Inner from '@/components/Inner';
import Tabsdesign from '@/components/Tabsdesign';
import { DynamicCardSection } from '@/components/DynamicCardSection';
import DynamicPortfolio from '@/components/DynamicPortfolio';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import React from 'react';

const valuesContent = {
  title: 'Graphic Design Services',
  description:
    'Our passion for creativity drives our design process, delivering visually stunning solutions.',
  cardData: [
    {
      title: 'Logo Design',
      description:
        'A logo is the face of your brand. Our logo design service helps you create a unique and memorable logo that represents your brand identity and stands out in the market.',
      imageSrc: '/images/icons/vi5.svg',
    },
    {
      title: 'Branding and Identity Design',
      description:
        'Our branding and identity design service helps you create a consistent visual identity for your brand. We help you develop a brand style guide that includes your logo, colors, typography, and more.',
      imageSrc: '/images/icons/vi1.svg',
    },
    {
      title: 'Social Media Graphics',
      description:
        "Social media is an essential marketing tool for businesses. Our social media graphics service helps you create visually appealing graphics for your social media profiles that grab your audience's attention.",
      imageSrc: '/images/icons/vi2.svg',
    },
    {
      title: 'Print Design',
      description:
        'Our print design service includes designing brochures, business cards, flyers, and other marketing materials that help you promote your business effectively.',
      imageSrc: '/images/icons/vi4.svg',
    },
  ],
};

const Graphic = () => {
  return (
    <div className="min-h-screen relative bg-black">
      <StickyNavbar />
      <Inner
        title="Graphic Design"
        description="It is the art of creating visual content that communicates a message to a target audience. Graphic design services include designing logos, brochures, websites, social media graphics, and more."
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
        At NMS Creative Designs, we believe that design is not just about making things look good. It’s about creating a visual language that communicates your message effectively. Whether you need a logo, website, or marketing material, we are here to help you create designs that make an impact.
      </p>
      <DynamicPortfolio
        heading="Graphic Design Portfolio"
        categories={["Graphic Design"]}
      />
      <Cta />
      <Footer />
    </div>
  );
};

export default Graphic;