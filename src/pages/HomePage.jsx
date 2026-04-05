import { HeroSection } from '../sections/HeroSection'
import { WhatIsSection } from '../sections/WhatIsSection'
import { WhySection } from '../sections/WhySection'
import { PrinciplesSection } from '../sections/PrinciplesSection'
import { BuilderSection } from '../sections/BuilderSection'
import { V1Section } from '../sections/V1Section'
import { SourceSection } from '../sections/SourceSection'
import { ArchitectureSection } from '../sections/ArchitectureSection'
import { StatusSection } from '../sections/StatusSection'
import { RoadmapSection } from '../sections/RoadmapSection'
import { WaitlistSection } from '../sections/WaitlistSection'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhatIsSection />
      <WhySection />
      <PrinciplesSection />
      <BuilderSection />
      <V1Section />
      <SourceSection />
      <ArchitectureSection />
      <StatusSection />
      <RoadmapSection />
      <WaitlistSection />
    </main>
  )
}
