import type { StorybookConfig } from "@storybook/react-native-web-vite";

const config: StorybookConfig = {
  stories: [
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-native-web-vite",
    options: {
      modulesToTranspile: ["@rn-primitives"],
      pluginReactOptions: {
        jsxRuntime: "automatic",
        jsxImportSource: "nativewind",
        babel: {
          presets: ["nativewind/babel"],
          plugins: [
            "@babel/plugin-proposal-export-namespace-from",
            "react-native-worklets/plugin",
          ],
        },
      },
    },
  },
};

export default config;
