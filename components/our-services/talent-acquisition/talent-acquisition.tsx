import HeroSection from "@/components/lib/hero-section";
import React from "react";

const TalentAcquisition = () => {
  return (
    <div>
      <HeroSection
        hero={{
          image: "/assets/afro-american-man-suit-holding-documents-talking-female-boss.jpg",
          title: "Talent Acquisition",
          description: `Home > Talent Acquisition`,
        }}
        callToAction={false}
        className="h-[64vh]"
      />
    </div>
  );
};

export default TalentAcquisition;
