"use client";
import React, { useState } from "react";
import HeroSection from "../lib/hero-section";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const Careers = () => {
  const [category, setCategory] = useState("All");
  const [jobType, setJobType] = useState("All");
  const [location, setLocation] = useState("All");
  const jobs = [
    {
      job_title: "Human Resource and Administration Manager",
      job_description:
        "Our client is seeking a dynamic and results-oriented Human Resource Manager (HRM). This role is crucial in shaping the workforce that will help drive the company's success. The HRM will oversee all aspects of human resources practices and processes, ensuring that they align with the company's strategic goals.",
      location: "Nairobi",
      job_type: "Full-Time",
    },
    {
      job_title: "Social Media Manager and Content Creator",
      job_description:
        "The main role of the Social Media Manager & Content Creator will be creating compelling content across various formats (written, visual, and multimedia) and managing brand social media presence to engage with audience for assigned brands, increase brand visibility, and drive business growth",
      location: "Nairobi",
      job_type: "Full-Time",
    },
    {
      job_title: "Talent Acquisition Assistant",
      job_description:
        "Our client is seeking an experienced and proactive Talent Acquisition Assistant to join their team. This role is critical in sourcing, attracting, and onboarding top talent to support the company's rapid growth in a high-paced environment. The ideal candidate will have proven success in end-to-end recruitment, particularly within manufacturing or similar fast-paced industries.",
      location: "Nairobi",
      job_type: "Full-Time",
    },
    {
      job_title: "Caretaker",
      job_description:
        "Our client, is seeking a dependable and proactive Caretaker to join their team. This is an excellent opportunity for a motivated individual to take on a hands-on role in maintaining and improving the workspace in a supportive and collaborative environment.",
      location: "Nairobi",
      job_type: "Full-Time",
    },
    {
      job_title: "Caretaker",
      job_description:
        "Our client, is seeking a dependable and proactive Caretaker to join their team. This is an excellent opportunity for a motivated individual to take on a hands-on role in maintaining and improving the workspace in a supportive and collaborative environment.",
      location: "Nairobi",
      job_type: "Full-Time",
    },
  ];

  const job_types = ["All", "Full-Time", "Remote", "Hybrid"];
  const job_categories = ["All", "Technology", "Management", "Human Resource"];
  const locations = ["All", "Nairobi", "Kisumu", "Eldoret", "Mombasa"];
  return (
    <div>
      <HeroSection
        hero={{
          image: "/assets/jobsuche.jpg",
          title: "Careers",
          description: `Home > Careers   `,
        }}
        callToAction={false}
        className="h-[48vh]"
      />
      <div className="flex w-full gap-10 md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 py-20">
        <div className="w-3/12 hidden md:block">
          <div className="mb-6">
            <Label className="text-base">Filter by Category</Label>
            <Select
              onValueChange={(value) => setCategory(value)}
              defaultValue={category}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>

              <SelectContent>
                {job_categories.map((item, index) => (
                  <SelectItem value={item} key={index}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-6">
            <Label className="text-base">Filter by Job Type</Label>
            <Select
              onValueChange={(value) => setJobType(value)}
              defaultValue={jobType}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                {job_types.map((item, index) => (
                  <SelectItem value={item} key={index}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="mb-6">
            <Label className="text-base">Filter by Location</Label>
            <Select
              onValueChange={(value) => setLocation(value)}
              defaultValue={location}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Service" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((item, index) => (
                  <SelectItem value={item} key={index}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-full md:w-9/12">
        <div className="mb-6">
        <h1 className="text-[#0B2E4A] font-bold uppercase text-sm">Job List</h1>
        <h2 className="text-2xl md:text-5xl font-bold text-monochrome my-3">Job Recommendations</h2>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="shadow-md hover:shadow-lg border px-5 py-6"
              >
                <h2 className="text-xl font-bold text-monochrome">
                  {job.job_title}
                </h2>
                <p className="text-base my-4 font-medium">{`${job.job_description.substring(
                  0,
                  120
                )}...`}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="flex items-center gap-2 mb-2">
                      <MapPin className="h-6 w-6 stroke-[#1a4e79]" />
                      <span className="text-base">{job.location}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <BriefcaseBusiness className="h-6 w-6 stroke-[#1a4e79]" />{" "}
                      <span className="text-base">{job.job_type}</span>
                    </p>
                  </div>
                  <Button className="bg-[#1a4e79] hover:bg-[#0B2E4A]">
                    View Detail
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
