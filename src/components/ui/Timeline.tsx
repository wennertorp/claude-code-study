import type { TimelineStep } from '../../types'

interface TimelineProps {
  steps: TimelineStep[]
}

export function Timeline({ steps }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-700" />
      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.step} className="flex gap-4 relative">
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold z-10 border-2 transition-colors ${
                step.highlight
                  ? 'bg-teal-500 border-teal-400 text-white'
                  : 'bg-[#0f1629] border-slate-600 text-slate-400'
              }`}
            >
              {step.step}
            </div>
            <div className="pb-4">
              <p
                className={`font-semibold mb-1 ${
                  step.highlight ? 'text-teal-300' : 'text-slate-200'
                }`}
              >
                {step.title}
                {step.highlight && (
                  <span className="ml-2 badge bg-teal-500/15 text-teal-300 border border-teal-500/25 text-xs">
                    Viktigt
                  </span>
                )}
              </p>
              <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
