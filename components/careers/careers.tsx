import React from 'react'
import HeroSection from '../lib/hero-section'

const Careers = () => {
  return (
    <div>
       <HeroSection
        hero={{
          image:
            "/assets/authentic-small-youthful-marketing.jpg",
          title:
            "Careers",
          description: `Home > About Us`
        }}
        callToAction={false}
        className="h-[64vh]"
      />
    </div>
  )
}

export default Careers