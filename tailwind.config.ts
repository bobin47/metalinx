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
        'regal-blue': '#009179',
      },

      spacing: {
        '17px': '17px',
        "spacingSection":'150px'
      },

      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        'introduce': '18px',
        'linkAll': '72px',
        'linkAll2': '20px',
      }
    },
    // backgroundColor: theme => ({
    //   'primary': 'background: rgba(255, 255, 255, 0.2)',
    //   'secondary': '#ffed4a',
    //   'danger': '#e3342f',
    //  })
  },
  plugins: [],
};
export default config;
