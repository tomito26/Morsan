import HeroSection from "@/components/lib/hero-section";
import React from "react";

const TalentManagement = () => {
  return (
    <div>
      <HeroSection
        hero={{
          image: "/assets/authentic-small-youthful-marketing.jpg",
          title: "Talent Management",
          description: `Home > Talent Management`,
        }}
        callToAction={false}
        className="h-[64vh]"
      />
    </div>
  );
};

export default TalentManagement;
