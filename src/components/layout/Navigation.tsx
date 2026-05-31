import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { sections } from '../../data'
import { useActiveSection } from '../../hooks/useActiveSection'

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useActiveSection(sections)

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden lg:flex fixed left-0 top-0 bottom-0 w-56 flex-col bg-[#080d18] border-r border-slate-800/60 z-40 pt-6 pb-4">
        <div className="px-5 mb-6">
          <div className="flex items-center gap-2">
            <Code2 size={18} className="text-teal-400" />
            <span className="text-sm font-semibold text-teal-400">Claude Code</span>
          </div>
          <p className="text-xs text-slate-600 mt-1">Instuderingsmaterial</p>
        </div>

        <div className="flex-1 overflow-y-auto px-3 space-y-0.5">
          {sections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => handleNav(section.id)}
              className={`w-full text-left flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 group ${
                activeId === section.id
                  ? 'bg-teal-500/15 text-teal-300 font-medium'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <span
                className={`text-xs font-mono w-5 flex-shrink-0 ${
                  activeId === section.id ? 'text-teal-500' : 'text-slate-600 group-hover:text-slate-500'
                }`}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="truncate">{section.shortTitle}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0.5 left-0 right-0 bg-[#080d18]/95 backdrop-blur border-b border-slate-800/60 z-40 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code2 size={16} className="text-teal-400" />
          <span className="text-sm font-semibold text-teal-400">Claude Code</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-slate-400 hover:text-slate-200 transition-colors"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-12 left-0 right-0 bg-[#080d18] border-b border-slate-800 z-40 max-h-[70vh] overflow-y-auto">
          {sections.map((section, idx) => (
            <button
              key={section.id}
              onClick={() => handleNav(section.id)}
              className={`w-full text-left flex items-center gap-3 px-5 py-3 text-sm border-b border-slate-800/40 transition-colors ${
                activeId === section.id
                  ? 'text-teal-300 bg-teal-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span className="text-xs font-mono text-slate-600 w-5">
                {String(idx + 1).padStart(2, '0')}
              </span>
              {section.title}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
