import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          black: { value: "#000" },
          white: { value: "#fff" },
          red: {value: "#dc143c"},
          gray: { value: "#f2f2f2" },
        },
      },
    },
  },

  outdir: "styled-system",
  jsxFramework: "react", 
});
