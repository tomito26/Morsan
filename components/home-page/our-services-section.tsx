import React from "react";
import Image from "next/image";
import Link from "next/link";
import { our_services } from "@/lib/constants";

const OurServicesSection = () => {

  return (
    <div className="bg-[#0B2E4A]/10 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 pt-16 pb-20">
      <div className="flex justify-center">
        <div className="w-full md:w-8/12">
          <h1 className="text-sm uppercase font-bold text-[#0B2E4A] text-center mb-4">
            our services
          </h1>
          <h2 className="md:text-5xl text-2xl font-bold text-monochrome text-center">
            Streamlined and Comprehensive HR Services for Businesses
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {our_services.map((service) => (
          <Link href={service.link} key={service.title}>
            <div className="bg-white p-5 h-[300px] rounded-md hover:bg-[#0B2E4A] group cursor-pointer">
              <div className="flex justify-center">
                <div className="h-16 w-16 relative">
                  <Image
                    src={service.image}
                    alt={service.image}
                    fill
                    className="object-cover absolute"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-monochrome text-center my-4 group-hover:text-white">
                  {service.title}
                </h2>
                <p className="text-base group-hover:text-white">
                  {service.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurServicesSection;
