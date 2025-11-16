import { i18n } from '@/lib/i18n';
import { useCallback } from 'react';

export function useI18n() {
  const changeLocale = useCallback((locale: string) => {
    i18n.activate(locale);
  }, []);

  const currentLocale = i18n.locale;

  return {
    locale: currentLocale,
    changeLocale,
  };
}

