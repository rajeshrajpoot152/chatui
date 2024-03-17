import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primarydark1: '#333B54',
        primarydark2: '#5a6a85',
        primarylight1:'#ecf2ff',
        primarylight2: '#7c8fac',
        primarylight3: '#f2f6fa',
      },
    },
  },
  plugins: [
    require('@gradin/tailwindcss-scrollbar'),
    
  ],
};
export default config;
