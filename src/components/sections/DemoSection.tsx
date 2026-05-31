import { Play, Bug, CheckCircle, FlaskConical } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { CopyButton } from '../ui/CopyButton'
import { PollQuestion } from '../ui/PollQuestion'
import { SpeakerPanel } from '../ui/SpeakerPanel'
import { polls } from '../../data'
import { getSectionPrefix } from '../../utils/sectionLabel'

interface DemoStep {
  step: number
  label: string
  prompt: string
  note?: string
}

const labIntro = {
  scenario:
    'demo-bug-app är en liten React/TypeScript-portal med behörighetsstyrd navigering. Den innehåller en avsiktlig bugg: menyvalet "Importera data" visas för fel användare. Ditt mål är att hitta och fixa buggen med Claude Code.',
  symptom:
    'Anna Rapport (capabilities: canAccessReports) ser "Importera data" i sidopanelen och som kort — trots att hon inte ska ha tillgång till import-funktionen.',
  notice: [
    'Claude hittar rätt filer utan att du pekar ut dem',
    'Buggen sitter i DATA (menuItems.ts), inte i logiken (permissions.ts)',
    'TypeScript fångar inte felet — canAccessReports är en giltig Capability-typ',
    'Diffen är minimal: en enda rad',
    'Du reviewar diffen innan du accepterar',
  ],
  fix: "Ändra requiredCapability från 'canAccessReports' till 'canImportData' i src/data/menuItems.ts för \"Importera data\"-posten.",
  backup:
    'Öppna src/data/menuItems.ts direkt och visa sista objektet. Peka på requiredCapability-fältet. Fråga dig själv: "Var hade jag letat efter den här buggen utan Claude Code?" Ändra värdet och ladda om appen.',
}

const labPrompts: DemoStep[] = [
  {
    step: 1,
    label: 'Utforska — ändra inget',
    prompt: `Analysera appen. Hitta var behörighetskontroll sker för menyval. Förklara hur det fungerar och vilka filer som är inblandade. Ändra inget ännu.`,
    note: 'Claude ska identifiera permissions.ts, menuItems.ts och App.tsx.',
  },
  {
    step: 2,
    label: 'Identifiera buggen',
    prompt: `Användaren Anna Rapport har capabilities: ['canAccessReports']. Hon ser menyvalet "Importera data" trots att hon inte ska ha tillgång till det. Identifiera exakt var i koden felet uppstår. Ändra inget.`,
    note: 'Claude ska peka på requiredCapability i menuItems.ts.',
  },
  {
    step: 3,
    label: 'Be om plan',
    prompt: `Föreslå minsta möjliga fix. Visa vilken fil och rad som ändras, varför, och hur jag verifierar att det fungerar korrekt efteråt.`,
    note: 'Förväntad plan: en rad i menuItems.ts.',
  },
  {
    step: 4,
    label: 'Implementera',
    prompt: `Implementera ändringen enligt planen. Håll diffen minimal.`,
    note: 'Diffen ska vara exakt en rad.',
  },
  {
    step: 5,
    label: 'Verifiera',
    prompt: `Granska diffen. Beskriv hur jag verifierar manuellt att Anna Rapport inte längre ser "Importera data" och att David Superuser fortfarande ser det.`,
    note: 'Claude beskriver manuell verifiering — du kör den i appen.',
  },
]

const menuDemo: DemoStep[] = [
  {
    step: 1,
    label: 'Hitta var menyvalet renderas',
    prompt: `Hitta var menyvalet för administration visas. Läs relevanta filer, men ändra inget. Förklara vilka komponenter, hooks och typer som påverkas.`,
    note: 'Analysläge — Claude rör ingenting.',
  },
  {
    step: 2,
    label: 'Be om minimal plan',
    prompt: `Föreslå minsta ändring så att menyvalet bara visas om användaren har rätt capability. Följ befintligt mönster i projektet. Ändra inget ännu.`,
    note: 'Du ser vilka filer som påverkas innan en rad skrivs.',
  },
  {
    step: 3,
    label: 'Implementera',
    prompt: `Implementera ändringen enligt planen. Håll diffen minimal.`,
    note: 'Liten diff = lättgranskad diff.',
  },
  {
    step: 4,
    label: 'Testa',
    prompt: `Föreslå hur jag testar detta manuellt och automatiskt. Kör build/test om möjligt.`,
    note: 'Claude föreslår testfall — du avgör vilka som är nödvändiga.',
  },
  {
    step: 5,
    label: 'Reviewa',
    prompt: `Granska diffen som en pull request. Finns risk för regressionsbuggar, felaktig behörighetslogik eller inkonsekvent UI?`,
    note: 'Claudes review ersätter inte din — men den hittar ofta uppenbara problem.',
  },
]

function DemoStepCard({ item }: { item: DemoStep }) {
  return (
    <div className="card">
      <div className="flex items-start gap-3 mb-3">
        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-sm font-bold text-teal-300">
          {item.step}
        </div>
        <div>
          <p className="font-semibold text-slate-200 text-sm">{item.label}</p>
          {item.note && <p className="text-xs text-slate-500 mt-0.5">{item.note}</p>}
        </div>
      </div>
      <div className="flex items-start justify-between gap-3">
        <div className="prompt-block text-sm flex-1">{item.prompt}</div>
        <CopyButton text={item.prompt} className="flex-shrink-0" />
      </div>
    </div>
  )
}

