import { Tolgee, DevTools, FormatSimple, BackendFetch } from "@tolgee/react";

export const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .use(BackendFetch({ prefix: 'https://i18n-r2.decide.pe/caed453166a9d08591bf22a743297b6c'}))
  .init({
    apiUrl: import.meta.env.VITE_TOLGEE_API_URL,
    apiKey: import.meta.env.VITE_TOLGEE_API_KEY,
    defaultLanguage: 'es',
    availableLanguages: ['es'],
    fallbackLanguage: 'es',
  });