import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#262543",
          light: "#3a3960",
        },
        accent: {
          DEFAULT: "#F6951E",
          hover: "#e0850a",
        },
        dark: "#1a1a2e",
        gray: {
          900: "#111827",
          600: "#4B5563",
          400: "#9CA3AF",
          100: "#F3F4F6",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
