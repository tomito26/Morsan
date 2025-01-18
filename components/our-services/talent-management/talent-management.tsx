import HeroSection from "@/components/lib/hero-section";
import React from "react";
import Image from "next/image";
import CallToAction from "@/components/lib/call-to-action";

const TalentManagement = () => {
  return (
    <div>
      <HeroSection
        hero={{
          image: "/assets/Outsourced-HR.jpg",
          title: "Talent Management",
          description: `Home > Talent Management`,
        }}
        callToAction={false}
        className="h-[64vh]"
      />
      <div className="md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 pt-16 md:pt-20 pb-24">
        <div className="flex flex-col-reverse md:flex-row gap-6 items-center mb-8">
          <div className="md:h-[360px] h-[240px] w-full md:w-[400px] relative md:flex-1">
            <Image
              src="/assets/employer-of-record.webp"
              fill
              alt="recruitment"
              className="object-cover object-center absolute"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-monochrome font-bold text-2xl md:text-5xl">
              Employer of Records
            </h2>
            <p className="text-base mt-3">
              We offer Employer of Record services to simplify the
              complexities of global employment. As your EOR, we take on the
              legal responsibility for employing your staff, including handling
              employment contracts, compliance with labor laws, tax filings, and
              benefits administration. This allows your organization to focus on
              operations and growth while ensuring full compliance in the
              countries where you operate. Whether you are expanding into new
              markets or managing remote teams, our EOR service provides a
              seamless and compliant solution.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse gap-6 items-center mb-8">
          <div className="md:h-[360px] h-[240px] w-full md:w-[400px] relative md:flex-1">
            <Image
              src="/assets/istock-90868745-large-spxmmo.jpeg"
              fill
              alt="recruitment"
              className="object-cover object-center absolute"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-monochrome font-bold text-2xl md:text-5xl">
              Labour Outsourcing
            </h2>
            <p className="text-base mt-3">
              With our Employee Outsourcing services, your
              organization can enjoy flexibility and efficiency in managing your
              workforce. We handle the recruitment, onboarding, and management
              of outsourced employees while you focus on your core business
              activities. This service is ideal for short-term projects,
              seasonal workloads, or roles requiring specialized skills. By
              outsourcing employees through MonsarHR, you gain access to a
              skilled workforce without the administrative burden of hiring and
              managing them directly.
            </p>
          </div>
        </div>
        <div className="flex gap-6 flex-col-reverse md:flex-row items-center mb-8">
          <div className="md:h-[360px] h-[240px] w-full md:w-[400px] relative md:flex-1">
            <Image
              src="/assets/portfolio-3.jpg"
              fill
              alt="recruitment"
              className="object-cover object-center absolute"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-monochrome font-bold text-2xl md:text-5xl">
              Payroll Outsourcing
            </h2>
            <p className="text-base mt-3">
              Managing payroll can be a time-consuming and complex process. Our
              Payroll Outsourcing services provide a hassle-free solution,
              ensuring accurate and timely payroll processing while maintaining
              compliance with tax regulations and labor laws. Our services
              include salary disbursement, tax calculations, deductions,
              benefits management, and generating pay slips. By outsourcing your
              payroll to us, you can reduce administrative workload, avoid
              costly errors, and ensure your employees are paid accurately and
              on time.
            </p>
          </div>
        </div>
      </div>
      <CallToAction/>
    </div>
  );
};

export default TalentManagement;
