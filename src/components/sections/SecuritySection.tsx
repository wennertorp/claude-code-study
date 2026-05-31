import { Shield, AlertTriangle } from 'lucide-react'
import { SectionWrapper } from '../ui/SectionWrapper'
import { Callout } from '../ui/Callout'
import { CopyButton } from '../ui/CopyButton'
import { PollQuestion } from '../ui/PollQuestion'
import { SpeakerPanel } from '../ui/SpeakerPanel'
import { polls } from '../../data'
import { getSectionPrefix } from '../../utils/sectionLabel'

const claudeMdSecurityRules = `Never print secrets, connection strings, tokens, passwords or certificate values.
Never modify files containing real secrets.
If a file appears to contain secrets, stop and tell the developer.
Prefer appsettings examples, environment variables, User Secrets or Key Vault.
Do not suggest committing .env, appsettings.Local.json or real credentials.`

const secretLayers = [
  {
    name: 'appsettings.json',
    content: 'Bara icke-hemliga defaults',
    safe: true,
  },
  {
    name: 'appsettings.Development.json',
    content: 'Lokala, icke-hemliga dev-inställningar',
    safe: true,
  },
  {
    name: 'User Secrets / env vars',
    content: 'Lösenord · connection strings · API-nycklar · certifikatlösenord',
    safe: true,
    highlight: true,
  },
  {
    name: 'Azure Key Vault / pipeline secrets',
    content: 'Test- och produktionsmiljö',
    safe: true,
    highlight: true,
  },
  {
    name: '.env med riktiga värden i repo',
    content: 'Ska aldrig finnas — lägg i .gitignore',
    safe: false,
  },
]

export function SecuritySection() {
  return (
    <>
      <SectionWrapper id="security" alt>
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
          {getSectionPrefix('security', 'Säkerhet')}
        </p>
        <h2 className="section-heading">Jobba säkert med Claude Code</h2>
        <p className="text-slate-400 text-lg mb-8 leading-relaxed max-w-2xl">
          Claude Code kan läsa filer i repot. Det är en styrka — men det kräver att du vet var dina
          hemligheter ligger.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {[
            'Hemligheter ska inte ligga i repo',
            'Reviewa alltid filändringar och kommandon',
            'Starta från clean git status',
            'Låt inte Claude skriva ut tokens eller lösenord',
            'Stoppa arbetet om en fil verkar innehålla riktiga hemligheter',
            'Kör secrets scanning i repo och pipeline',
          ].map((item) => (
            <div key={item} className="flex items-start gap-2.5 text-sm text-slate-300">
              <Shield size={14} className="text-teal-400 mt-0.5 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <h3 className="section-subheading">Lagermodell för .NET-projekt</h3>
        <div className="space-y-2 mb-8">
          {secretLayers.map((layer) => (
            <div
              key={layer.name}
              className={`flex items-start gap-3 p-3 rounded-lg border text-sm ${
                !layer.safe
                  ? 'bg-red-500/5 border-red-500/25'
                  : layer.highlight
                  ? 'bg-teal-500/5 border-teal-500/25'
                  : 'bg-slate-800/40 border-slate-700/40'
              }`}
            >
              <AlertTriangle
                size={14}
                className={`flex-shrink-0 mt-0.5 ${
                  !layer.safe ? 'text-red-400' : layer.highlight ? 'text-teal-400' : 'text-slate-600'
                }`}
              />
              <div>
                <span
                  className={`font-mono font-medium ${
                    !layer.safe ? 'text-red-300' : layer.highlight ? 'text-teal-300' : 'text-slate-300'
                  }`}
                >
                  {layer.name}
                </span>
                <span className="text-slate-400 ml-2">{layer.content}</span>
              </div>
            </div>
          ))}
        </div>

        <h3 className="section-subheading">Exempelregler för CLAUDE.md</h3>
        <div className="card mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              CLAUDE.md — säkerhetssektion
            </span>
            <CopyButton text={claudeMdSecurityRules} />
          </div>
          <div className="prompt-block text-sm">{claudeMdSecurityRules}</div>
        </div>

        <Callout variant="warning" title="CLAUDE.md är en instruktion, inte en säkerhetsspärr">
          Regler i CLAUDE.md styr hur Claude beter sig — men de hindrar inte att hemligheter{' '}
          <em>läses</em> om de finns i filer. Riktig säkerhet kräver att hemligheter inte finns i
          repot överhuvudtaget.
        </Callout>

        <Callout variant="avoid" title="Om hemligheter råkat hamna i repo">
          Ändra lösenordet/token omedelbart. git history-rewrite räcker inte — anta att värdet är
          komprometterat. Rotera alltid.
        </Callout>

        <SpeakerPanel sectionId="security" />
      </SectionWrapper>

      <SectionWrapper id="security-poll">
        <PollQuestion poll={polls.security} />
      </SectionWrapper>
    </>
  )
}
