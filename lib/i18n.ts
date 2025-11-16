import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { getLocales } from 'expo-localization';

import { messages as enMessages } from '../locales/en/messages';
import { messages as esMessages } from '../locales/es/messages';

i18n.load({
  en: enMessages,
  es: esMessages,
});

const getDeviceLocale = (): string => {
  try {
    const locales = getLocales();
    const deviceLocale = locales[0]?.languageCode || 'en';
    return deviceLocale === 'es' ? 'es' : 'en';
  } catch {
    return 'en';
  }
};

i18n.activate(getDeviceLocale());

export { getDeviceLocale, i18n, I18nProvider };

