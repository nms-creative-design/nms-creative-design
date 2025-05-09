// pages/services.jsx
import React from "react";
import OtherHeroSection from "@/components/OtherHeroSection";// Adjust path if Inner is in a different directory (e.g., '@/components/About/Inner')
import Tabservices from "@/components/Tabservices";
import CtaSection from "@/components/CtaSection";
import FooterSection from "@/components/FooterSection";
import { StickyNavbar } from "@/components/StickyNavbar";
import Link from "next/link";
const contentData = [
  {
    section: 'hero',
    data: {
      title: "Our Services",
      description: "Transform your digital footprint instantly with NMS Creative Design. Our cutting-edge solutions drive engagement, boost conversions, and propel your brand to the top of search results. Stop disappearing online—start commanding attention today.",
      images: {
        hero: {
          src: '/assets/pages/about/logo-black.webp',
          alt: 'About Us Hero Image',
          height: '240',
          width: '240',
      }
      }
    }
  }, 
  {
    section: "tabServices",
    data: [ 
      {
        label: "Web Design",
        value: "html",
        desc: (
          <div className="flex flex-col gap-8">
            {/* Main Content Section */}
            <div>
              <h3 className="text-4xl font-bold text-white mb-4 text-left">
                Web Design That Wows and Engages
              </h3>
              <p className="text-gray-400 text-lg max-w-3xl mb-10 text-left">Web design services encompass the process of creating and designing visually appealing, functional, and user-friendly websites. It's focus on crafting the visual and interactive elements of a website to ensure a positive user experience and effective communication of a brand's message.
              </p>
            </div>
      
            {/* Features Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex flex-col space-y-6">
                {/* Feature 1 */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-800 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 text-left">Captivating Designs</h4>
                      <p className="text-gray-400 text-left">Transforming Vision into Stunning Web Experiences</p>
                    </div>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-800 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 text-left">Engage and Convert</h4>
                      <p className="text-gray-400 text-left">Compelling Web Designs that Leave a Lasting Impression</p>
                    </div>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="border-t border-gray-700 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-gray-800 rounded-md">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2 text-left">User-Focused Experiences</h4>
                      <p className="text-gray-400 text-left">Elevating Brands through Intuitive and Aesthetically Pleasing Designs</p>
                    </div>
                  </div>
                </div>
                {/* CTA Button */}
                <div className="mt-6 text-left">
                      <Link href={"/WebDesign"}>
                        <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300">
                          Know More
                        </button>
                      </Link>
                    </div>
                </div>
                {/* Image Section */}
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src="/images/img1.png"
                      alt="Web Design Interface"
                      className="w-full h-full object-cover"
                    />
                </div>
             </div>
            </div>
            ),
      },
      {
            label: "Graphic Design",
            value: "angular",
            desc: (
              <div className="flex flex-col gap-8">
                {/* Main Content Section */}
                <div>
                  <h3 className="text-4xl font-bold text-white mb-4 text-left">
                    Graphic Design That Stands Out
                  </h3>
                  <p className="text-gray-400 text-lg max-w-3xl mb-10 text-left">
                    It is the art of creating visual content that communicates a message to a target audience. Graphic design services include designing logos, brochures, websites, social media graphics, and more.
                  </p>
                </div>
      
                {/* Features Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-6">
                    {/* Feature 1 */}
                    <div className="border-t border-gray-700 pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-800 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2 text-left">Elevate Your Brand</h4>
                          <p className="text-gray-400 text-left">Engage Graphic Design Solutions That Captivate Audiences</p>
                        </div>
                      </div>
                    </div>
      
                    {/* Feature 2 */}
                    <div className="border-t border-gray-700 pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-800 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2 text-left">Visual Excellence</h4>
                          <p className="text-gray-400 text-left">Transform Ideas into Stunning Visual Masterpieces</p>
                        </div>
                      </div>
                    </div>
      
                    {/* Feature 3 */}
                    <div className="border-t border-gray-700 pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-800 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2 text-left">Stand Out from the Crowd</h4>
                          <p className="text-gray-400 text-left">Unlock the Power of Striking Graphic Design</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-6 text-left">
                      <Link href={"/GraphicDesign"}>
                      <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300">
                        Know More
                      </button>
                      </Link>
                    </div>
                  </div>
      
                  {/* Image Section */}
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src="/images/img2.png"
                      alt="Graphic Design Work"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ),
      },
      {
            label: "UI /UX Design",
            value: "react",
            desc: (
              <div className="flex flex-col gap-8">
                {/* Main Content Section */}
                <div>
                  <h3 className="text-4xl font-bold text-white mb-4 text-left">
                    UI/UX Design That Delights
                  </h3>
                  <p className="text-gray-400 text-lg max-w-3xl mb-10 text-left">
                    Our UI/UX design process combines aesthetics with functionality to create intuitive digital experiences. We focus on user research, information architecture, and interactive prototyping to deliver interfaces that are both beautiful and highly usable.
                  </p>
                </div>
      
                {/* Features Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-6">
                    {/* Feature 1 */}
                    <div className="border-t border-gray-700 pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-800 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2 text-left">Seamless User Experiences</h4>
                          <p className="text-gray-400 text-left">Crafting Intuitive Interfaces for Unforgettable Journeys</p>
                        </div>
                      </div>
                    </div>
      
                    {/* Feature 2 */}
                    <div className="border-t border-gray-700 pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-800 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2 text-left">User-Centric Design</h4>
                          <p className="text-gray-400 text-left">Enhancing Engagement and Delighting Audiences</p>
                        </div>
                      </div>
                    </div>
      
                    {/* Feature 3 */}
                    <div className="border-t border-gray-700 pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-800 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2 text-left">Effortless Navigation</h4>
                          <p className="text-gray-400 text-left">Empowering Users with Intuitive and Inspiring Interfaces</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-6 text-left">
                      <Link href={"/UiUxDesign"}>
                        <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
      
                  {/* Image Section */}
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src="/images/img3.png"
                      alt="UI/UX Design Process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ),
      },
      {
            label: "Web Development",
            value: "vue",
            desc: (
              <div className="flex flex-col gap-8">
                {/* Main Content Section */}
                <div>
                  <h3 className="text-4xl font-bold text-white mb-4 text-left">
                    Web Development That Performs
                  </h3>
                  <p className="text-gray-400 text-lg max-w-3xl mb-10 text-left">
                    Our web development team builds high-performance, scalable solutions that bring your design to life. We focus on creating robust applications with clean code, advanced functionality, and seamless integration of the latest technologies.
                  </p>
                </div>
      
                {/* Features Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="flex flex-col space-y-6">
                    {/* Feature 1 */}
                    <div className="border-t border-gray-700 pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-800 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2 text-left">WordPress Development</h4>
                          <p className="text-gray-400 text-left">Develop websites using ElementorPro and Oxygen Builder.</p>
                        </div>
                      </div>
                    </div>
      
                    {/* Feature 2 */}
                    <div className="border-t border-gray-700 pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-800 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2 text-left">HTML/CSS/JavaScript Web Development</h4>
                          <p className="text-gray-400 text-left">Develop websites using HTML/CSS/JavaScript and other frameworks.</p>
                        </div>
                      </div>
                    </div>
      
                    {/* Feature 3 */}
                    <div className="border-t border-gray-700 pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-gray-800 rounded-md">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2 text-left">Responsive and Scalable</h4>
                          <p className="text-gray-400 text-left">Seamlessly Adapted Websites for All Devices and Growth</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <div className="mt-6 text-left">
                      <Link href={"/WebDevelopment"}>
                        <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300">
                          Know More
                        </button>
                      </Link>
                    </div>
                  </div>
      
                  {/* Image Section */}
                  <div className="bg-gray-800 rounded-lg overflow-hidden">
                    <img
                      src="/images/img4.png"
                      alt="Web Development Process"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ),
      },
    ] 
  }
]

const heroContent = contentData.find((item) => item.section === "hero")?.data || {};
const servicesContent = contentData.find((item) => item.section === "tabServices")?.data || {};

const Services = () => {

  return (
    <div className="min-h-screen relative">
      <StickyNavbar />
      <OtherHeroSection
        content={heroContent}
      />
      <Tabservices 
        content={servicesContent}
      />

      <CtaSection />
      <FooterSection />
    </div>
  );
};

export default Services;