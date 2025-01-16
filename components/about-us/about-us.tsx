import React from 'react'
import HeroSection from '../lib/hero-section'
import AboutSection from '../home-page/about-section'
import OurPhilosophiesSections from './our-philosophies-sections'
import OurValuesSection from './our-values-section'
import HowWeWork from './how-we-work'

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
      <OurPhilosophiesSections/>
      <OurValuesSection/>
      <HowWeWork/>
    </div>
  )
}

export default AboutUs