import { PortalHost } from "@rn-primitives/portal";
import type { Preview } from "@storybook/react-native-web-vite";

import { View } from "react-native";
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
      <View>
        <PortalHost />
        <Story />
      </View>
    ),
  ],
};

export default preview;
