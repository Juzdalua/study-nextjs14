import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './app/**/*.{tsx,ts}',
    './components/**/*.{tsx,ts}',
    './styles/**/*.{css}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
