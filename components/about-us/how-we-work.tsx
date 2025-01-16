import React from "react";

const HowWeWork = () => {
  const steps = [
    {
      name: "Understanding Your Needs",
      description:
        "We gain a deep understanding of your organization, goals, and unique HR challenges, helping us identify areas for improvement and growth.",
    },
    {
      name: "Tailoring Solutions",
      description:
        "We leverage our industry knowledge, best practices, and innovative thinking to create a roadmap that includes customized strategies and solutions based on your objectives",
    },
    {
      name: "Seamless Integration",
      description:
        "We ensure a smooth transition by working closely with your HR team and stakeholders, minimizing disruptions, and fostering a positive and collaborative environment throughout the implementation phase.",
    },
    {
      name: "Continuous Support",
      description:
        "We provide ongoing support, monitoring the effectiveness of the solutions implemented and making adjustments as needed.",
    },
    {
      name: "Measuring Impact",
      description:
        "We believe in data-driven decision-making. As part of our approach, we establish key performance indicators (KPIs) and metrics to measure the impact of our solutions.",
    },
    {
      name: "Long-term Partnership",
      description:
        "We aim to build lasting partnerships with our clients. We view ourselves as an extension of your HR team, providing ongoing guidance, support, and expertise.",
    },
  ];
  return (
    <div className="md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 py-20 bg-[#0B2E4A]/10">
      <h1 className="text-[#0B2E4A] font-bold uppercase text-sm text-center">
        Our process{" "}
      </h1>
      <h2 className="text-2xl md:text-5xl font-bold text-monochrome my-4 text-center">
        How We Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {steps.map((step, index) => (
          <div key={index} className="">
            <div className="bg-white p-6 h-[280px] rounded-md">
              <div className="flex justify-center">
                <div className="text-sm font-bold text-white bg-[#0B2E4A] h-9 w-9 rounded-full flex justify-center items-center flex-col">
                  0{index + 1}
                </div>
              </div>
              <h3 className="text-monochrome font-bold text-lg mb-3 text-center my-3">
                {step.name}
              </h3>
              <p className="text-base">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowWeWork;
