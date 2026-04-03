import { Navbar } from './components/Navbar'
import { HeroSection } from './sections/HeroSection'
import { WhatIsSection } from './sections/WhatIsSection'
import { WhySection } from './sections/WhySection'
import { PrinciplesSection } from './sections/PrinciplesSection'
import { V1Section } from './sections/V1Section'
import { ArchitectureSection } from './sections/ArchitectureSection'
import { StatusSection } from './sections/StatusSection'
import { RoadmapSection } from './sections/RoadmapSection'
import { FooterSection } from './sections/FooterSection'

function App() {
  return (
    <div className="min-h-svh bg-tril-black text-zinc-100 antialiased">
      <Navbar />
      <main>
        <HeroSection />
        <WhatIsSection />
        <WhySection />
        <PrinciplesSection />
        <V1Section />
        <ArchitectureSection />
        <StatusSection />
        <RoadmapSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default App
