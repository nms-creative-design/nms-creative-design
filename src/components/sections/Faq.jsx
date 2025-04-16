"use client";
import React from "react";
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

export default function Faq() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const faqs = [
    "What services do you offer?",
    "How long does it take to complete a project?",
    "What is your pricing structure?",
    "Can you handle rush projects with tight deadlines?",
    "How do I start a project with you?",
    "How can I contact you for further inquiries or to get started?",
    "Can I provide input and be involved in the creative process?",
    "Do you provide revisions or changes to the deliverables?"
  ];

  return (
    <section className="bg-black py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Left Content */}
          <div className="lg:w-1/3 space-y-8 sticky top-24 self-start">
            <div className="relative">
              <div className="absolute -inset-1 blur-sm rounded-lg"></div>
              <h2 className="relative text-5xl font-bold text-left leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                  Frequently<br />Asked<br />Questions
                </span>
              </h2>
            </div>
            <p className="text-gray-300 text-lg">
              Everything you need to know about our services and process.
            </p>
            <button className="bg-white text-black hover:bg-gray-100 transition-colors py-3 px-8 rounded-full font-medium">
              Start a Project
            </button>
          </div>

          {/* Right Content */}
          <div className="lg:w-2/3 space-y-6">
            {faqs.map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-red-600/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <Accordion
                  open={open === index + 1}
                  icon={<Icon id={index + 1} open={open} />}
                  className="relative border border-white/20 rounded-xl backdrop-blur-sm bg-black/80 shadow-lg hover:shadow-xl transition duration-300"
                >
                  <AccordionHeader 
                    onClick={() => handleOpen(index + 1)} 
                    className="text-white hover:text-red-500 text-lg font-medium text-left px-6 py-5 flex items-center justify-between border-b-0 transition-colors"
                  >
                    {item}
                  </AccordionHeader>
                  <AccordionBody className="text-gray-300 text-base px-6 pb-6 pt-0">
                    {/* Replace this with actual answers */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dui gravida feugiat. 
                    Mauris eget dignissim enim, ut tempor dolor. Cras ullamcorper lacus vitae eros lobortis commodo.
                  </AccordionBody>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}