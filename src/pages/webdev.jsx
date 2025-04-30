import { StickyNavbar } from '@/components/StickyNavbar';
import Inner from '@/components/Inner';
import Tabsdesign from '@/components/Tabsdesign';
import { DynamicCardSection } from '@/components/DynamicCardSection';
import DynamicPortfolio from '@/components/DynamicPortfolio';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';
import React from 'react';

const valuesContent = {
  title: 'Web Development',
  description:
    'Our values shape our culture, guide our work, and drive our success.',
  cardData: [
    {
      title: 'Responsive Website Development',
      description:
        'We design and develop responsive websites that adapt seamlessly to different devices and screen sizes. Your website will provide an optimal viewing experience for your audience, whether they\'re browsing on desktop, tablet, or mobile.',
      imageSrc: '/images/icons/vi5.svg',
    },
    {
      title: 'Wordpress Development',
      description:
        'We specialize in developing websites using WordPress. These platforms allow you to easily manage and update your website\'s content without any technical expertise.',
      imageSrc: '/images/icons/vi1.svg',
    },
  ],
};

const webdev = () => {
  return (
    <div className="min-h-screen relative bg-black">
      <StickyNavbar />
      <Inner 
        title="Web Development"
        description="Web development services refers to the process of creating, building, and maintaining websites for individuals, businesses, and organizations. These includes web design, web content development, client-side scripting, and server side scripting among others."
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
        cardContainerClassName="flex flex-wrap justify-center gap-4 pb-4" // Updated for centering
      />

      {/* Updated paragraph section below the cards */}
      <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto px-4 mb-20">
        At our company, we provide comprehensive web development services to create, build, and maintain websites that meet your needs. Contact us today to learn more about how we can help you establish a strong online presence.
      </p>

      <DynamicPortfolio />
      <Cta />
      <Footer />
    </div>
  );
};

export default webdev;