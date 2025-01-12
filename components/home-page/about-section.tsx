import React from "react";
import Image from "next/image";
import { CircleCheck } from "lucide-react";

const AboutSection = () => {
  const benefits = [
    "Attract Top Talent",
    "Streamlined Recruitment Process",
    "Enhanced Employee Retention",
    "Customized Training and Development Programs",
  ];
  return (
    <div className="flex flex-col-reverse md:flex-row gap-10 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 py-16">
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="w-full">
          <div className="w-full h-[250px] relative mb-2 hidden md:block">
            <Image
              src="/assets/afro-american-man-suit-holding-documents-talking-female-boss.jpg"
              alt="afro-american-man-suit-holding-documents-talking-female-boss"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="w-full h-[250px] relative hidden md:block">
            <Image
              src="/assets/authentic-small-youthful-marketing-agency (1).jpg"
              alt="afro-american-man-suit-holding-documents-talking-female-boss"
              fill
              className="absolute object-cover"
            />
          </div>
        </div>
        <div>
          <div className="w-full h-[250px] relative mb-2">
            <Image
              src="/assets/happy-african-american-real-estate-agent-working-paperwork-while-having-meeting-with-couple-office.jpg"
              alt="afro-american-man-suit-holding-documents-talking-female-boss"
              fill
              className="absolute object-cover"
            />
          </div>
          <div className="w-full h-[250px] relative hidden md:block">
            <Image
              src="/assets/serious-coworkers-discussing-reports-outdoor-cafe.jpg"
              alt="afro-american-man-suit-holding-documents-talking-female-boss"
              fill
              className="absolute object-cover"
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <h1 className="text-[#0B2E4A] font-bold uppercase text-sm">
          Who We Are
        </h1>
        <h2 className="text-2xl md:text-5xl font-bold text-monochrome my-4">
          Simplifying HR, Maximizing Your ROI.
        </h2>
        <p className="text-base">
          Morsan HR Consulting Firm is a leading human resource consultancy
          dedicated to providing innovative, strategic, and tailored HR
          solutions.Our mission is to empower organizations to achieve their
          goals by optimizing workforce potential and streamlining human
          resource processes.
        </p>
        <p className="text-base my-4">
          Established with a commitment to excellence, we specialize in
          delivering customized HR services to businesses of all sizes across
          various industries.
        </p>
        <ul>
          {benefits.map((item, index) => (
            <li key={index} className="flex items-center gap-3 mt-3">
              <CircleCheck className="h-4 w-4 stroke-[#0B2E4A]"/>
              <span className="text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutSection;
