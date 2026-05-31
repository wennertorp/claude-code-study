import { SectionWrapper } from '../ui/SectionWrapper'
import { PromptCard } from '../ui/PromptCard'
import { PollQuestion } from '../ui/PollQuestion'
import { SpeakerPanel } from '../ui/SpeakerPanel'
import { prompts, polls } from '../../data'
import { getSectionPrefix } from '../../utils/sectionLabel'

export function PromptLibrarySection() {
  return (
    <>
      <SectionWrapper id="prompt-library" alt>
        <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-3">
          {getSectionPrefix('prompt-library', 'Promptmönster')}
        </p>
        <h2 className="section-heading">Promptbibliotek för utvecklare</h2>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-2xl">
          Återanvändbara prompts för de vanligaste situationerna. Kopiera, anpassa och spara dina
          egna varianter i teamets CLAUDE.md eller docs.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {prompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>

        <SpeakerPanel sectionId="prompt-library" />
      </SectionWrapper>

      <SectionWrapper id="prompt-library-poll">
        <PollQuestion poll={polls.prompts} />
      </SectionWrapper>
    </>
  )
}
