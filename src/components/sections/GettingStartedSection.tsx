import { Terminal, Monitor, ArrowRight } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { Callout } from '../ui/Callout'
import { CopyButton } from '../ui/CopyButton'
import { PollQuestion } from '../ui/PollQuestion'
import { SpeakerPanel } from '../ui/SpeakerPanel'
import { polls } from '../../data'
import { getSectionPrefix } from '../../utils/sectionLabel'

const firstPrompt = 'Förklara projektstrukturen. Ändra inget ännu.'

const whatHappens = [
  'Du startar en session i en projektmapp',
  'Claude får tillgång till filer i den mappen',
  'Claude läser filer när det behövs för uppgiften',
  'Claude kan föreslå filändringar och kommandon',
  'Du granskar och godkänner — eller avvisar',
  'Du kör tester och reviewar diffen',
]

const cliSteps = [
  { step: 1, text: 'Installera Claude Code via npm eller hämta installationspaketet' },
  { step: 2, text: 'Öppna terminalen i din projektmapp' },
  { step: 3, text: 'Kör: claude' },
  { step: 4, text: 'Logga in med ditt Anthropic-konto' },
  { step: 5, text: 'Börja med en fråga som inte ändrar något', prompt: firstPrompt },
]

const desktopSteps = [
  { step: 1, text: 'Installera Claude Desktop / Claude Code Desktop-appen' },
  { step: 2, text: 'Öppna Code-fliken i appen' },
  { step: 3, text: 'Välj Local och din projektmapp' },
  { step: 4, text: 'Skriv en liten uppgift i inmatningsfältet' },
  { step: 5, text: 'Granska diffen innan du accepterar ändringar' },
]

export function GettingStartedSection() {
  return (
    <>
      <SectionWrapper id="getting-started" alt>
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
          {getSectionPrefix('getting-started', 'Kom igång')}
        </p>
        <h2 className="section-heading">Installera, starta, förstå</h2>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl">
          Claude Code finns som CLI-verktyg och som Desktop-app. Båda ger Claude tillgång till din
          projektmapp — det är det viktigaste att förstå.
        </p>

        {/* Two-column install guides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {/* CLI */}
          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={16} className="text-teal-400" />
              <span className="text-sm font-semibold text-teal-300">CLI · terminal</span>
            </div>
            <ol className="space-y-3">
              {cliSteps.map(({ step, text, prompt }) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-400 mt-0.5">
                    {step}
                  </span>
                  <div>
                    <span className="text-sm text-slate-300">{text}</span>
                    {prompt && (
                      <div className="mt-2 flex items-start gap-2">
                        <span className="font-mono text-xs text-teal-300 bg-teal-500/10 border border-teal-500/20 rounded px-2 py-1 flex-1">
                          "{prompt}"
                        </span>
                        <CopyButton text={prompt} />
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Desktop */}
          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <Monitor size={16} className="text-teal-400" />
              <span className="text-sm font-semibold text-teal-300">Desktop-app</span>
            </div>
            <ol className="space-y-3">
              {desktopSteps.map(({ step, text }) => (
                <li key={step} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-700 border border-slate-600 flex items-center justify-center text-xs font-bold text-slate-400 mt-0.5">
                    {step}
                  </span>
                  <span className="text-sm text-slate-300">{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* What happens */}
        <div className="card mb-6">
          <p className="text-sm font-semibold text-slate-300 mb-4">Vad händer när du startar Claude Code?</p>
          <div className="space-y-2">
            {whatHappens.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <ArrowRight size={13} className="text-teal-500 flex-shrink-0" />
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Windows note */}
        <div className="border border-slate-700/40 bg-slate-800/20 rounded-xl p-4 mb-6">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Windows-not
          </p>
          <ul className="space-y-1.5">
            {[
              'Du kan köra Claude Code nativt i PowerShell/CMD eller i WSL.',
              'Git for Windows är bra att ha installerat vid native-körning.',
              'Följ organisationens riktlinjer för installation och säkerhet.',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                <span className="text-slate-600 mt-0.5">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Callout variant="info" title="Det viktigaste att förstå">
          Det viktiga är inte installationen. Det viktiga är att förstå att Claude Code får
          arbetskontext från din projektmapp — därför spelar repo-hygien, secrets och git-status roll
          redan från start.
        </Callout>

        <Callout variant="tip" title="Kom igång rätt">
          Börja med ett litet projekt eller en liten uppgift. Kör inte igång direkt i det mest
          känsliga eller kritiska projektet. Flytta bort hemligheter ur repo innan du använder
          verktyget brett.
        </Callout>

        <SpeakerPanel sectionId="getting-started" />
      </SectionWrapper>

      <SectionWrapper id="getting-started-poll">
        <PollQuestion poll={polls.gettingStarted} />
      </SectionWrapper>
    </>
  )
}
