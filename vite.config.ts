import { defineConfig } from "vite";
import { rnw } from "vite-plugin-rnw";
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths(),
    rnw({
      jsxRuntime: "automatic",
      jsxImportSource: "nativewind",
      babel: {
        presets: ["nativewind/babel"],
        plugins: [
          "@babel/plugin-proposal-export-namespace-from",
          "react-native-reanimated/plugin",
        ],
      },
    }),
  ],
});
