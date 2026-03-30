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

export default i18n

