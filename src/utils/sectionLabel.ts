import { sections } from '../data/sections'

export function getSectionLabel(sectionId: string): string {
  const idx = sections.findIndex((s) => s.id === sectionId)
  return idx === -1 ? '' : String(idx + 1).padStart(2, '0')
}

export function getSectionPrefix(sectionId: string, title: string): string {
  const num = getSectionLabel(sectionId)
  return num ? `${num} · ${title}` : title
}
