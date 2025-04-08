import type { Config } from "tailwindcss";

const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-lexend)", "serif"],
      },
    },
  },
} satisfies Config;

export default config;
