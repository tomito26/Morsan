import { our_benefits } from "@/lib/constants";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#0B2E4A] flex-col items-center md:flex-row-reverse flex w-full gap-10 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 py-24">
      <div className="flex-1">
        <h1 className="text-white uppercase font-bold text-sm">
          Why Choose Us
        </h1>
        <h2 className="text-2xl md:text-5xl font-bold text-white mt-4 mb-5">
          Exceptional HR Solutions, Tailored for Your Success
        </h2>
        <p className="text-base text-white mb-6">
          We are dedicated to delivering personalized human resource solutions
          that empower businesses to excel. With a focus on efficiency,
          innovation, and measurable results, we ensure your organization
          attracts, retains, and develops top talent while optimizing HR
          operations to meet your unique needs.
        </p>
        <div className="h-[320px] w-full relative shrink-0 rounded-md">
          <Image
            src="/assets/Black-Team-687x458-1.jpg"
            fill
            alt="Why choose us"
            className="absolute object-cover shrink-0 rounded-md"
          />
        </div>
      </div>

      <div className="flex-1 ">
        <div className="flex-1">
          <div className="divide-y">
            {our_benefits.map((benefit) => (
              <div key={benefit.title} className="py-4">
                <div className="flex md:flex-row flex-col items-center gap-4">
                  <div className="flex justify-center">
                    <div className="h-12 w-12 relative shrink-0">
                      <Image
                        src={benefit.icon}
                        alt={benefit.title}
                        fill
                        className="absolute object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg text-white md:text-left text-center  font-bold">
                      {benefit.title}
                    </h3>
                    <p className="text-white md:text-left text-center  text-base ">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
