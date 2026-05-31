export interface PollQuestion {
  id: string
  question: string
  options: string[]
  type: 'singleChoice'
  speakerNote?: string
  externalUrl?: string
}

export interface PromptCard {
  id: string
  category: string
  categoryLabel: string
  prompt: string
  description?: string
}

export type CalloutVariant = 'info' | 'warning' | 'tip' | 'avoid'

export interface SectionMeta {
  id: string
  title: string
  shortTitle: string
  duration?: string
}

export interface TimelineStep {
  step: number
  title: string
  description: string
  highlight?: boolean
}

export interface ComparisonItem {
  label: string
  variant: 'bad' | 'good'
  text: string
  items?: string[]
}

export interface ChecklistItem {
  id: string
  text: string
  detail?: string
}

export interface RedFlag {
  text: string
}

export interface ResourceLink {
  label: string
  description: string
  content: string
  type: 'prompts' | 'markdown' | 'security' | 'context' | 'demo' | 'next'
}
