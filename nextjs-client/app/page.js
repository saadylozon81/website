import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import WhatWeDo from '@/components/WhatWeDo'
import WhyChoose from '@/components/WhyChoose'
import EngineeredResults from '@/components/EngineeredResults'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhatWeDo />
        <WhyChoose />
        <EngineeredResults />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
