import { Terminal, MessageSquare, ChevronDown } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { PollQuestion } from '../ui/PollQuestion'
import { SpeakerPanel } from '../ui/SpeakerPanel'
import { polls } from '../../data'

export function HeroSection() {
  return (
    <>
      {/* Hero — fullscreen-feel with gradient */}
      <section
        id="intro"
        className="relative min-h-screen flex flex-col justify-center border-b border-slate-800/60 overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-teal-500/5 rounded-full blur-3xl" />
        </div>

        <div className="section-base relative z-10 flex flex-col items-start lg:pl-8">
          <div className="inline-flex items-center gap-2 badge bg-teal-500/15 text-teal-300 border border-teal-500/25 mb-6 text-sm px-3 py-1.5">
            <Terminal size={14} />
            Instuderingsmaterial för utvecklare
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Claude Code som{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              parprogrammerare
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-400 font-medium mb-8 max-w-2xl leading-relaxed">
            Så använder du Claude Code i riktig kodbas utan att tappa kontrollen.
          </p>

          {/* Intro paragraph */}
          <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 max-w-2xl w-full mb-8">
            <p className="text-base text-slate-300 leading-relaxed">
              Det här materialet är ett praktiskt stöd för utvecklare som vill komma igång med Claude
              Code på ett säkert och strukturerat sätt. Fokus ligger inte på AI-magi, utan på
              arbetssätt: hur du ger bra kontext, håller ändringar små, skyddar hemligheter, hanterar
              context och använder Claude som stöd i vardagligt utvecklingsarbete.
            </p>
          </div>

          {/* Core quote */}
          <div className="border border-teal-500/30 bg-teal-500/5 rounded-2xl p-6 max-w-2xl w-full mb-10">
            <p className="text-base sm:text-lg text-teal-100 leading-relaxed font-medium">
              "Utvecklaren äger fortfarande design, review, testning och ansvar."
            </p>
          </div>

          {/* Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-6">
            <div className="card">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare size={16} className="text-slate-400" />
                <span className="text-sm font-semibold text-slate-300">Vanlig AI-chatt</span>
              </div>
              <ul className="space-y-1.5">
                {[
                  'Du klistrar in kod manuellt',
                  'Begränsad kontext',
                  'Ger förslag, inte ändringar',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-slate-600 mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card border-teal-500/30">
              <div className="flex items-center gap-2 mb-3">
                <Terminal size={16} className="text-teal-400" />
                <span className="text-sm font-semibold text-teal-300">Claude Code</span>
              </div>
              <ul className="space-y-1.5">
                {[
                  'Kan läsa hela kodbasen',
                  'Följer imports och struktur',
                  'Kan ändra filer direkt',
                  'Kan köra kommandon',
                  'Arbetar över flera filer',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="text-teal-500 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Author */}
          <p className="text-xs text-slate-600 mt-2">
            Material framtaget av Carl Wennertorp
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={20} className="text-slate-600" />
        </div>
        <div className="section-base relative z-10 pb-0 pt-0">
          <SpeakerPanel sectionId="intro" />
        </div>
      </section>

      {/* Poll */}
      <SectionWrapper id="intro-poll" alt>
        <PollQuestion poll={polls.intro} />
      </SectionWrapper>
    </>
  )
}
