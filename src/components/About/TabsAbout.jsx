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

const TabsAbout = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-left mb-10">
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
                    <span>Unparalleled Creativity</span>
                  </div>
                 
                </AccordionHeader>
                <AccordionBody className="text-gray-300 text-base px-6 pb-6 pt-0" id="accordion-body-1">
                  Our team is driven by a relentless passion for creativity. We go above and beyond to deliver unique and innovative solutions that set your brand apart from the competition.
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
                    <span>Collaboration and Partnership</span>
                  </div>
               
                </AccordionHeader>
                <AccordionBody className="text-gray-300 text-base px-6 pb-6 pt-0" id="accordion-body-2">
                  We believe in fostering strong relationships with our clients. We value your input and actively involve you in the creative process. We see ourselves as your partners, working closely with you to understand your vision, goals, and preferences, ensuring that the end result exceeds your expectations.
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
                    <span>Dedication to Customer Satisfaction</span>
                  </div>
              
                </AccordionHeader>
                <AccordionBody className="text-gray-300 text-base px-6 pb-6 pt-0" id="accordion-body-3">
                  Your satisfaction is our top priority. We are dedicated to ensuring that you are delighted with the final outcome. Throughout the process, we maintain open lines of communication, listen to your feedback, and make necessary adjustments to guarantee your satisfaction.
                </AccordionBody>
              </Accordion>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/20 to-white/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Accordion
                open={open === 4}
                className="relative border border-white/20 rounded-xl backdrop-blur-sm bg-black/80 shadow-lg hover:shadow-xl transition duration-300"
              >
                <AccordionHeader
                  onClick={() => handleOpen(4)}
                  className="text-white hover:text-white text-lg font-medium text-left px-6 py-5 flex items-center justify-between border-b-0 transition-colors"
                  aria-expanded={open === 4}
                  aria-controls="accordion-body-4"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.3088 12.0989H15.7285C17.4395 12.0989 18.295 12.0989 18.8266 12.6304C19.3581 13.162 19.3581 14.0175 19.3581 15.7285V22.9877C19.3581 21.2767 19.3581 20.4212 19.8897 19.8897C20.4212 19.3581 21.2767 19.3581 22.9877 19.3581C24.6987 19.3581 25.5543 19.3581 26.0858 19.8897C26.6173 20.4212 26.6173 21.2767 26.6173 22.9877V26.6173H19.3581H9.67915H2.41992C2.41992 24.9063 2.41992 24.0508 2.95147 23.5193C3.48301 22.9877 4.33852 22.9877 6.04954 22.9877C7.76055 22.9877 8.61606 22.9877 9.1476 23.5193C9.67915 24.0508 9.67915 24.9063 9.67915 26.6173V15.7285C9.67915 14.0175 9.67915 13.162 10.2107 12.6304C10.7422 12.0989 11.5977 12.0989 13.3088 12.0989Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.4853 3.65703C13.9451 2.83229 14.175 2.41992 14.5186 2.41992C14.8623 2.41992 15.0922 2.83229 15.5519 3.65703L15.6709 3.8704C15.8015 4.10476 15.8668 4.22195 15.9687 4.29927C16.0705 4.37658 16.1974 4.40528 16.4511 4.46269L16.6821 4.51495C17.5748 4.71694 18.0212 4.81794 18.1274 5.15946C18.2336 5.50097 17.9293 5.85683 17.3207 6.56854L17.1632 6.75267C16.9902 6.95492 16.9038 7.05604 16.8649 7.18115C16.826 7.30625 16.839 7.44117 16.8652 7.71101L16.889 7.95668C16.981 8.90626 17.027 9.38105 16.749 9.59212C16.4709 9.80319 16.053 9.61075 15.2171 9.22587L15.0008 9.1263C14.7633 9.01693 14.6445 8.96225 14.5186 8.96225C14.3927 8.96225 14.274 9.01693 14.0364 9.1263L13.8202 9.22587C12.9843 9.61075 12.5663 9.80319 12.2883 9.59212C12.0103 9.38105 12.0563 8.90626 12.1483 7.95668L12.1721 7.71101C12.1982 7.44117 12.2113 7.30625 12.1724 7.18115C12.1335 7.05604 12.047 6.95492 11.8741 6.75267L11.7166 6.56854C11.108 5.85683 10.8037 5.50097 10.9099 5.15946C11.0161 4.81794 11.4624 4.71694 12.3552 4.51495L12.5862 4.46269C12.8399 4.40528 12.9667 4.37658 13.0686 4.29927C13.1704 4.22195 13.2358 4.10477 13.3664 3.8704L13.4853 3.65703Z"
                        fill="white"
                      />
                    </svg>
                    <span>Versatility and Range</span>
                  </div>
              
                </AccordionHeader>
                <AccordionBody className="text-gray-300 text-base px-6 pb-6 pt-0" id="accordion-body-4">
                  Our creative studio offers a wide range of services, catering to various industries and sectors. Whether you need branding, web design, graphic design, or other creative solutions, we have the expertise and versatility to deliver outstanding results across different mediums.
                </AccordionBody>
              </Accordion>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/20 to-white/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Accordion
                open={open === 5}
                className="relative border border-white/20 rounded-xl backdrop-blur-sm bg-black/80 shadow-lg hover:shadow-xl transition duration-300"
              >
                <AccordionHeader
                  onClick={() => handleOpen(5)}
                  className="text-white hover:text-white text-lg font-medium text-left px-6 py-5 flex items-center justify-between border-b-0 transition-colors"
                  aria-expanded={open === 5}
                  aria-controls="accordion-body-5"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.5235 19.6787L25.3771 14.7427C25.5903 13.5099 24.6422 12.3822 23.3925 12.3822H17.124C16.5028 12.3822 16.0297 11.8246 16.1302 11.2108L16.932 6.31743C17.0622 5.52245 17.025 4.709 16.8228 3.92927C16.6552 3.28333 16.1568 2.76467 15.5014 2.55413L15.326 2.49778C14.9299 2.37053 14.4976 2.40015 14.1242 2.5801C13.7131 2.77818 13.4124 3.13947 13.3009 3.56916L12.7254 5.78789C12.5423 6.49384 12.2755 7.17526 11.9316 7.81911C11.4291 8.75985 10.6521 9.51275 9.84446 10.2087L8.10377 11.7087C7.61298 12.1316 7.35523 12.765 7.41108 13.4109L8.3937 24.7748C8.48383 25.8172 9.3553 26.6173 10.4004 26.6173H16.0246C20.2365 26.6173 23.8311 23.6827 24.5235 19.6787Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.59045 11.4757C4.07593 11.4548 4.49174 11.82 4.5336 12.3041L5.70911 25.8988C5.78462 26.7721 5.09676 27.5248 4.21842 27.5248C3.39109 27.5248 2.72217 26.8536 2.72217 26.0279V12.3823C2.72217 11.8963 3.10497 11.4967 3.59045 11.4757Z"
                        fill="white"
                      />
                    </svg>
                    <span>Customized Solutions</span>
                  </div>
                
                </AccordionHeader>
                <AccordionBody className="text-gray-300 text-base px-6 pb-6 pt-0" id="accordion-body-5">
                  We understand that every client and project is unique. That's why we tailor our services to your specific needs. Our team takes the time to understand your objectives, target audience, and brand identity, creating customized solutions that align perfectly with your goals.
                </AccordionBody>
              </Accordion>
            </div>
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-white/20 to-white/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
              <Accordion
                open={open === 6}
                className="relative border border-white/20 rounded-xl backdrop-blur-sm bg-black/80 shadow-lg hover:shadow-xl transition duration-300"
              >
                <AccordionHeader
                  onClick={() => handleOpen(6)}
                  className="text-white hover:text-white text-lg font-medium text-left px-6 py-5 flex items-center justify-between border-b-0 transition-colors"
                  aria-expanded={open === 6}
                  aria-controls="accordion-body-6"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.2273 25.9086C15.936 26.6173 17.0767 26.6173 19.358 26.6173H21.7778C24.0591 26.6173 25.1998 26.6173 25.9085 25.9086C26.6173 25.1999 26.6173 24.0592 26.6173 21.7779V7.25941C26.6173 4.97807 26.6173 3.83737 25.9085 3.12865C25.1998 2.41992 24.0591 2.41992 21.7778 2.41992H19.358C17.0767 2.41992 15.936 2.41992 15.2273 3.12865C14.6195 3.73643 14.5329 4.66189 14.5206 6.352L16.9383 6.352C17.4394 6.352 17.8457 6.75826 17.8457 7.25941C17.8457 7.76055 17.4394 8.16681 16.9383 8.16681H14.5186V9.98162H18.1482C18.6493 9.98162 19.0556 10.3879 19.0556 10.889C19.0556 11.3902 18.6493 11.7964 18.1482 11.7964H14.5186V13.6112H16.9383C17.4394 13.6112 17.8457 14.0175 17.8457 14.5186C17.8457 15.0198 17.4394 15.426 16.9383 15.426H14.5186V17.2408L18.1482 17.2408C18.6493 17.2408 19.0556 17.6471 19.0556 18.1482C19.0556 18.6494 18.6493 19.0557 18.1482 19.0557L14.5186 19.0556V20.8705H16.9383C17.4394 20.8705 17.8457 21.2767 17.8457 21.7779C17.8457 22.279 17.4394 22.6853 16.9383 22.6853H14.5206C14.5329 24.3754 14.6195 25.3008 15.2273 25.9086Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.67915 18.3823L9.67915 8.72839C8.74877 9.11191 7.52153 9.44087 6.04976 9.44087C4.57775 9.44087 3.35036 9.11181 2.41992 8.7282L2.41992 18.3823C2.41992 19.1356 2.41992 19.5124 2.46562 19.882C2.51952 20.3181 2.62076 20.747 2.76756 21.1611C2.892 21.5121 3.06046 21.8491 3.39738 22.5229L5.17407 26.0763C5.33987 26.4079 5.67879 26.6173 6.04954 26.6173C6.42028 26.6173 6.7592 26.4079 6.92501 26.0763L8.70169 22.5229C9.03861 21.8491 9.20707 21.5121 9.33151 21.1611C9.47831 20.747 9.57956 20.3181 9.63346 19.882C9.67915 19.5124 9.67915 19.1357 9.67915 18.3823Z"
                        fill="white"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.67915 6.04954C9.67915 4.04496 8.05411 2.41992 6.04954 2.41992C4.04496 2.41992 2.41992 4.04496 2.41992 6.04954L2.41992 7.2074C2.45179 7.22341 2.48428 7.23946 2.5174 7.25552C3.34123 7.65495 4.5434 8.05637 6.04976 8.05638C7.55611 8.05637 8.75828 7.65495 9.58211 7.25552C9.61508 7.23954 9.64742 7.22356 9.67915 7.20762V6.04954Z"
                        fill="white"
                      />
                    </svg>
                    <span>Attention to Detail</span>
                  </div>
              
                </AccordionHeader>
                <AccordionBody className="text-gray-300 text-base px-6 pb-6 pt-0" id="accordion-body-6">
                  We pay meticulous attention to every aspect of your project. From the initial concept to the final execution, we focus on the finer details to ensure precision and excellence. Our commitment to delivering exceptional quality shines through in our work.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
          {/* Right Column - Image */}
          <div className="hidden lg:block">
            <div >
              <img
                src="/images/content.png"
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

export default TabsAbout;