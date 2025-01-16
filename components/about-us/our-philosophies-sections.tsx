import React from "react";
import Image from "next/image";

const OurPhilosophiesSections = () => {
  return (
    <div className="md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 py-20 bg-[#0B2E4A]">
      <div className="flex items-center flex-col md:flex-row ">
        <div className="flex-1 bg-white h-[320px] flex justify-center items-center flex-col py-6 md:py-6">
          <h2 className="text-2xl font-bold text-monochrome text-center mb-8 underline underline-offset-4 decoration-[#0B2E4A]/70 pt-6">
            Our Mission
          </h2>
          <p className="text-base text-center px-10">
            To empower businesses by providing strategic HR solutions that
            foster productivity, efficiency, and sustainable growth.
          </p>
        </div>
        <div className="h-[320px] w-full md:w-[400px] shrink-0 relative md:flex-1">
          <Image
            src="/assets/app-woman-white-solution-closeup-two.jpg"
            alt="our mision"
            className="object-cover absolute shrink-0"
            fill
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse items-center">
        <div className="flex-1 bg-white h-[320px] flex justify-center items-center flex-col py-6 md:py-0">
          <h2 className="text-2xl font-bold text-monochrome text-center mb-8 underline underline-offset-4 decoration-[#0B2E4A]/70 ">
            Our Vision
          </h2>
          <p className="text-base text-center px-10">
            To be the premier HR consultancy firm, transforming workplaces into
            thriving ecosystems of innovation, growth, and employee
            satisfaction.
          </p>
        </div>
        <div className="h-[320px] w-full md:w-[400px] shrink-0 relative md:flex-1">
          <Image
            src="/assets/executive-with-hand-drawn-light-bulb.jpg"
            alt="our mision"
            className="object-cover absolute shrink-0"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default OurPhilosophiesSections;
