import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
     colors: {
      "blue-dark": "#1E6F9F",
      "blue-normal": "#4EA8DE",
      "purple-dark": "#5E60CE",
      "purple-normal": "#8284FA",
      "danger": "#E25858",
      "custom-gray": {
        700: "#0D0D0D",
        600: "#1A1A1A",
        500: "#262626",
        400: "#333333",
        300: "#808080",
        200: "#D9D9D9",
        100: "#F2F2F2",
      }
     }
    },
  },
  plugins: [],
}
export default config
