import type { StorybookConfig } from "@storybook/react-native-web-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [],
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
  // viteFinal: async (config) => {
  //   const extensions = [
  //     ".web.mjs",
  //     ".web.js",
  //     ".web.tsx",
  //     ".web.ts",
  //     ".web.jsx",
  //     ".web.cjs",
  //     ".mjs",
  //     ".js",
  //     ".ts",
  //     ".tsx",
  //     ".jsx",
  //     ".cjs",
  //     ".json",
  //   ];

  //   return mergeConfig(config, {
  //     resolve: {
  //       extensions,
  //     },
  //     optimizeDeps: {
  //       esbuildOptions: {
  //         jsx: "automatic",
  //         jsxImportSource: "nativewind",
  //         resolveExtensions: extensions,
  //       },
  //     },
  //   } satisfies InlineConfig);
  // },
};

export default config;
