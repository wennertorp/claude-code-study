import { SectionWrapper } from '../ui/SectionWrapper'
import { Timeline } from '../ui/Timeline'
import { Callout } from '../ui/Callout'
import { PollQuestion } from '../ui/PollQuestion'
import { CopyButton } from '../ui/CopyButton'
import { SpeakerPanel } from '../ui/SpeakerPanel'
import { polls } from '../../data'
import type { TimelineStep } from '../../types'
import { getSectionPrefix } from '../../utils/sectionLabel'

const steps: TimelineStep[] = [
  { step: 1, title: 'Förstå problemet', description: 'Formulera vad du faktiskt vill lösa. Otydliga uppgifter ger otydliga lösningar.' },
  { step: 2, title: 'Läs relevanta filer', description: 'Be Claude hitta och läsa de filer som berörs — utan att ändra något ännu.' },
  { step: 3, title: 'Föreslå plan', description: 'Claude redovisar vilka filer som ändras, varför, risker och hur du testar.', highlight: true },
  { step: 4, title: 'Ändra lite', description: 'Implementera ett steg i taget. Håll varje ändring granskningsbar.' },
  { step: 5, title: 'Kör test och build', description: 'Verifiera att ändringen inte bröt något. Låt Claude köra relevanta kommandon.' },
  { step: 6, title: 'Reviewa diff', description: 'Granska ändringen själv — alltid, även om Claude redan gjort en review.', highlight: true },
  { step: 7, title: 'Commit', description: 'Commit när du förstår vad som ändrades och varför. Inte förr.' },
]

const keyPrompt = 'Läs relevanta filer och föreslå en plan. Ändra inget ännu.'

export function MentalModelSection() {
  return (
    <>
      <SectionWrapper id="mental-model">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
          {getSectionPrefix('mental-model', 'Mental modell')}
        </p>
        <h2 className="section-heading">Tänk på Claude som en parprogrammerare</h2>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl">
          Det avgörande skiftet är att styra Claude som du skulle styra en junior kollega med full
          kodbasåtkomst — inte som ett sökverktyg eller en textgenerator.
        </p>

        {/* Core mental model callout */}
        <div className="border border-teal-500/40 bg-teal-500/8 rounded-2xl p-6 mb-10">
          <p className="text-base font-semibold text-teal-100 leading-relaxed mb-3">
            "Se Claude Code som en väldigt kompetent, men något junior, kollega med lite för gott
            självförtroende."
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {[
              { good: true, text: 'Snabb och hjälpsam' },
              { good: true, text: 'Hittar samband du kanske missar' },
              { good: true, text: 'Föreslår ofta bra lösningar' },
              { good: false, text: 'Kan gissa och övertolka' },
              { good: false, text: 'Kan ändra mer än du bett om' },
              { good: false, text: 'Kräver att du ger tydliga ramar' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-2 text-sm">
                <span className={item.good ? 'text-teal-400' : 'text-orange-400'}>
                  {item.good ? '✓' : '△'}
                </span>
                <span className={item.good ? 'text-teal-200/80' : 'text-orange-200/70'}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-teal-400/60 mt-4 leading-relaxed">
            Därför: ge tydliga ramar, be alltid om plan, jobba i små steg och reviewa diffen själv.
          </p>
        </div>

        <h3 className="section-subheading">Grundflöde</h3>
        <Timeline steps={steps} />

        <div className="mt-10">
          <Callout variant="tip" title="Den kanske viktigaste prompten">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <p className="font-mono text-sm text-teal-200">"{keyPrompt}"</p>
              <CopyButton text={keyPrompt} />
            </div>
            <p className="mt-2 text-slate-400 text-xs">
              Den här prompten bromsar reflexen att börja ändra direkt. Claude analyserar och
              presenterar en plan — och du bestämmer om den är rätt.
            </p>
          </Callout>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Callout variant="info" title="Be Claude analysera först">
            Ge Claude tid att förstå sammanhanget. Spar det komplicerade för analysfasen, inte
            implementationen.
          </Callout>
          <Callout variant="warning" title="Granska alltid diffen själv">
            Claude kan granska sin egen kod — men det ersätter aldrig din review. Du äger
            ändringen.
          </Callout>
        </div>

        <SpeakerPanel sectionId="mental-model" />
      </SectionWrapper>

      <SectionWrapper id="mental-model-poll" alt>
        <PollQuestion poll={polls.mentalModel} />
      </SectionWrapper>
    </>
  )
}
