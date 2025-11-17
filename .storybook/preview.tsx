import { PortalHost } from '@rn-primitives/portal';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/react-vite';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "../global.css";
import { useAppFonts } from '../hooks/useAppFonts';
import { I18nProvider, i18n } from '../lib/i18n';

const FontLoader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loaded, error] = useAppFonts();

  useEffect(() => {
    if (error) {
      console.error('Error loading fonts:', error);
    }
  }, [error]);

  if (!loaded) {
    return null;
  }

  return <>{children}</>;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globalTypes: {
    locale: {
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'es', title: 'Spanish' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    (Story: React.ComponentType, context: any)  => {
      const locale = context.globals.locale || 'en';

      useEffect(() => {
        i18n.activate(locale);
      }, [locale]);

      return (
        <I18nProvider i18n={i18n}>
          <SafeAreaProvider>
            <FontLoader>
              <Story />
              <PortalHost />
            </FontLoader>
          </SafeAreaProvider>
        </I18nProvider>
      );
    },
  ],
};

export default preview;