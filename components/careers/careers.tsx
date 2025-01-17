import React from 'react'
import HeroSection from '../lib/hero-section'

const Careers = () => {
  return (
    <div>
       <HeroSection
        hero={{
          image:
            "/assets/jobsuche.jpg",
          title:
            "Careers",
          description: `Home > Careers   `
        }}
        callToAction={false}
        className="h-[60vh]"
      />
      <div className='md:px-[40px] lg:px-[60px] xl:px-[100px] 2xl:px-[160px] 3xl:px-[200px] 4xl:px-[240px] 5xl:px-[320px] px-4 py-20'>
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Careers