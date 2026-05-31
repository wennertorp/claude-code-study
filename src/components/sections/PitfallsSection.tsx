import { AlertTriangle, XCircle } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { PollQuestion } from '../ui/PollQuestion'
import { SpeakerPanel } from '../ui/SpeakerPanel'
import { polls } from '../../data'
import { getSectionPrefix } from '../../utils/sectionLabel'

const pitfalls = [
  'Låt inte Claude göra för stora ändringar på en gång',
  'Starta alltid från clean git status',
  'Be alltid om plan innan implementation',
  'Undvik att blanda flera problem i samma session',
  'Ge domänregler och undantag tydligt och explicit',
  'Lita inte blint på Claudes förklaringar — verifiera',
  'Kör alltid test och build efter ändring',
  'Granska alltid diffen själv — du äger ändringen',
  'Lägg aldrig hemligheter i repo',
  'Dokumentera projektets arbetssätt i markdown',
]

const redFlags = [
  'Claude vill ändra många filer utan tydlig anledning',
  'Claude föreslår ny arkitektur för en liten bugfix',
  'Claude ignorerar befintliga mönster i kodbasen',
  'Claude börjar gissa domänregler utan att du gett dem',
  'Claude föreslår att logga känsliga värden',
  'Claude löser symptomet men inte rotorsaken',
]

export function PitfallsSection() {
  return (
    <>
      <SectionWrapper id="pitfalls">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
          {getSectionPrefix('pitfalls', 'Fallgropar')}
        </p>
        <h2 className="section-heading">Vanliga fallgropar</h2>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl">
          De flesta problem med Claude Code beror inte på Claude — de beror på hur vi styr den. Här
          är mönstren att undvika.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
          {pitfalls.map((item) => (
            <div key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
              <AlertTriangle size={14} className="text-orange-400 mt-0.5 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <h3 className="section-subheading">Röda flaggor — bromsa direkt</h3>
        <p className="text-slate-400 text-sm mb-4">
          Om du märker något av det här under en session: stoppa, backa och formulera om.
        </p>
        <div className="space-y-2">
          {redFlags.map((flag) => (
            <div
              key={flag}
              className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/20 text-sm"
            >
              <XCircle size={14} className="text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-red-200/80">{flag}</span>
            </div>
          ))}
        </div>

        <SpeakerPanel sectionId="pitfalls" />
      </SectionWrapper>

      <SectionWrapper id="pitfalls-poll" alt>
        <PollQuestion poll={polls.pitfalls} />
      </SectionWrapper>
    </>
  )
}
