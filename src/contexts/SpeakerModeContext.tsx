import { createContext, useContext, useState } from 'react'

interface SpeakerModeContextValue {
  isSpeakerMode: boolean
  toggle: () => void
}

const SpeakerModeContext = createContext<SpeakerModeContextValue>({
  isSpeakerMode: false,
  toggle: () => {},
})

export function useSpeakerMode() {
  return useContext(SpeakerModeContext)
}

export function SpeakerModeProvider({ children }: { children: React.ReactNode }) {
  const initial = new URLSearchParams(window.location.search).get('speaker') === 'true'
  const [isSpeakerMode, setIsSpeakerMode] = useState(initial)

  const toggle = () => setIsSpeakerMode((v) => !v)

  return (
    <SpeakerModeContext.Provider value={{ isSpeakerMode, toggle }}>
      {children}
    </SpeakerModeContext.Provider>
  )
}
