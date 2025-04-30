import Cta from '@/components/Cta'
import { DynamicCardSection } from '@/components/DynamicCardSection'
import DynamicPortfolio from '@/components/DynamicPortfolio'
import Footer from '@/components/Footer'
import Inner from '@/components/Inner'
import { StickyNavbar } from '@/components/StickyNavbar'
import Tabsdesign from '@/components/Tabsdesign'
import React from 'react'

const valuesContent = {
  title: 'UI / UX Services',
  description:
    'Our values shape our culture, guide our work, and drive our success.',
  cardData: [
    {
      title: 'User Research',
      description:
        'Understanding the needs and preferences of your target audience is crucial to the success of any project. Our team conducts extensive research to gain insights into how your users interact with your product or service. This research enables us to create user-centric interfaces that deliver optimal experiences.',
      imageSrc: '/images/icons/vi5.svg',
    },
    {
      title: 'Interface Design',
      description:
        'Our team of designers uses the latest tools and technologies to create visually stunning interfaces that engage and delight users. We focus on creating interfaces that are intuitive and easy to use, with a clear and consistent design language that enhances the user experience.',
      imageSrc: '/images/icons/vi1.svg',
    },
    {
      title: 'Usability Testing',
      description:
        'Usability testing is an essential part of the UI/UX design process. Our team conducts both qualitative and quantitative testing to ensure that your interface is user-friendly and easy to navigate. This testing enables us to identify any usability issues and make necessary improvements.',
      imageSrc: '/images/icons/vi2.svg',
    },
    {
      title: 'Responsive Design',
      description:
        "With the growing use of mobile devices, it's essential that your interface is optimized for different screen sizes. Our team employs responsive design techniques to ensure that your interface looks great and functions seamlessly on all devices.",
      imageSrc: '/images/icons/vi2.svg',
    },
    {
      title: 'User Experience (UX) Design',
      description:
        'We prioritize user-centered design principles to create websites that provide a seamless and delightful user experience. We conduct thorough research and analysis to understand your target audience and design websites that meet their needs and expectations.',
      imageSrc: '/images/icons/vi4.svg',
    },
    {
      title: 'Visual Branding and Graphic Design',
      description:
        'We integrate your brand identity seamlessly into the design, ensuring consistency in colors, typography, and visual elements. Our graphic design expertise enhances the overall aesthetics and enhances brand recognition.',
      imageSrc: '/images/icons/vi6.svg',
    },
    {
      title: 'Wire-framing and Prototyping',
      description:
        'We use wireframing and prototyping techniques to visualize and refine the structure and functionality before moving into the development phase. This allows us to align our design concepts with your goals and make necessary iterations early in the process.',
      imageSrc: '/images/icons/vi7.svg',
    },
  ],
};

const uix = () => {
  return (
    <div className="min-h-screen relative bg-black">
      <StickyNavbar />
      <Inner 
        title="UI / UX Design"
        description="The UI/UX services offered by our company are designed to provide our clients with an exceptional user experience. Our team of experienced professionals is committed to creating interfaces that are visually appealing, intuitive and easy to use."
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

      {/* New p tag section below the cards */}
      <p className="text-gray-400 text-lg text-center max-w-3xl mx-auto px-4 mb-20">
      At our company, we provide end-to-end UI/UX design services that enable our clients to deliver exceptional user experiences. Contact us today to learn more about how we can help you enhance your interface and delight your users.
      </p>
      <DynamicPortfolio />
      <Cta />
      <Footer />
    </div>
  )
}

export default uix
