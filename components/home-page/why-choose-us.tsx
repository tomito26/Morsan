import { Check } from "lucide-react";
import React from "react";
import Image from "next/image";
import { our_benefits } from "@/lib/constants";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#0B2E4A] flex-col-reverse md:flex-row-reverse flex w-full gap-10">
      <div className="h-[300px] md:h-auto w-full md:w-1/2 relative shrink-0">
        <Image
          src="/assets/successful-business-team-posing-office-hall.jpg"
          fill
          alt="Why choose us"
          className="absolute object-cover shrink-0"
        />
      </div>
      <div className="flex-1 py-16 xl:pl-[100px] 2xl:pl-[160px] 3xl:pl-[200px] 4xl:pl[240px] 5xl:pl-[320px] px-4">
        <div className="flex-1">
          <h1 className="text-white uppercase font-bold text-sm">
            Why Choose Us
          </h1>
          <h2 className="text-2xl md:text-5xl font-bold text-white mt-4 mb-5">
            Exceptional HR Solutions, Tailored for Your Success
          </h2>
          <div>
            {our_benefits.map((benefit) => (
              <div key={benefit.title} className="mb-3">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 stroke-white" />
                  <h3 className="text-lg text-white font-bold">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-white text-base ml-8">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