export function DemoSection() {
  return (
    <>
      <SectionWrapper id="demo" alt>
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
          {getSectionPrefix('demo', 'Frivillig labb')}
        </p>
        <h2 className="section-heading">Hitta en behörighetsbugg</h2>

        <div className="flex items-center gap-2 mb-4">
          <FlaskConical size={14} className="text-teal-400" />
          <span className="text-sm text-slate-400">
            Frivillig övning — kräver att du kör{' '}
            <span className="font-mono text-teal-300">demo-bug-app</span> lokalt
          </span>
        </div>

        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl">
          En praktisk labbövning där du kör Claude Code mot en liten app med en avsiktlig bugg.
          Målet är att öva på grundflödet: analysera → identifiera → planera → fixa → verifiera.
        </p>

        {/* Setup */}
        <div className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4 mb-8">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Förberedelser
          </p>
          <ol className="space-y-1.5">
            {[
              'Klona eller ladda ner repot om du inte redan har det',
              'Öppna demo-bug-app/ i en terminal och kör: npm install && npm run dev',
              'Öppna http://localhost:5174 i webbläsaren',
              'Öppna demo-bug-app/ som projekt i Claude Code i en separat terminal',
              'Välj Anna Rapport i dropdown-menyn — notera vad hon ser',
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                <span className="flex-shrink-0 w-4 h-4 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-400 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* Main lab */}
        <div className="mb-10 border border-teal-500/25 bg-teal-500/5 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bug size={16} className="text-teal-400" />
            <span className="text-sm font-semibold text-teal-300">
              Labbövning: hitta behörighetsbuggen
            </span>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed mb-5">{labIntro.scenario}</p>

          {/* Symptom */}
          <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4 mb-5">
            <p className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1.5">
              Symptom
            </p>
            <p className="text-sm text-red-200/80 leading-relaxed">{labIntro.symptom}</p>
          </div>

          {/* Prompts */}
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Prompts — kör i ordning
          </p>
          <div className="space-y-3 mb-5">
            {labPrompts.map((item) => (
              <DemoStepCard key={item.step} item={item} />
            ))}
          </div>

          {/* What to notice */}
          <div className="bg-slate-800/40 border border-slate-700/30 rounded-xl p-4 mb-4">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Lägg märke till
            </p>
            <ul className="space-y-1.5">
              {labIntro.notice.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle size={13} className="text-teal-500 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Facit + Backup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <details className="bg-slate-800/40 border border-slate-700/40 rounded-lg">
              <summary className="cursor-pointer p-3 text-xs font-semibold text-slate-500 uppercase tracking-wider hover:text-slate-300 transition-colors">
                Visa facit
              </summary>
              <p className="px-3 pb-3 text-xs text-slate-300 leading-relaxed font-mono">
                {labIntro.fix}
              </p>
            </details>
            <div className="bg-slate-800/40 border border-slate-700/40 rounded-lg p-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                Om det inte fungerar
              </p>
              <p className="text-xs text-slate-400 leading-relaxed">{labIntro.backup}</p>
            </div>
          </div>
        </div>

        {/* Alternative exercises */}
        <details className="mb-4">
          <summary className="cursor-pointer flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors p-4 rounded-xl border border-slate-700/40 bg-slate-800/20">
            <Play size={13} className="text-slate-500" />
            Alternativ övning A: behörighetsstyrt menyval (eget repo)
          </summary>
          <div className="mt-3 space-y-3 pl-2">
            <p className="text-sm text-slate-400 mb-4">
              Scenario: ett menyval ska bara visas om användaren har rätt <em>capability</em>. Kör i
              din egen kodbas.
            </p>
            {menuDemo.map((item) => (
              <DemoStepCard key={item.step} item={item} />
            ))}
          </div>
        </details>

        <details className="mb-6">
          <summary className="cursor-pointer flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-slate-200 transition-colors p-4 rounded-xl border border-slate-700/40 bg-slate-800/20">
            <Play size={13} className="text-slate-500" />
            Alternativ övning B: validering av löpnummer
          </summary>
          <div className="mt-3 pl-2">
            <p className="text-sm text-slate-400 mb-3">
              Scenario: ett fält ska valideras enligt formatet{' '}
              <span className="font-mono text-teal-300">
                2–5 siffror, bindestreck, två siffror, bindestreck, 1–6 siffror
              </span>
              .
            </p>
            <div className="prompt-block text-sm">
              {`Här är valideringsregeln: format 2–5 siffror, bindestreck, 2 siffror, bindestreck, 1–6 siffror. Hitta var fältet valideras idag. Föreslå en regex och minsta ändring för att implementera regeln. Visa hur du testar den. Ändra inget ännu.`}
            </div>
            <div className="mt-2 flex justify-end">
              <CopyButton
                text={`Här är valideringsregeln: format 2–5 siffror, bindestreck, 2 siffror, bindestreck, 1–6 siffror. Hitta var fältet valideras idag. Föreslå en regex och minsta ändring för att implementera regeln. Visa hur du testar den. Ändra inget ännu.`}
              />
            </div>
          </div>
        </details>

        <SpeakerPanel sectionId="demo" />
      </SectionWrapper>

      <SectionWrapper id="demo-poll">
        <PollQuestion poll={polls.demo} />
      </SectionWrapper>
    </>
  )
}
