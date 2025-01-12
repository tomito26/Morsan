import React from "react";
import HeroSection from "@/components/lib/hero-section";
import AboutSection from "./about-section";
import OurServicesSection from "./our-services-section";
import WhyChooseUs from "./why-choose-us";
import IndustriesServed from "./industries-served";
import Metrics from "./metrics";
import NewsUpdates from "./news-updates";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        hero={{
          image:
            "/assets/authentic-small-youthful-marketing.jpg",
          title:
            " Empowering Workplaces: Innovative HR Solutions for a Thriving Future",
          description: ` Morsan HR Consulting Firm is a leading human resource consultancy
              dedicated to providing innovative, strategic, and tailored HR
              solutions.`,
        }}
      />
      <AboutSection/>
      <OurServicesSection/>
      <WhyChooseUs/>
      <IndustriesServed/>
      <Metrics/>
      <NewsUpdates/>
    </div>
  );
};

export default HomePage;
