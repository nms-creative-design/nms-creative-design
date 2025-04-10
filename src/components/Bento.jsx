import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const Bento = () => {
  const services = [
    {
      image: "/images/webdesign.png",
      title: "Web Design",
      description: "Web design services encompass the process of creating and designing visually appealing, functional, and user-friendly websites.",
      size: "col-span-1 md:col-span-2 row-span-1"
    },
    {
      image: "/images/uiux.png",
      title: "UX / UI Design",
      description: "Web design services encompass the process of creating and designing visually appealing, functional, and user-friendly websites.",
      size: "col-span-1 md:col-span-1 row-span-1"
    },
    {
      image: "/images/dev.png",
      title: "Web Development",
      description: "Web design services encompass the process of creating and designing visually appealing, functional, and user-friendly websites.",
      size: "col-span-1 md:col-span-1 row-span-1"
    },
    {
      image: "/images/banners.png",
      title: "Graphic Design",
      description: "Web design services encompass the process of creating and designing visually appealing, functional, and user-friendly websites.",
      size: "col-span-1 md:col-span-2 row-span-1"
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className={`${service.size} bg-[#111111] border border-gray-800 rounded-lg overflow-hidden hover:border-gray-600 transition-all duration-300`}
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="m-0 rounded-none h-56"
            >
              <div className="h-full">
                <img
                  src={service.image}
                  alt={`${service.title} Interface`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CardHeader>
            <CardBody className="p-6">
              <Typography variant="h3" className="text-white text-xl font-bold mb-3">
                {service.title}
              </Typography>
              <Typography className="text-gray-400 font-normal">
                {service.description}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Bento;