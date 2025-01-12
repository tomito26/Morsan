import React from 'react'
import HeroSection from '../lib/hero-section'
import AboutSection from '../home-page/about-section'

const AboutUs = () => {
  return (
    <div>
       <HeroSection
        hero={{
          image:
            "/assets/authentic-small-youthful-marketing.jpg",
          title:
            "About Us",
          description: `Home > About Us`
        }}
        callToAction={false}
        className="h-[64vh]"
      />
      <AboutSection/>
    </div>
  )
}

export default AboutUs