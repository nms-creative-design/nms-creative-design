import FooterSection from '@/components/FooterSection';
import OtherHeroSection from '@/components/OtherHeroSection';
import { StickyNavbar } from '@/components/StickyNavbar';
import React, { useState } from 'react';
import { Card, Typography, Input, Textarea, Button } from "@material-tailwind/react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState(""); // For success/error messages

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // EmailJS credentials
    const serviceId = "service_uip0twq"; // Your Service ID
    const templateId = "template_vm9y61p"; // Replace with your Template ID
    const publicKey = "i_-XA358n1jP0znmp"; // Replace with your Public Key

    // Send the form data using EmailJS
    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        subject: formData.subject,
        from_email: formData.email,
        phone: formData.phone,
        message: formData.message,
      },
      publicKey
    )
      .then(() => {
        setStatus("Email sent successfully!");
        setFormData({ name: "", subject: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        setStatus("Failed to send email. Please try again.");
        console.error("EmailJS error:", error);
      });
  };

  const contentData = [
    {
      section: 'hero',
      data: {
        title: "Contact Us",
        description: "Transform your digital footprint instantly with Creative X. Our cutting-edge solutions drive engagement, boost conversions, and propel your brand to the top of search results. Stop disappearing online—start commanding attention today.",
        images: {
          hero: {
            src:'/assets/pages/about/logo-black.webp',
            alt: 'Contact Hero Image',
            height: '240',
            width: '240',
          }
        }
        
      }
    }
  ]

  const heroContent = contentData.find((item) => item.section === "hero")?.data || {};

  const inputProps = {
    size: "lg",
    className: "!border-0 !border-b-2 !border-gray-600 focus:!border-b-red-500 !text-white bg-transparent hover:bg-white/5 transition-all duration-300 rounded-md",
    labelProps: { className: "before:content-none after:content-none" },
    onChange: handleChange,
  };

  const labelClass = "text-white font-medium mb-2 transition-all duration-500 group-hover:text-shadow";
  const fields = [
    { label: "Your Name", name: "name", placeholder: "Your Name" },
    { label: "Subject", name: "subject", placeholder: "Subject" },
    { label: "Your Email", name: "email", placeholder: "name@mail.com", type: "email" },
    { label: "Phone Number", name: "phone", placeholder: "Phone Number", type: "tel" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <StickyNavbar />
      <OtherHeroSection 
        content={heroContent}
      />
      
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Card className="bg-white/5 border border-gray-700 rounded-lg transition-all duration-300 relative overflow-hidden group backdrop-blur-md shadow-lg p-6 sm:p-10">
            <div className="absolute -top-16 -right-16 w-96 h-96 bg-[radial-gradient(circle_at_top_right,_rgba(239,68,68,0.35),_transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-2xl pointer-events-none z-0" />
            <div className="absolute inset-0 border border-transparent group-hover:border-red-500/40 group-hover:border-opacity-30 rounded-lg transition-all duration-300 z-0" />


            <form className="mb-2 w-full mx-auto relative z-10" onSubmit={handleSubmit}>
              <div className="mb-1 flex flex-col gap-6 sm:gap-8">
                {/* Two-column grid for Name, Subject, Email, Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {fields.map((field) => (
                    <div key={field.name}>
                      <Typography variant="h6" className={labelClass}>
                        {field.label}
                      </Typography>
                      <Input
                        {...inputProps}
                        type={field.type || "text"}
                        placeholder={field.placeholder}
                        name={field.name}
                        value={formData[field.name]}
                      />
                    </div>
                  ))}
                </div>

                {/* Message Field */}
                <div>
                  <Typography variant="h6" className={labelClass}>
                    Message
                  </Typography>
                  <Textarea
                    size="lg"
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="!border-0 !border-b-2 !border-gray-600 focus:!border-b-red-500 !text-white bg-transparent hover:bg-white/5 transition-all duration-300 rounded-md"
                    labelProps={{ className: "before:content-none after:content-none" }}
                  />
                </div>
              </div>

              <Button 
                className="mt-6 bg-white hover:bg-gray-200 text-black font-semibold rounded-full transform hover:scale-105 transition-all duration-300" 
                fullWidth 
                type="submit"
              >
                Send
              </Button>

              {/* Display status message */}
              {status && (
                <Typography className="mt-4 text-center text-gray-300 relative z-10">
                  {status}
                </Typography>
              )}
            </form>
          </Card>

          {/* Contact Information and Map */}
          <div>
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-red-500 rounded-full p-2 shadow-md">
                <MapPinIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <Typography variant="h5" className="mb-1 font-medium">Location</Typography>
                <Typography className="text-gray-300">
                  BCEZ-PEZA, Loakan Rd, Baguio, 2600 Benguet
                </Typography>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="bg-red-500 rounded-full p-2 shadow-md">
                <EnvelopeIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <Typography variant="h5" className="mb-1 font-medium">Email</Typography>
                <Typography 
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                  onClick={() => window.location.href = 'mailto:mailer@newmediaservices.com'}
                >
                  mailer@newmediaservices.com
                </Typography>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden h-80 shadow-lg border border-gray-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7655.669549916911!2d120.616419!3d16.382377!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a1386eb2eea5%3A0x5ce4c5a4353a66e4!2sNew%20Media%20Services%20-%20Philippines!5e0!3m2!1sen!2sph!4v1745985530472!5m2!1sen!2sph"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default Contact;