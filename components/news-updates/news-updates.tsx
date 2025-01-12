import React from "react";
import HeroSection from "../lib/hero-section";

const NewsUpdates = () => {
  return (
    <div>
      <HeroSection
        hero={{
          image: "/assets/authentic-small-youthful-marketing.jpg",
          title: "News Updates",
          description: `Home > News Updates`,
        }}
        callToAction={false}
        className="h-[64vh]"
      />
    </div>
  );
};

export default NewsUpdates;
