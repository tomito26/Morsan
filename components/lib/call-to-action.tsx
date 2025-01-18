import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <div className="flex h-full w-full relative justify-center flex-col md:flex-row  md:justify-evenly items-center mb-16">
      <Image
        src="/assets/helpdesk-secretary-listening-client-helpline-call-using-customer-service-network-headset-male-receptionist-working-call-center-telemarketing-assistance-close-up.jpg"
        fill
        alt=""
        className="absolute object-cover"
      />
      <div className="h-full w-full z-10 flex justify-center items-center flex-col  bg-[#0B2E4A]/80 py-24 px-4 md:px-[40px] lg:px-[60px] xl:px-[60px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px]">
        <h1 className="md:text-3xl text-base text-center text-white font-bold mb-10">
        Is your business facing HR and operational challenges that are hindering growth and success? Look no further – we are your trusted partner in HR consulting and strategic solutions.!
        </h1>
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
