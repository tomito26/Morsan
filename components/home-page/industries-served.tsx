import React from "react";
import Image from "next/image";

const IndustriesServed = () => {
  const industries = [
    {
      name: "Manufacturing Industry",
      description: "Food products",
      image:
        "/assets/factory-workshop-interior-machines-glass-production-background.jpg",
    },
    {
      name: "Retail industry",
      description: "Gifting and home improvements",
      image: "/assets/Retail-Sector.jpg",
    },
    {
      name: "Healthcare industry",
      description: "Hospitals and pharmaceuticals",
      image:
        "/assets/caucasian-teenboy-as-doctor-consulting-giving-recommendation-treating-little-doctor-discussing-studying-with-older-colleague-concept-childhood-human-emotions-health-medicine.jpg",
    },
    {
      name: "Food and beverage industry",
      description: "Restaurants",
      image: "/assets/Retail-Sector.jpg",
    },
    {
      name: "Financial industry",
      description: "Sacco",
      image: "/assets/stack-money-coin-with-trading-graph.jpg",
    },
    {
      name: "Service industry",
      description: "Digital and creative sector, cosmetic sector",
      image:
        "/assets/african-american-helpline-employee-working-call-center-reception-with-multiple-monitors-male-operator-using-telecommunication-help-clients-customer-service-support-remote-network.jpg",
    },
  ];
  return (
    <div className="md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 py-16">
      <h1 className="text-sm text-[#0B2E4A] uppercase font-bold text-center">
        Industries We Serve
      </h1>
      <h2 className="text-5xl font-bold text-monochrome text-center">
        Diverse Solutions for Every Sector
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full mt-6">
        {industries.map((industry) => (
          <div className="h-[300px] w-full relative rounded-md" key={industry.name}>
            <Image
              src={industry.image}
              alt={industry.name}
              fill
              className="absolute object-cover rounded-md"
            />
            <div className="h-full flex pb-6 pl-6 items-end w-full bg-gradient-to-b absolute from-transparent to-black/80 hover:to-[#0B2E4A]/80  z-10">
            <div>
              <h3 className="text-3xl font-bold text-white">{industry.name}</h3>
              <p className="text-white text-base">{industry.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesServed;
