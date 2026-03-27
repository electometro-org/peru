import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import WhoWeAre from '../components/WhoWeAre'
import PressKit from '../components/PressKit'
import Collaborations from '../components/Collaborations'
import CtaSection from '../components/CtaSection'
import VideoSection from '../components/VideoSection'

function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <Features />
      <HowItWorks />
      <WhoWeAre />
      <Collaborations />
      <PressKit />
      <CtaSection />
    </>
  )
}

export default Home