import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { translations, Lang } from './translations'

type LangContextType = {
  lang: Lang
  t: typeof translations['en']
  setLang: (l: Lang) => void
}

const LanguageContext = createContext<LangContextType>({
  lang: 'en',
  t: translations.en,
  setLang: () => {},
})

function detectLang(): Lang {
  const stored = localStorage.getItem('netshot-lang')
  if (stored === 'en' || stored === 'de') return stored
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('netshot-lang', l)
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LanguageContext)
