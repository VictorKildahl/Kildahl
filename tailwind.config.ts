import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // theme: {
  //   extend: {
  //     backgroundImage: {
  //       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
  //       "gradient-conic":
  //         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
  //     },
  //   },
  // },
  theme: {
    extend: {
      width: {
        128: "512px",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translatey(0px)",
          },
          "50%": {
            transform: "translatey(-20px)",
          },
          "100%": {
            transform: "translatey(0px)",
          },
        },
      },
      colors: {
        blue: "#6bd6f0",
        darkerBlue: "#154c79",
        dark: "#050F1D",
        darker: "#050D18",
        yellow: "#FFC857",
        darkerYellow: "#FFC900",
        purple: "#6E07F3",
      },
      animation: {
        "floating-slow": "float 7s linear infinite",
        "floating-medium": "float 5.5s linear infinite",
        "floating-normal": "float 4s linear infinite",
        "floating-fast": "float 2s linear infinite",
      },
      screens: {
        "2xl": "1536px",
      },
      backgroundImage: {
        "layer-1": "url('/src/assets/dividers/darkToWhite.svg')",
      },
    },
  },
  plugins: [],
};

export default config;
