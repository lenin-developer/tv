import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

export default ({ mode }) => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  });
};
