import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <div className="flex h-full w-full relative justify-center flex-col md:flex-row  md:justify-evenly items-center my-16">
      <Image
        src="/assets/helpdesk-secretary-listening-client-helpline-call-using-customer-service-network-headset-male-receptionist-working-call-center-telemarketing-assistance-close-up.jpg"
        fill
        alt=""
        className="absolute object-cover"
      />
      <div className="h-full w-full z-10    bg-[#0B2E4A]/80 py-24 pl-6">
        <div className="flex  items-center">
          <h1 className="md:text-2xl text-base text-left w-7/12 text-white font-bold mb-10">
            Is your business facing HR and operational challenges that are
            hindering growth and success? Look no further &mdash; we are your
            trusted partner in HR consulting and strategic solutions.!
          </h1>
        </div>
        <div>
          <Button className="bg-white text-base  font-medium text-[#0C4E1A] hover:bg-white/80">
            Contact Us Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
