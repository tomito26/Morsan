import React from "react";
import Image from "next/image";

const OurValuesSection = () => {
  const values = [
    {
      title: "Integrity",
      description:
        "Upholding honesty and transparency in all client interactions.",
      icon: "/assets/Business-Deal-Handshake-1--Streamline-Ultimate.png",
    },
    {
      title: "Excellence:",
      description: "Delivering high-quality, results-oriented solutions.",
      icon: "/assets/Award-Ribbon-Star--Streamline-Ultimate.png",
    },
    {
      title: "Innovation",
      description:
        "Adapting to the evolving HR landscape with forward-thinking strategies.",
      icon: "/assets/Study-Light-Idea--Streamline-Ultimate.png",
    },
    {
      title: "Collaboration",
      description:
        "Partnering with clients to build meaningful, lasting relationships.",
      icon: "/assets/Team-Meeting--Streamline-Ultimate.png",
    },
  ];
  return (
    <div className="md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 py-20">
      <h1 className="text-[#0B2E4A] font-bold uppercase text-sm text-center">
        Our Core values
      </h1>
      <h2 className="text-2xl md:text-5xl font-bold text-monochrome my-4 text-center">
        Our Guiding Principles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {values.map((value) => (
          <div key={value.title} className="border p-4 rounded-md">
            <div className="flex justify-center">
              <div className="h-9 w-9 relative">
                <Image src={value.icon} alt={value.title} className="object-cover object-center absolute" fill/>
              </div>
            </div>
            <div className="mt-3">
              <h3 className="text-monochrome text-lg font-bold text-center">{value.title}</h3>
              <p className="text-base text-center">{value.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValuesSection;
