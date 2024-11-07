import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scale: {
        'small': '.97',
       " xl-small":".97"
      },
      backgroundImage:{
        'custom-bg':"url(/assets/background/loginBackground.jpg)"
      },
      fontFamily:{
        bricolage: ['Bricolage Grotesque', 'sans-serif']
      },
      colors: {
        darkblue: "#2A7EC9",
        midblue: "#98B0FF",
      },
    },
  },
  plugins: [],
};
export default config;
