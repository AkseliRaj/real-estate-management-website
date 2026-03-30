import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en/translation.json'
import fi from './locales/fi/translation.json'

const getDefaultLanguage = () => {
  if (typeof navigator === 'undefined') return 'fi'
  const lang = navigator.language?.toLowerCase() || ''
  return lang.startsWith('en') ? 'en' : 'fi'
}

await i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fi: { translation: fi }
    },
    lng: getDefaultLanguage(),
    fallbackLng: 'fi',
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  })

/** Keeps <html lang> in sync with the active locale (accessibility / document language). */
function syncHtmlLang(lng) {
  if (typeof document === 'undefined') return
  const code = (lng ?? i18n.resolvedLanguage ?? i18n.language ?? 'fi').split('-')[0]
  document.documentElement.lang = code === 'en' ? 'en' : 'fi'
}

syncHtmlLang()
i18n.on('languageChanged', syncHtmlLang)

export default i18n

