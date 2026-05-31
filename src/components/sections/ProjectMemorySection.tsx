import { FileText } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { Callout } from '../ui/Callout'
import { CopyButton } from '../ui/CopyButton'
import { PollQuestion } from '../ui/PollQuestion'
import { SpeakerPanel } from '../ui/SpeakerPanel'
import { polls } from '../../data'
import { getSectionPrefix } from '../../utils/sectionLabel'

const claudeMdExample = `This is a .NET backend and React frontend application.

Read these when relevant:
- Architecture: @docs/architecture.md
- Coding standards: @docs/coding-standards.md
- Testing: @docs/testing.md
- Security rules: @docs/security.md
- Domain glossary: @docs/domain-glossary.md

Default workflow:
- Start by understanding the task and locating relevant files.
- Do not edit files before proposing a plan.
- Prefer small, reviewable changes.
- Follow existing patterns in the codebase.
- After changes, suggest relevant build/test commands.

Security:
- Never expose secrets.
- Never commit real credentials.
- Prefer environment variables, User Secrets or Key Vault.
- Stop if a file appears to contain passwords, tokens or connection strings.

Git:
- Do not commit unless explicitly asked.
- Keep changes minimal.
- Summarize changed files after implementation.`

const recommendedFiles = [
  { file: 'CLAUDE.md', desc: 'Ingångspunkt — kort, tydlig, pekar vidare', root: true },
  { file: 'docs/architecture.md', desc: 'Systemöversikt, flöden, integrationer' },
  { file: 'docs/coding-standards.md', desc: 'Konventioner, namngivning, mönster' },
  { file: 'docs/testing.md', desc: 'Teststrategi, verktyg, kommandon' },
  { file: 'docs/security.md', desc: 'Säkerhetsregler, hemlighetshantering' },
  { file: 'docs/domain-glossary.md', desc: 'Affärsbegrepp och domäntermer' },
  { file: 'docs/local-development.md', desc: 'Kör-instruktioner, miljöinställningar' },
  { file: 'docs/ai-notes/current-task.md', desc: 'Handover-fil för pågående arbete' },
]

export function ProjectMemorySection() {
  return (
    <>
      <SectionWrapper id="project-memory" alt>
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
          {getSectionPrefix('project-memory', 'Projektminne')}
        </p>
        <h2 className="section-heading">Gör Claude Code bättre i varje repo</h2>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl">
          Claude läser inte dokumentation per automatik — du måste peka ut den. CLAUDE.md och en
          tydlig docs-struktur är din investering i bättre svar.
        </p>

        <h3 className="section-subheading">Rekommenderade filer</h3>
        <div className="space-y-2 mb-8">
          {recommendedFiles.map((item) => (
            <div
              key={item.file}
              className={`flex items-start gap-3 p-3 rounded-lg border text-sm ${
                item.root
                  ? 'bg-teal-500/5 border-teal-500/25'
                  : 'bg-slate-800/40 border-slate-700/40'
              }`}
            >
              <FileText
                size={14}
                className={`flex-shrink-0 mt-0.5 ${item.root ? 'text-teal-400' : 'text-slate-500'}`}
              />
              <div>
                <span
                  className={`font-mono font-medium ${item.root ? 'text-teal-300' : 'text-slate-300'}`}
                >
                  {item.file}
                </span>
                <span className="text-slate-400 ml-2">{item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <Callout variant="info" title="Principen">
          CLAUDE.md ska vara <strong>kort och tydlig</strong> och bara peka vidare. Lång
          dokumentation hör hemma i docs/*.md — det är lättare att underhålla och enklare att
          referera selektivt.
        </Callout>

        <Callout variant="tip" title="Domänordlista är undervärderarat">
          I komplexa affärssystem gissar Claude annars på domäntermer. En docs/domain-glossary.md
          eliminerar många missförstånd.
        </Callout>

        <h3 className="section-subheading">Exempel på CLAUDE.md</h3>
        <div className="card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              CLAUDE.md
            </span>
            <CopyButton text={claudeMdExample} />
          </div>
          <div className="prompt-block text-sm">{claudeMdExample}</div>
        </div>

        <SpeakerPanel sectionId="project-memory" />
      </SectionWrapper>

      <SectionWrapper id="project-memory-poll">
        <PollQuestion poll={polls.projectMemory} />
      </SectionWrapper>
    </>
  )
}
