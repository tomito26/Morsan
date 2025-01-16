import HeroSection from "@/components/lib/hero-section";
import React from "react";
import Image from "next/image";

const HumanResourceSupport = () => {
  return (
    <div>
      <HeroSection
        hero={{
          image: "/assets/portrait-successful-young-businesswoman-with-colleagues.jpg",
          title: "Human Resource Support",
          description: `Home > Human Resource Support`,
        }}
        callToAction={false}
        className="h-[64vh]"
      />
      <div className="md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 pt-20 pb-24">
        <div className="flex gap-6 items-center mb-8">
          <div className="h-[360px] w-[400px] relative flex-1">
            <Image
              src="/assets/felix-blog-img.jpg"
              fill
              alt="recruitment"
              className="object-cover object-center absolute"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-monochrome font-bold text-5xl">HR Audit</h2>
            <p className="text-base mt-3">
              Our HR Audit service helps organizations assess the effectiveness
              of their HR practices and identify areas for improvement. We
              conduct a comprehensive review of your HR policies, procedures,
              and systems to ensure they align with best practices and legal
              requirements. Our HR audit includes analyzing recruitment
              processes, employee relations, performance management, compliance
              with labor laws, and more. By identifying gaps and inefficiencies,
              we help you optimize your HR operations, reduce risks, and create
              a more effective HR framework that supports your business goals.
            </p>
          </div>
        </div>
        <div className="flex flex-row-reverse gap-6 items-center mb-8">
          <div className="h-[360px] w-[400px] relative flex-1">
            <Image
              src="/assets/HR-Consultancy-Services-in-Africa-edited.webp"
              fill
              alt="recruitment"
              className="object-cover object-center absolute"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-monochrome font-bold text-5xl">
              HR Consultancy
            </h2>
            <p className="text-base mt-3">
              We offer expert HR Consultancy services tailored to the unique
              needs of your business. Whether you&apos;re looking to improve
              your HR strategy, navigate complex workforce challenges, or
              implement new systems, our consultants provide practical and
              strategic solutions. We work closely with your team to design and
              implement HR strategies that drive business growth, enhance
              employee engagement, and ensure legal compliance. Our consultancy
              services span various areas, including organizational development,
              talent management, employee relations, and HR technology, enabling
              your organization to thrive in a competitive environment.
            </p>
          </div>
        </div>
        <div className="flex gap-6 items-center mb-8">
          <div className="h-[360px] w-[400px] relative flex-1">
            <Image
              src="/assets/ethnic-businessman-gesturing-thumb-up.jpg"
              fill
              alt="recruitment"
              className="object-cover object-center absolute"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-monochrome font-bold text-5xl">
              Outplacement Services
            </h2>
            <p className="text-base mt-3">
              When organizations face restructuring or downsizing, Outplacement
              Services from MonsarHR provide valuable support to departing
              employees. We offer career transition assistance, including resume
              writing, interview coaching, job search support, and emotional
              support during the transition period. Our outplacement services
              are designed to help employees successfully navigate their job
              search and secure new employment opportunities as quickly as
              possible, while also maintaining a positive relationship with your
              organization. This service helps protect your employer brand and
              supports your commitment to employees even in difficult times.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanResourceSupport;
