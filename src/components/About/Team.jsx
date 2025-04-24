import React, { useState, useEffect } from 'react';
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from 'next/image';

// Team Member Card Component with advanced hover effects
function TeamMemberCard({ name, role, imageSrc, bio, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInView(true);
    }, index * 100);
    
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`relative group h-[350px] transform transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background and effects */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        {/* Standard overlay when not hovered, much darker only when hovered */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10 transition-opacity duration-500 ${isHovered ? 'opacity-95 bg-gradient-to-t from-black via-black/90 to-black/70' : 'opacity-60'}`}></div>
        <div className={`absolute inset-0 backdrop-blur-sm z-5 transition-opacity duration-500 ${isHovered ? 'opacity-50 bg-black/40' : 'opacity-0 bg-black/0'}`}></div>
        <Image
          src={imageSrc}
          alt={`${name} profile photo`}
          layout="fill"
          objectFit="cover"
          className={`transition-transform duration-1000 ease-out ${isHovered ? 'scale-110' : 'scale-100'}`}
          priority
        />
      </div>
      
      {/* Content Container */}
      <div className="absolute inset-x-0 bottom-0 z-20 p-6 flex flex-col h-full justify-end transform transition-transform duration-500">
        {/* Name and Role - Fixed position */}
        <div className={`transform transition-all duration-500 ${isHovered ? 'translate-y-[-30px]' : 'translate-y-0'}`}>
          <Typography variant="h4" className="text-white font-bold tracking-tight mb-1">
            {name}
          </Typography>
          <Typography className={`transition-all duration-500 ${isHovered ? 'text-white mb-6' : 'text-gray-300 mb-1'}`}>
            {role}
          </Typography>
        </div>
        
        {/* Bio - Animated on hover */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isHovered ? 'max-h-24 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
          <Typography className="text-white text-sm leading-relaxed">
            {bio}
          </Typography>
        </div>
      </div>
      
      {/* Highlight border that appears on hover */}
      <div className={`absolute inset-0 rounded-2xl border border-white/0 group-hover:border-white/50 transition-all duration-700 z-30`}></div>
    </div>
  );
}

const Team = () => {
  // Team members data with enhanced information
  const teamMembers = [
    {
      name: "Elmer",
      role: "Lead Designer",
      imageSrc: "/images/image1.png",
      bio: "Shapes killer interfaces with a hawk's eye for detail. Figma's their playground."
    },
    {
      name: "Marj",
      role: "Web Designer",
      imageSrc: "/images/image1.png",
      bio: "Bridges the gap with pixel precision and React magic."
    },
    {
      name: "Anji",
      role: "Web Designer",
      imageSrc: "/images/image1.png",
      bio: "Crafts vibes that click with users. Sketchpad's never far.."
    },
    {
      name: "Francis",
      role: "Web Designer",
      imageSrc: "/images/image1.png",
      bio: "Digs into user minds to craft flows that click. Whiteboard sketches are their vibe."
    },
    {
      name: "Daryll",
      role: "Web Designer",
      imageSrc: "/images/image1.png",
      bio: "Codes fluid layouts that dance on any screen. ReactJS and NextJS are their weapons."
    },
    {
      name: "Yverre",
      role: "Web Designer",
      imageSrc: "/images/image1.png",
      bio: "Turns ideas into clickable magic in record time. Figma's their sidekick."
    },
    {
      name: "Jimmy",
      role: "Web Designer",
      imageSrc: "/images/image1.png",
      bio: "Speaks both dev and design fluently—keeps the team synced with TypeScript finesse."
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(70,70,70,0.08),transparent_70%)]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-50"></div>
      
     
      
      {/* Main Content with adjusted spacing */}
      <div className="container mx-auto px-6 py-16 max-w-6xl z-10">
        <div className="flex flex-col gap-16">
          {/* Heading Section */}
          <div className="flex flex-col items-center text-center">
            <div className="space-y-6">
              <h2 className="font-bold tracking-tight leading-tight">
                <span className="bg-gradient-to-r from-gray-500 via-white to-gray-200 text-transparent bg-clip-text">
                  Our Team Values
                </span>
              </h2>
              <p className="text-gray-300 max-w-xl text-lg font-light leading-relaxed">
                These team values serve as the foundation of our creative studio, shaping our culture, guiding our work, and driving our success in delivering exceptional creative experiences.
              </p>
            </div>
          </div>
          
          {/* Team Members Grid with reduced gap */}
          <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  role={member.role}
                  imageSrc={member.imageSrc}
                  bio={member.bio}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Additional CTA section - Full width and reduced padding */}
          <div className="w-full">
            <div className="w-full px-6 py-8 border border-white/20 rounded-2xl backdrop-blur-sm bg-black/20 hover:bg-black/30 transition-all duration-500 text-center">
              <Typography variant="h5" className="text-white mb-4">
                Join Our Creative Team
              </Typography>
              <Typography className="text-gray-400 mb-6">
                We're always looking for talented people to join our team. Check out our open positions.
              </Typography>
              <Button 
                variant="outlined" 
                className="rounded-full py-3 px-6 text-white border border-white/20 hover:bg-white/5 transition-all duration-300"
              >
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;