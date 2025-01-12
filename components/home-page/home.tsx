import React from "react";
import HeroSection from "@/components/lib/hero-section";
import AboutSection from "./about-section";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        hero={{
          image:
            "/assets/happy-confident-business-team-posing-with-arms-folded.jpg",
          title:
            " Empowering Workplaces: Innovative HR Solutions for a Thriving Future",
          description: ` Morsan HR Consulting Firm is a leading human resource consultancy
              dedicated to providing innovative, strategic, and tailored HR
              solutions.`,
        }}
      />
      <AboutSection/>
    </div>
  );
};

export default HomePage;
