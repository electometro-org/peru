import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import WhoWeAre from '../components/WhoWeAre'
import PressKit from '../components/PressKit'
import Collaborations from '../components/Collaborations'
import CtaSection from '../components/CtaSection'
import SectionScrollFab from '../components/SectionScrollFab'

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <WhoWeAre />
      <Collaborations />
      <PressKit />
      {/* <CtaSection /> */}
      <SectionScrollFab />
    </>
  )
}

export default Home