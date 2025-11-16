import { PortalHost } from '@rn-primitives/portal';
import type { Preview } from '@storybook/react-vite';
import React, { useEffect } from 'react';
import "../global.css";
import { useAppFonts } from '../hooks/useAppFonts';

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
  decorators: [
    (Story: React.ComponentType) => (
      <FontLoader>
        <Story />
        <PortalHost />
      </FontLoader>
    ),
  ]
};

export default preview;