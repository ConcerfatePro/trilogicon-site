import { HeroSection } from '../sections/HeroSection'
import { WhatIsSection } from '../sections/WhatIsSection'
import { CurrentStateSection } from '../sections/CurrentStateSection'
import { BaseLayerSection } from '../sections/BaseLayerSection'
import { NextSection } from '../sections/NextSection'
import { TrilSection } from '../sections/TrilSection'
import { WaitlistSection } from '../sections/WaitlistSection'
import { HomeFaqSection } from '../sections/HomeFaqSection'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhatIsSection />
      <CurrentStateSection />
      <BaseLayerSection />
      <NextSection />
      <TrilSection />
      <WaitlistSection />
      <HomeFaqSection />
    </main>
  )
}
