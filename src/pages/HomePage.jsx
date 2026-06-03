import { HeroSection } from '../sections/HeroSection'
import { WhatIsSection } from '../sections/WhatIsSection'
import { DocumentationSection } from '../sections/DocumentationSection'
import { CurrentStateSection } from '../sections/CurrentStateSection'
import { SourceSection } from '../sections/SourceSection'
import { WaitlistSection } from '../sections/WaitlistSection'
import { HomeFaqSection } from '../sections/HomeFaqSection'

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhatIsSection />
      <DocumentationSection />
      <CurrentStateSection />
      <SourceSection />
      <WaitlistSection />
      <HomeFaqSection />
    </main>
  )
}
