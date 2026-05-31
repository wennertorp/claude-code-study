import { useEffect, useState } from 'react'
import type { SectionMeta } from '../types'

export function useActiveSection(sections: SectionMeta[]) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? '')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id)
        },
        { rootMargin: '-20% 0px -70% 0px', threshold: 0 },
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [sections])

  return activeId
}
