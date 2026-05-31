import { SectionWrapper } from '../ui/SectionWrapper'
import { Callout } from '../ui/Callout'
import { ComparisonBlock } from '../ui/ComparisonBlock'
import { PollQuestion } from '../ui/PollQuestion'
import { CopyButton } from '../ui/CopyButton'
import { SpeakerPanel } from '../ui/SpeakerPanel'
import { polls } from '../../data'
import { getSectionPrefix } from '../../utils/sectionLabel'

const narrowPrompt = `Vi ska bara jobba med frontend. Ignorera backend tills jag säger annat. Börja med att hitta komponenterna som påverkar detta flöde. Ändra inget ännu.`

const summaryPrompt = `Sammanfatta nuläget för en ny Claude Code-session. Ta med mål, filer som ändrats, viktiga beslut, återstående problem, kommandon som körts och hur man testar.`

const resumePrompt = `Läs docs/ai-notes/current-task.md och fortsätt därifrån. Ändra inget innan du föreslagit plan.`

function PromptBlock({ label, prompt }: { label: string; prompt: string }) {
  return (
    <div className="card mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</span>
        <CopyButton text={prompt} />
      </div>
      <div className="prompt-block text-sm">{prompt}</div>
    </div>
  )
}

export function ContextManagementSection() {
  return (
    <>
      <SectionWrapper id="context">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
          {getSectionPrefix('context', 'Context management')}
        </p>
        <h2 className="section-heading">Håll context smal och fokuserad</h2>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl">
          Claude Code har ett context-fönster — ett gränsat arbetsminne. Fyller du det med brus
          sjunker precisionen. Smalt fokus ger bättre svar.
        </p>

        <h3 className="section-subheading">Vanliga context-problem</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            'Du ber Claude läsa för mycket på en gång',
            'Du blandar frontend, backend, SQL och tester i samma session',
            'Diskussionen växer utan sammanfattning',
            'Claude bär runt på gammal, irrelevant kontext',
            'Terminaloutput tar stor plats utan att bidra',
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-slate-400">
              <span className="text-orange-400 mt-0.5 flex-shrink-0">▸</span>
              {item}
            </div>
          ))}
        </div>

        <h3 className="section-subheading">Rekommenderat arbetssätt</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
          {[
            'Börja smalt — en komponent eller ett flöde åt gången',
            'Separera frontend och backend i olika sessioner',
            'Håll en session för analys, en annan för implementation',
            'Be Claude sammanfatta när du byter spår',
            'Använd /context för att se vad som fyller kontexten',
            'Använd /compact med tydligt fokus',
            'Spara handover-sammanfattningar i markdown',
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
              <span className="text-teal-400 mt-0.5 flex-shrink-0">✓</span>
              {item}
            </div>
          ))}
        </div>

        <h3 className="section-subheading">Praktiska prompts</h3>
        <PromptBlock label="Smal start" prompt={narrowPrompt} />
        <PromptBlock label="Sammanfattning inför ny session" prompt={summaryPrompt} />
        <PromptBlock label="Återuppta från fil" prompt={resumePrompt} />

        <div className="mt-8">
          <ComparisonBlock
            bad={{ label: 'Undvik', text: 'Läs hela projektet och fixa buggen.' }}
            good={{
              label: 'Bättre',
              text: 'Hitta relevanta filer för valideringen i frontend. Läs bara de filer som verkar nödvändiga. Föreslå plan först.',
            }}
          />
        </div>

        <Callout variant="info" title="Kommandona /context och /compact">
          <strong>/context</strong> visar vad som tar plats i det aktuella context-fönstret.{' '}
          <strong>/compact</strong> komprimerar historiken — ge alltid ett tydligt direktiv om vad
          som ska bevaras.
        </Callout>

        <SpeakerPanel sectionId="context" />
      </SectionWrapper>

      <SectionWrapper id="context-poll" alt>
        <PollQuestion poll={polls.context} />
      </SectionWrapper>
    </>
  )
}
