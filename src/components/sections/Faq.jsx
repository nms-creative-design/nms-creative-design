"use client";
import React from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-5 w-5 transition-transform ${open === id ? "rotate-45" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
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
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          {/* Left Content */}
          <div className="md:w-1/3 space-y-6">
            <h2 className="text-4xl font-bold text-left leading-tight">
              <span className="bg-gradient-to-r from-gray-500 via-white to-gray-300 bg-clip-text text-transparent">
                Frequently<br />Asked<br />Questions
              </span>
            </h2>
            <button className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium shadow-md hover:scale-105 transition">
              Contact Us
            </button>
          </div>

          {/* Right Content */}
          <div className="md:w-2/3 space-y-4">
            {faqs.map((item, index) => (
              <Accordion
                key={index}
                open={open === index + 1}
                icon={<Icon id={index + 1} open={open} />}
                className="border border-white/10 rounded-xl text-white bg-gradient-to-b from-white/5 to-white/10"
              >
                <AccordionHeader onClick={() => handleOpen(index + 1)} className="text-white text-left">
                  {item}
                </AccordionHeader>
                <AccordionBody className="text-gray-300 text-sm">
                  {/* Replace this with actual answers */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac erat at dui gravida feugiat.
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
