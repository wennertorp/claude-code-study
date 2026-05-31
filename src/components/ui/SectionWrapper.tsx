interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
  alt?: boolean
}

export function SectionWrapper({ id, children, className = '', alt = false }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative border-b border-slate-800/60 ${alt ? 'bg-[#0d1424]' : ''} ${className}`}
    >
      <div className="section-base">{children}</div>
    </section>
  )
}
