import AboutSection from '../home-page/about-section'
import HeroSection from '../lib/hero-section'
import ContactSection from './contact-us/contact-section'
import HowWeWork from './how-we-work'
import OurPhilosophiesSections from './our-philosophies-sections'
import OurValuesSection from './our-values-section'

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
      <ContactSection/>
    </div>
  )
}

export default AboutUs