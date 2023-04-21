import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import postcssPresetEnv from "postcss-preset-env"; // importar esto

export default () => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      postcss: {
        plugins: [
          postcssPresetEnv({
            stage: false,
            features: {
              "nesting-rules": true,
              "custom-media-queries": true,
            },
          }),
        ],
      },
    },
  });
};
