import { Wrench, Users, Shield, Plug, FlaskConical } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { PollQuestion } from '../ui/PollQuestion'
import { SpeakerPanel } from '../ui/SpeakerPanel'
import { polls } from '../../data'
import { getSectionPrefix } from '../../utils/sectionLabel'

interface NextLevelCard {
  icon: React.ElementType
  title: string
  description: string
  example: string
  relevance: string
  iconColor: string
  borderColor: string
}

const cards: NextLevelCard[] = [
  {
    icon: Wrench,
    title: 'Skills',
    description:
      'Återanvändbara arbetsflöden och checklistor som Claude kan följa på kommando.',
    example:
      '/code-review — granskar ändringen som en pull request. /security-review — letar aktivt efter säkerhetsbrister. /sql-explain — sammanfattar komplex SQL utan brus.',
    relevance:
      'Standardiserar hur Claude jobbar i teamet utan att varje person behöver formulera rätt prompt manuellt.',
    iconColor: 'text-teal-400',
    borderColor: 'border-teal-500/25',
  },
  {
    icon: Users,
    title: 'Subagents / Agenter',
    description:
      'Specialiserade AI-roller som fokuserar på en specifik uppgift i parallell med din session.',
    example:
      'En security reviewer som bara letar säkerhetsbrister. En test writer som bara skriver tester. En frontend reviewer med fokus på tillgänglighet.',
    relevance:
      'Flera perspektiv på samma kod utan att blanda kontext. Olika agenter kan köras parallellt.',
    iconColor: 'text-purple-400',
    borderColor: 'border-purple-500/25',
  },
  {
    icon: Shield,
    title: 'Hooks',
    description:
      'Automatiska skyddsräcken och automationssteg som aktiveras vid specifika händelser.',
    example:
      'Blockera commit om secrets hittas i ändringen. Kör lint och formatering före varje filändring. Stoppa riskabla kommandon som rm -rf eller DROP TABLE.',
    relevance:
      'Teamstandard som gäller automatiskt i alla sessioner — inte beroende av att rätt prompt skrivs.',
    iconColor: 'text-orange-400',
    borderColor: 'border-orange-500/25',
  },
  {
    icon: Plug,
    title: 'MCP · Model Context Protocol',
    description:
      'Koppling till externa verktyg och datakällor direkt i Claude Code-sessionen.',
    example:
      'Hämta issues från GitHub/Azure DevOps. Läs databasschema direkt. Hämta API-dokumentation. Koppla in intern kunskap och systembeskrivningar.',
    relevance:
      'Claude kan använda teamets faktiska verktyg och data utan att ni behöver klistra in allt manuellt i varje session.',
    iconColor: 'text-blue-400',
    borderColor: 'border-blue-500/25',
  },
  {
    icon: FlaskConical,
    title: 'Testing',
    description:
      'Låt Claude identifiera testfall och skriva tester — men du avgör vad som faktiskt bevisar rätt beteende.',
    example:
      '"Vilka edge cases bör testas för den här valideringsregeln?" → Claude föreslår testfall → du väljer vilka som är meningsfulla → Claude implementerar.',
    relevance:
      'Tester är ett av de säkraste ställena att börja med Claude Code. Låg risk, direkt värde, och det tvingar fram tydliga krav.',
    iconColor: 'text-green-400',
    borderColor: 'border-green-500/25',
  },
]

function NextLevelCard({ card }: { card: NextLevelCard }) {
  const Icon = card.icon
  return (
    <div className={`card border ${card.borderColor} hover:brightness-110 transition-all duration-200`}>
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <Icon size={16} className={card.iconColor} />
          <h3 className="font-semibold text-slate-100">{card.title}</h3>
        </div>
        <span className="badge bg-slate-700/60 text-slate-400 border border-slate-600/40 text-xs flex-shrink-0">
          Fördjupning
        </span>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mb-3">{card.description}</p>

      <div className="bg-slate-800/60 rounded-lg p-3 mb-3">
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">Exempel</p>
        <p className="text-sm text-slate-300 leading-relaxed">{card.example}</p>
      </div>

      <div className="flex items-start gap-2">
        <span className="text-teal-500 mt-0.5 text-xs flex-shrink-0">→</span>
        <p className="text-xs text-slate-400 leading-relaxed">{card.relevance}</p>
      </div>
    </div>
  )
}

export function NextLevelSection() {
  return (
    <>
      <SectionWrapper id="next-level">
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
          {getSectionPrefix('next-level', 'Fördjupning')}
        </p>
        <h2 className="section-heading">Skills, agenter, hooks och MCP</h2>
        <p className="text-slate-400 text-lg mb-3 leading-relaxed max-w-2xl">
          När grundarbetssättet sitter finns det mycket mer att utforska. Det här är en översikt
          över nästa nivå — inget av detta är ett krav för att komma igång.
        </p>
        <div className="inline-flex items-center gap-2 badge bg-slate-700/60 text-slate-400 border border-slate-600/40 mb-8 text-sm px-3 py-1.5">
          Alla kort nedan är fördjupningsämnen — utforska när grundflödet sitter
        </div>

        <div className="grid grid-cols-1 gap-5 mb-10">
          {cards.map((card) => (
            <NextLevelCard key={card.title} card={card} />
          ))}
        </div>

        <div className="border border-teal-500/30 bg-teal-500/5 rounded-2xl p-6">
          <p className="text-base font-semibold text-teal-100 mb-2">
            Nästa steg
          </p>
          <p className="text-slate-400 text-sm leading-relaxed">
            Grundflödet — förstå, planera, ändra lite, reviewa — är det viktigaste att ha suttit
            med ett par veckor innan du går vidare. När det känns naturligt är skills, hooks,
            subagents och MCP-integrationer det som gör Claude Code till ett team-anpassat verktyg
            snarare än ett personligt stöd.
          </p>
        </div>

        <SpeakerPanel sectionId="next-level" />
      </SectionWrapper>

      <SectionWrapper id="next-level-poll" alt>
        <PollQuestion poll={polls.nextLevel} />
      </SectionWrapper>
    </>
  )
}
