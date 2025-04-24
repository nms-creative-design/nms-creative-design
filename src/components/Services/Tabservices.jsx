import React from 'react';
import {
  Typography,
} from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

const Tabservices = () => {
  const data = [
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
            <p className="text-gray-400 text-lg max-w-3xl mb-10 text-left">
              Web design services encompass the process of creating and designing visually appealing, functional, and user-friendly websites. It's focus on crafting the visual and interactive elements of a website to ensure a positive user experience and effective communication of a brand's message.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-2 text-left">User-Focused Experiences</h4>
                    <p className="text-gray-400 text-left">Elevating Brands through Intuitive and Aesthetically Pleasing Designs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src="/images/web.png"
                alt="Web Design Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300">
              Know More
            </button>
          </div>
        </div>
      ),
    },
    {
      label: "Graphic Design",
      value: "angular",
      desc: (
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-bold text-white mb-4 text-left">
            Graphic Design That Stands Out
          </h3>
          <p className="text-gray-400 text-lg max-w-3xl text-left">
            Our graphic design services transform ideas into visual stories that captivate and communicate. We create compelling visual assets that strengthen your brand and connect with your audience.
          </p>
          
          <div className="mt-6">
            <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300">
              Know More
            </button>
          </div>
        </div>
      ),
    },
    {
      label: "UI /UX Design",
      value: "react",
      desc: (
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-bold text-white mb-4 text-left">
            UI/UX Design That Delights
          </h3>
          <p className="text-gray-400 text-lg max-w-3xl text-left">
            We create intuitive interfaces and seamless user experiences that guide users through their journey with ease and satisfaction, resulting in higher engagement and conversion rates.
          </p>
          
          <div className="mt-6">
            <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300">
              Know More
            </button>
          </div>
        </div>
      ),
    },
    {
      label: "Web Development",
      value: "vue",
      desc: (
        <div className="flex flex-col gap-8">
          <h3 className="text-4xl font-bold text-white mb-4 text-left">
            Web Development That Performs
          </h3>
          <p className="text-gray-400 text-lg max-w-3xl text-left">
            Our development team builds robust, scalable websites and applications that deliver exceptional performance, security, and functionality across all devices and platforms.
          </p>
          
          <div className="mt-6">
            <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300">
              Know More
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-black py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(70,70,70,0.08),transparent_70%)]"></div>

      {/* Main Content */}
      <div className="container mx-auto px-6 max-w-6xl z-10">
        <div className="flex flex-col items-center text-center gap-10">
         
          {/* Tabs Section */}
          <Tabs value="html" className="w-full">
            <TabsHeader
              className="bg-[#111111] border border-gray-800 flex justify-center gap-2 p-2"
            >
              {data.map(({ label, value }) => (
                <Tab
                  key={value}
                  value={value}
                  className={({ selected }) =>
                    selected
                      ? "bg-white text-black font-medium rounded-t-lg px-6 py-2 h-12 border-b-2 border-gray-300"
                      : "bg-[#111111] text-gray-200 font-medium rounded-t-lg px-6 py-2 h-12 hover:bg-gray-700 hover:border-gray-600 transition-all duration-300"
                  }
                >
                  {label}
                </Tab>
              ))}
            </TabsHeader>
            <TabsBody className="mt-6">
              {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className="text-gray-300">
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Tabservices;