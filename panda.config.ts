import { defineConfig } from "@pandacss/dev";

// これは min-width ベースのみ
export const breakpoints = {
  sm: '400px',
  md: '768px',
  lg: '1000px',
  xl: '1200px',
}


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
      breakpoints,
    },
  },

  outdir: "styled-system",
  jsxFramework: "react", 
});
