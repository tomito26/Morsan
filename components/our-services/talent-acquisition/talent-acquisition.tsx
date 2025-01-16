import HeroSection from "@/components/lib/hero-section";
import React from "react";
import Image from "next/image";

const TalentAcquisition = () => {
  return (
    <div>
      <HeroSection
        hero={{
          image: "/assets/talent-acquisition-solutions_banner.jpg",
          title: "Talent Acquisition",
          description: `Home > Talent Acquisition`,
        }}
        callToAction={false}
        className="h-[64vh]"
      />
      <div className="md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 pt-16 md:pt-20 pb-24">
        <div className="flex flex-col-reverse md:flex-row gap-6 items-center mb-8">
          <div className="md:h-[360px] h-[240px] md:w-[400px] w-full relative md:flex-1">
            <Image
              src="/assets/benefits-of-hr-outsourcing-genesis-hr.jpg"
              fill
              alt="recruitment"
              className="object-cover object-center absolute"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-monochrome font-bold text-2xl md:text-5xl">Recruitment</h2>
            <p className="text-base mt-3">
              Our recruitment services are designed to help organizations find
              the right talent for their teams. We take a comprehensive
              approach, starting with understanding your business needs and job
              requirements. Using advanced sourcing techniques and an extensive
              network, we identify a diverse pool of qualified candidates. Our
              thorough screening and shortlisting process ensures that only the
              most suitable individuals are presented to you. From scheduling
              interviews to negotiating offers, we provide end-to-end support,
              saving you time and resources while ensuring you hire top-quality
              talent.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse gap-6 items-center mb-8">
          <div className="md:h-[360px] h-[240px] md:w-[400px] w-full relative md:flex-1">
            <Image
              src="/assets/istock-90868745-large-spxmmo.jpeg"
              fill
              alt="recruitment"
              className="object-cover object-center absolute"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-monochrome font-bold text-2xl md:text-5xl">
              Executive Search
            </h2>
            <p className="text-base mt-3">
              For senior-level and leadership roles, MonsarHR offers an
              exclusive executive search service tailored to meet the needs of
              organizations looking for exceptional leaders. We conduct a
              confidential and targeted search to identify top-tier executives
              who bring the experience, vision, and leadership required to drive
              your business forward. Through in-depth market research and
              behavioral assessments, we ensure candidates are not only highly
              qualified but also aligned with your company&apos;s culture and
              long-term goals. Our seamless process ensures you secure the best
              talent for critical roles with minimal effortI
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse  md:flex-row gap-6 items-center mb-8">
          <div className="md:h-[360px] h-[240px] md:w-[400px] w-full relative md:flex-1">
            <Image
              src="/assets/Background-Verification-Process-in-MNCs.jpeg"
              fill
              alt="recruitment"
              className="object-cover object-center absolute"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-monochrome font-bold text-2xl md:text-5xl">
              Background Checks
            </h2>
            <p className="text-base mt-3">
              Building a trustworthy and reliable team starts with thorough
              background checks. MonsarHR provides comprehensive verification
              services to help you make informed hiring decisions. Our
              background checks include employment verification, education
              credential validation, criminal record checks, and professional
              reference consultations. By delivering accurate and reliable
              information, we minimize hiring risks and ensure that every
              candidate you onboard meets your organization&apos;s integrity and
              compliance standards.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row-reverse gap-6 items-center mb-8">
          <div className="md:h-[360px] h-[240px] w-full md:w-[400px] relative md:flex-1">
            <Image
              src="/assets/professional-businessman-using-sticky-notes-whiteboard-thinking-ideas-business-strategy-plan-business-concept.jpg"
              fill
              alt="recruitment"
              className="object-cover object-center absolute"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-monochrome font-bold text-2xl md:text-5xl">
              Psychometric Assessments
            </h2>
            <p className="text-base mt-3">
              Understanding a candidate&apos;s personality, cognitive abilities, and
              behavioral tendencies is crucial for making successful hiring
              decisions. MonsarHR&apos;s psychometric assessments provide detailed
              insights into how candidates think, act, and interact. Our
              services include cognitive ability tests to assess problem-solving
              and decision-making skills, personality profiling to evaluate
              teamwork and leadership potential, and behavioral assessments to
              gauge performance under specific conditions. These tools help you
              identify individuals who are not only technically competent but
              also a strong cultural fit for your organization, ensuring
              long-term success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TalentAcquisition;
