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

function langFromPath(): Lang | null {
  const segment = window.location.pathname.split('/').filter(Boolean)[0]
  return segment === 'en' || segment === 'de' ? segment : null
}

function detectLang(): Lang {
  const pathLang = langFromPath()
  if (pathLang) return pathLang

  const stored = localStorage.getItem('netshot-lang')
  if (stored === 'en' || stored === 'de') return stored
  return navigator.language.toLowerCase().startsWith('de') ? 'de' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang)

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('netshot-lang', l)

    const { hash, pathname } = window.location
    const segments = pathname.split('/').filter(Boolean)
    if (segments[0] === 'en' || segments[0] === 'de') {
      segments[0] = l
    } else {
      segments.unshift(l)
    }
    window.history.replaceState(null, '', `/${segments.join('/')}/${hash}`)
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dataset.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLang = () => useContext(LanguageContext)
