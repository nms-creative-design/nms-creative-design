import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 transition-transform ${open === id ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const Tabsdesign = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="font-bold text-4xl bg-gradient-to-r from-gray-500 via-white to-gray-200 text-transparent bg-clip-text">
            What sets us apart
          </h2>
        </div>

        {/* Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Accordions */}
          <div className="space-y-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/20 to-white/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Accordion
                open={open === 1}
                className="relative border border-white/20 rounded-xl backdrop-blur-sm bg-black/80 shadow-lg hover:shadow-xl transition duration-300"
              >
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="text-white hover:text-white text-lg font-medium text-left px-6 py-5 flex items-center justify-between border-b-0 transition-colors"
                  aria-expanded={open === 1}
                  aria-controls="accordion-body-1"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.33532 5.39782C3.75828 6.97485 3.34454 9.26089 3.23599 13.114H32.3562C32.2477 9.26089 31.8339 6.97485 30.2569 5.39782C28.1189 3.25989 24.678 3.25989 17.7961 3.25989C10.9142 3.25989 7.47325 3.25989 5.33532 5.39782ZM3.19739 17.8586C3.19739 16.9485 3.19739 16.0985 3.20233 15.3038H12.3216L12.3216 30.9974V32.3935C8.90493 32.2516 6.81011 31.7942 5.33532 30.3194C3.19739 28.1814 3.19739 24.7405 3.19739 17.8586ZM9.03687 10.5592C9.84314 10.5592 10.4967 9.90564 10.4967 9.09937C10.4967 8.29311 9.84314 7.6395 9.03687 7.6395C8.23061 7.6395 7.577 8.29311 7.577 9.09937C7.577 9.90564 8.23061 10.5592 9.03687 10.5592ZM14.8764 9.09937C14.8764 9.90564 14.2228 10.5592 13.4165 10.5592C12.6102 10.5592 11.9566 9.90564 11.9566 9.09937C11.9566 8.29311 12.6102 7.6395 13.4165 7.6395C14.2228 7.6395 14.8764 8.29311 14.8764 9.09937ZM17.7961 10.5592C18.6024 10.5592 19.256 9.90564 19.256 9.09937C19.256 8.29311 18.6024 7.6395 17.7961 7.6395C16.9898 7.6395 16.3362 8.29311 16.3362 9.09937C16.3362 9.90564 16.9898 10.5592 17.7961 10.5592Z"
                        fill="white"
                      />
                      <path
                        d="M32.3948 17.8586C32.3948 24.7405 32.3948 28.1814 30.2569 30.3194C28.1189 32.4573 24.678 32.4573 17.7961 32.4573C16.6012 32.4573 15.51 32.4573 14.5114 32.4461V30.9974L14.5114 15.3038H32.3899C32.3948 16.0985 32.3948 16.9485 32.3948 17.8586Z"
                        fill="white"
                      />
                    </svg>
                    <span>Exceptional Web design </span>
                  </div>
                 
                </AccordionHeader>
                <AccordionBody className="text-gray-300 text-base px-6 pb-6 pt-0" id="accordion-body-1">
                Web design services focus on crafting the visual and interactive elements of a website to ensure a positive user experience and effective communication of a brand's message.
                At our creative studio, we offer exceptional web design services that bring together aesthetics, functionality, and user experience.
                </AccordionBody>
              </Accordion>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/20 to-white/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Accordion
                open={open === 2}
                className="relative border border-white/20 rounded-xl backdrop-blur-sm bg-black/80 shadow-lg hover:shadow-xl transition duration-300"
              >
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="text-white hover:text-white text-lg font-medium text-left px-6 py-5 flex items-center justify-between border-b-0 transition-colors"
                  aria-expanded={open === 2}
                  aria-controls="accordion-body-2"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.3217 10.7287C12.3217 7.70518 14.7727 5.25415 17.7962 5.25415C20.8197 5.25415 23.2707 7.70518 23.2707 10.7287C23.2707 13.7522 20.8197 16.2032 17.7962 16.2032C14.7727 16.2032 12.3217 13.7522 12.3217 10.7287Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.2707 15.1083C23.2707 12.6895 25.2315 10.7287 27.6503 10.7287C30.0691 10.7287 32.0299 12.6895 32.0299 15.1083C32.0299 17.5271 30.0691 19.4879 27.6503 19.4879C25.2315 19.4879 23.2707 17.5271 23.2707 15.1083Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.56243 15.1083C3.56243 12.6895 5.52325 10.7287 7.94205 10.7287C10.3608 10.7287 12.3217 12.6895 12.3217 15.1083C12.3217 17.5271 10.3608 19.4879 7.94205 19.4879C5.52325 19.4879 3.56243 17.5271 3.56243 15.1083Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.48931 22.9442C11.2382 20.2097 14.3047 18.393 17.7962 18.393C21.2881 18.393 24.3549 20.2101 26.1037 22.9452C27.3127 24.836 27.8358 27.116 27.5904 29.339C27.5521 29.6864 27.3502 29.9946 27.047 30.1686C24.3209 31.7327 21.1613 32.6267 17.7962 32.6267C14.4311 32.6267 11.2714 31.7327 8.54533 30.1686C8.24218 29.9946 8.04029 29.6864 8.00195 29.339C7.75655 27.1156 8.27987 24.8352 9.48931 22.9442Z"
                        fill="white"
                      />
                      <path
                        d="M7.6972 21.6831C7.67962 21.7101 7.66215 21.7372 7.64478 21.7643C6.23533 23.9681 5.59031 26.5926 5.78832 29.18C4.90065 29.0452 4.03937 28.8283 3.21269 28.5372L3.04486 28.478C2.73871 28.3702 2.5248 28.0922 2.49905 27.7686L2.48494 27.5913C2.47339 27.4462 2.46753 27.2998 2.46753 27.1522C2.46753 24.2108 4.78733 21.8112 7.6972 21.6831Z"
                        fill="white"
                      />
                      <path
                        d="M29.8045 29.1799C30.0025 26.5931 29.3578 23.9691 27.9489 21.7656C27.9313 21.738 27.9135 21.7105 27.8957 21.6831C30.8053 21.8114 33.1248 24.211 33.1248 27.1522C33.1248 27.2998 33.119 27.4462 33.1074 27.5913L33.0933 27.7686C33.0676 28.0922 32.8536 28.3702 32.5475 28.478L32.3797 28.5372C31.5531 28.8282 30.692 29.0451 29.8045 29.1799Z"
                        fill="white"
                      />
                    </svg>
                    <span>Stunning & Engaging Websites</span>
                  </div>
               
                </AccordionHeader>
                <AccordionBody className="text-gray-300 text-base px-6 pb-6 pt-0" id="accordion-body-2">
                Our talented team of web designers will collaborate with you to create visually stunning and engaging websites that captivate your audience. We understand that a well-designed website is essential for making a lasting impression and driving results.
                </AccordionBody>
              </Accordion>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/20 to-white/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Accordion
                open={open === 3}
                className="relative border border-white/20 rounded-xl backdrop-blur-sm bg-black/80 shadow-lg hover:shadow-xl transition duration-300"
              >
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="text-white hover:text-white text-lg font-medium text-left px-6 py-5 flex items-center justify-between border-b-0 transition-colors"
                  aria-expanded={open === 3}
                  aria-controls="accordion-body-3"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1914_14498)">
                        <path
                          d="M22.9875 28.3284L28.3279 22.988H22.9875V28.3284Z"
                          fill="white"
                        />
                        <path
                          d="M28.334 1.89702C28.1078 1.6707 27.8379 1.4929 27.5407 1.3745C27.2434 1.25609 26.9252 1.19958 26.6053 1.20842C26.2855 1.21725 25.9709 1.29124 25.6806 1.42587C25.3904 1.5605 25.1306 1.75293 24.9173 1.99139L14.3188 13.7271C15.5623 14.2212 16.6083 15.1111 17.2951 16.2594L28.334 5.22053C28.7746 4.77972 29.022 4.182 29.022 3.55877C29.022 2.93555 28.7746 2.33783 28.334 1.89702V1.89702Z"
                          fill="white"
                        />
                        <path
                          d="M18.1263 18.8534C18.1408 19.0204 18.1481 19.1886 18.1481 19.3579C18.1461 20.9617 17.5082 22.4993 16.3741 23.6334C15.2401 24.7674 13.7025 25.4054 12.0987 25.4073H6.04936C5.69788 25.4073 5.35062 25.3308 5.03172 25.183C4.71283 25.0353 4.42995 24.8198 4.20276 24.5516C3.97558 24.2835 3.80954 23.969 3.7162 23.6302C3.62286 23.2913 3.60446 22.9362 3.66228 22.5895C4.21156 19.2914 6.45466 13.8095 11.4055 13.3412L23.1146 0.37869C23.2338 0.245599 23.3602 0.119177 23.4933 0L3.62961 0C2.66698 0 1.74377 0.382405 1.06309 1.06309C0.382405 1.74377 0 2.66698 0 3.62961L0 29.0369H20.5678V20.5678H29.0369V7.9428L18.1263 18.8534Z"
                          fill="white"
                        />
                        <path
                          d="M6.04956 22.988C6.04956 22.988 7.25943 15.7288 12.0989 15.7288C13.0615 15.7288 13.9847 16.1112 14.6654 16.7918C15.3461 17.4725 15.7285 18.3957 15.7285 19.3584C15.7285 20.321 15.3461 21.2442 14.6654 21.9249C13.9847 22.6056 13.0615 22.988 12.0989 22.988H6.04956Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1914_14498">
                          <rect width="29.0369" height="29.0369" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Effectively Communicate Your Brand Message</span>
                  </div>
              
                </AccordionHeader>
                <AccordionBody className="text-gray-300 text-base px-6 pb-6 pt-0" id="accordion-body-3">
                With our web design services, your website will stand out from the competition, leave a memorable impression, and effectively communicate your brand message. We combine creativity, user-centric design principles, and industry best practices to deliver websites that not only look visually stunning but also provide a seamless and engaging user experience.
                </AccordionBody>
              </Accordion>
            </div>
           
          
            <div className="relative group">
           
            </div>
          </div>
          {/* Right Column - Image */}
          <div className="hidden lg:block">
            <div >
              <img
                src="/images/what.png"
                alt="Creative studio workspace"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabsdesign;