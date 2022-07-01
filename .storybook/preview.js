import i18n from './i18next.js';
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "dark",
    values: [{ name: "dark", value: "#041525" }],
  },
  i18n,
  locale: 'en',
  locales: {
    en: 'English',
    de: 'Deutsch',
  },
};