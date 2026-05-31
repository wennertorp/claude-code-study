import { Navigation } from './components/layout/Navigation'
import { ProgressBar } from './components/layout/ProgressBar'
import { HeroSection } from './components/sections/HeroSection'
import { GettingStartedSection } from './components/sections/GettingStartedSection'
import { MentalModelSection } from './components/sections/MentalModelSection'
import { PromptLibrarySection } from './components/sections/PromptLibrarySection'
import { ContextManagementSection } from './components/sections/ContextManagementSection'
import { SecuritySection } from './components/sections/SecuritySection'
import { ProjectMemorySection } from './components/sections/ProjectMemorySection'
import { DemoSection } from './components/sections/DemoSection'
import { PitfallsSection } from './components/sections/PitfallsSection'
import { TeamWorkflowSection } from './components/sections/TeamWorkflowSection'
import { NextLevelSection } from './components/sections/NextLevelSection'
import { ResourcesSection } from './components/sections/ResourcesSection'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-100">
      <ProgressBar />
      <Navigation />

      {/* Main content — offset for desktop sidebar */}
      <main className="lg:pl-56">
        {/* Mobile top padding */}
        <div className="lg:hidden h-12" />

        <HeroSection />
        <GettingStartedSection />
        <MentalModelSection />
        <PromptLibrarySection />
        <ContextManagementSection />
        <SecuritySection />
        <ProjectMemorySection />
        <DemoSection />
        <PitfallsSection />
        <TeamWorkflowSection />
        <NextLevelSection />
        <ResourcesSection />
      </main>
    </div>
  )
}
