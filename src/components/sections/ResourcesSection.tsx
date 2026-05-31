import { BookOpen, Shield, Layers, ArrowRight, Code2 } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { prompts } from '../../data'
import { CopyButton } from '../ui/CopyButton'
import { getSectionPrefix } from '../../utils/sectionLabel'

interface ResourceCardProps {
  icon: React.ElementType
  title: string
  items: string[]
  iconColor?: string
}

function ResourceCard({ icon: Icon, title, items, iconColor = 'text-teal-400' }: ResourceCardProps) {
  return (
    <div className="card">
      <div className="flex items-center gap-2 mb-4">
        <Icon size={16} className={iconColor} />
        <h3 className="font-semibold text-slate-200 text-sm">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
            <span className="text-teal-500 mt-0.5 flex-shrink-0">·</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const nextSteps = [
  'Skapa CLAUDE.md i minst ett repo den här veckan',
  'Prova "Utforska utan att ändra"-prompten på en riktig uppgift',
  'Lägg docs/ai-notes/current-task.md i gitignore eller som handover-mall',
  'Diskutera var hemligheter ligger i era projekt och skapa en plan',
  'Dela erfarenheter i teamet efter 2 veckor',
]

const contextChecklist = [
  'Starta med en smal, tydlig uppgift',
  'Separera frontend och backend i olika sessioner',
  'Använd /context för att övervaka kontextstorleken',
  'Sammanfatta med /compact + tydligt direktiv',
  'Spara handover i docs/ai-notes/current-task.md',
]

const securityChecklist = [
  'Inga lösenord eller tokens i repo',
  'Lokala hemlighetsfiler i .gitignore',
  'Använd User Secrets / env vars lokalt',
  'Azure Key Vault / pipeline secrets för test/prod',
  'Kör secrets scanning i pipeline',
  'Rotera hemligheter som läckt ut',
]

export function ResourcesSection() {
  return (
    <SectionWrapper id="resources">
      <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
        {getSectionPrefix('resources', 'Resurser')}
      </p>
      <h2 className="section-heading">Snabbreferens och nästa steg</h2>
      <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl">
        Allt du behöver för att komma igång och hålla igång.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <ResourceCard
          icon={Layers}
          title="Context-checklista"
          items={contextChecklist}
        />
        <ResourceCard
          icon={Shield}
          title="Säkerhetschecklista"
          items={securityChecklist}
          iconColor="text-orange-400"
        />
      </div>

      <h3 className="section-subheading">Promptbibliotek — snabbreferens</h3>
      <div className="grid grid-cols-1 gap-3 mb-10">
        {prompts.map((prompt) => (
          <div
            key={prompt.id}
            className="flex items-start gap-3 p-3 rounded-lg border border-slate-700/40 bg-slate-800/20"
          >
            <span className="badge bg-teal-500/15 text-teal-300 border border-teal-500/25 flex-shrink-0 text-xs">
              {prompt.category}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-300 mb-1">{prompt.categoryLabel}</p>
              <p className="font-mono text-xs text-slate-400 truncate">{prompt.prompt.split('\n')[0]}…</p>
            </div>
            <CopyButton text={prompt.prompt} className="flex-shrink-0" />
          </div>
        ))}
      </div>

      <h3 className="section-subheading">Rekommenderade filer att skapa</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
        {[
          { file: 'CLAUDE.md', note: 'Ingångspunkt' },
          { file: 'docs/architecture.md', note: 'Systemöversikt' },
          { file: 'docs/coding-standards.md', note: 'Konventioner' },
          { file: 'docs/testing.md', note: 'Teststrategi' },
          { file: 'docs/security.md', note: 'Säkerhetsregler' },
          { file: 'docs/domain-glossary.md', note: 'Domäntermer' },
          { file: 'docs/local-development.md', note: 'Kom igång lokalt' },
          { file: 'docs/ai-notes/current-task.md', note: 'Handover-fil' },
        ].map(({ file, note }) => (
          <div
            key={file}
            className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/30 border border-slate-700/30"
          >
            <BookOpen size={12} className="text-slate-500 flex-shrink-0" />
            <span className="font-mono text-xs text-teal-300">{file}</span>
            <span className="text-xs text-slate-500 ml-auto">{note}</span>
          </div>
        ))}
      </div>

      <h3 className="section-subheading">Nästa steg</h3>
      <div className="space-y-2 mb-6">
        {nextSteps.map((step, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
            <ArrowRight size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />
            {step}
          </div>
        ))}
      </div>

      <div className="card border-teal-500/20 mb-10">
        <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">
          Fördjupning — när grundflödet sitter
        </p>
        <ul className="space-y-1.5">
          {[
            'Skills: teamanpassade arbetsflöden och kommandon',
            'Hooks: automatiska säkerhetsspärrar och automationssteg',
            'Subagents: specialiserade granskare och parallella roller',
            'MCP: integrationer mot era egna verktyg och datakällor',
            'Testing: testfall och testgenerering med Claude Code',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
              <span className="text-teal-500 mt-0.5 flex-shrink-0">·</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-800 pt-8 mt-8 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-teal-400" />
          <span className="text-sm text-slate-400">Claude Code som parprogrammerare</span>
        </div>
        <div className="text-xs text-slate-600">
          Material framtaget av Carl Wennertorp · Anthropic 2025
        </div>
      </div>
    </SectionWrapper>
  )
}
