import { PortalHost } from '@rn-primitives/portal';
import type { Preview } from '@storybook/react-vite';
import React from 'react';
import "../global.css";

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
      <>
        <Story />
        <PortalHost />
      </>
    ),
  ]
};

export default preview;