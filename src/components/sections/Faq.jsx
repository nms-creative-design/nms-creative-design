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

  const faqContent = [
    {
      question: "What services do you offer?",
      answer: "We offer a wide range of services including branding, graphic design, web design and development, illustration, animation, content creation, photography, and more. We provide comprehensive creative solutions tailored to meet your specific needs."
    },
    {
      question: "How long does it take to complete a project?",
      answer: "The project timeline depends on the scope and complexity of the project. We strive to provide accurate timelines during the initial discussions. Factors such as revisions, client feedback, and the size of the project can influence the duration. We are committed to delivering high-quality work within agreed-upon timelines."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing structure varies based on the services required and the scope of the project. We provide customized quotes tailored to your specific needs. During our initial discussions, we will provide you with a transparent breakdown of costs and any additional fees involved."
    },
    {
      question: "Can you handle rush projects with tight deadlines?",
      answer: "We strive to accommodate rush projects whenever possible, depending on our current workload and availability. Contact us with your specific requirements, and we will assess if we can meet your deadline and provide you with the best possible solution."
    },
    {
      question: "How do I start a project with you?",
      answer: "Starting a project with us is simple. Reach out to us via email or phone, and our team will guide you through the process. We'll discuss your requirements, goals, and timeline to ensure a clear understanding of your project's scope. From there, we'll provide you with a customized proposal and timeline."
    },
    {
      question: "How can I contact you for further inquiries or to get started?",
      answer: "You can reach us through our contact form on this website, email us directly at contact@example.com, or call us at (555) 123-4567. Our office hours are Monday to Friday, 9am to 5pm EST. We typically respond to all inquiries within 24 business hours."
    },
    {
      question: "Can I provide input and be involved in the creative process?",
      answer: "Absolutely! We value your input and encourage your active involvement in the creative process. Collaboration is key to ensuring that the final outcome aligns with your vision and goals. We will work closely with you, seeking your feedback and incorporating your ideas at various stages of the project."
    },
    {
      question: "Do you provide revisions or changes to the deliverables?",
      answer: "Yes, we offer a certain number of revisions as part of our service packages. We understand that feedback and adjustments may be necessary to achieve the desired result. We will work closely with you to ensure that your feedback is incorporated into the final deliverables."
    }
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
          <div className="lg:w-2/3 space-y-4">
            {faqContent.map((item, index) => (
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
                    {item.question}
                  </AccordionHeader>
                  <AccordionBody className="text-gray-300 text-base px-6 pb-6 pt-0">
                    {item.answer}
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