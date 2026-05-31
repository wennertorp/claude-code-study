import { CheckCircle2, AlertTriangle } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { SpeakerPanel } from '../ui/SpeakerPanel'
import { teamChecklist } from '../../data'
import { getSectionPrefix } from '../../utils/sectionLabel'

const dualAiFlow = [
  'Beskriv problemet för en annan AI-assistent (t.ex. ChatGPT) och be om en bra Claude Code-prompt.',
  'Kör prompten i Claude Code.',
  'Klistra tillbaka Claudes analys eller diff och be om en second opinion.',
  'Be den andra assistenten hitta risker, testfall eller otydligheter.',
  'Gå tillbaka till Claude Code med en förfinad prompt.',
]

export function TeamWorkflowSection() {
  return (
    <SectionWrapper id="workflow" alt>
      <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
        {getSectionPrefix('workflow', 'Teamets arbetssätt')}
      </p>
      <h2 className="section-heading">Föreslagna Claude Code-regler</h2>
      <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl">
        En checklista som fungerar som utgångspunkt. Anpassa och skriv in det i teamets CLAUDE.md.
      </p>

      <div className="space-y-3 mb-12">
        {teamChecklist.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 p-4 rounded-xl border border-slate-700/40 bg-slate-800/20 hover:border-teal-500/25 hover:bg-teal-500/5 transition-colors duration-150 group"
          >
            <div className="flex-shrink-0 flex items-center gap-3">
              <span className="text-xs font-mono text-slate-600 w-5 text-right">{item.id}.</span>
              <CheckCircle2
                size={18}
                className="text-slate-600 group-hover:text-teal-400 transition-colors"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-200">{item.text}</p>
              {item.detail && (
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Two AI assistants tip */}
      <div className="border border-slate-700/50 bg-slate-800/30 rounded-2xl p-6 mb-10">
        <p className="text-sm font-semibold text-slate-200 mb-2">
          Tips: använd fler än en AI-assistent
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          Två AI-assistenter är inte automatiskt bättre, men det kan ge bättre resultat om de får
          olika roller: en som arbetar i koden och en som hjälper dig tänka, granska och styra
          arbetet.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          <div className="bg-teal-500/5 border border-teal-500/20 rounded-lg p-3">
            <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-1.5">
              Claude Code
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Arbetar i repot. Läser filer, föreslår och genomför ändringar.
            </p>
          </div>
          <div className="bg-slate-800/40 border border-slate-700/40 rounded-lg p-3">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
              Annan assistent (t.ex. ChatGPT)
            </p>
            <ul className="space-y-1">
              {[
                'Formulera bättre prompts',
                'Utvärdera Claudes svar',
                'Jämföra alternativa lösningar',
                'Hitta risker och testfall',
                'Skriva dokumentation',
              ].map((item) => (
                <li key={item} className="flex items-start gap-1.5 text-xs text-slate-400">
                  <span className="text-slate-600 mt-0.5">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
          Exempel på arbetsflöde
        </p>
        <ol className="space-y-1.5 mb-4">
          {dualAiFlow.map((step, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
              <span className="flex-shrink-0 text-xs font-mono text-slate-600 mt-0.5 w-4">
                {i + 1}.
              </span>
              {step}
            </li>
          ))}
        </ol>

        <div className="flex items-start gap-2 p-3 rounded-lg bg-orange-500/5 border border-orange-500/20">
          <AlertTriangle size={13} className="text-orange-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-orange-200/70 leading-relaxed">
            Klistra inte in hemligheter, persondata eller känslig kod i en extern chatt om det inte
            är godkänt enligt organisationens regler.
          </p>
        </div>
      </div>

      {/* Closing statement */}
      <div className="border border-teal-500/30 bg-teal-500/5 rounded-2xl p-8 text-center">
        <p className="text-lg sm:text-xl font-semibold text-teal-100 leading-relaxed max-w-xl mx-auto">
          "Claude Code gör oss inte automatiskt snabbare."
        </p>
        <p className="text-base text-teal-300/80 mt-3 font-medium">
          Det gör oss snabbare när vi styr det bra.
        </p>
      </div>

      <SpeakerPanel sectionId="workflow" />
    </SectionWrapper>
  )
}
